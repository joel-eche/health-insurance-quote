import React, { useState } from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import { useHistory } from "react-router-dom";
import { Person } from "../../classes/Person";
import { Plan, PLANS } from "../../constants/insurance.constants";
import { ChevronRight, ChevronDown, Heart } from "heroicons-react";
import urlIconBackRounded from "./../../assets/images/icon-back-rounded.svg";
import urlMan from "./../../assets/images/man.svg";
import urlIconCorrect from "./../../assets/images/icon-correct.svg";
import { insuranceFormValidator } from "./insuranceFormValidator";
import {
  DateInput,
  RadioButtonGroupInput,
  SelectWithTextInput,
  TextInput,
  SelectWithDateInput,
} from "../common/FormElements";

type InsuranceFormValues = {
  person: Person;
};

type ElementPlanValues = {
  active: boolean;
  children: React.ReactNode;
};

const ElementPlan = ({ active, children }: ElementPlanValues) => {
  return (
    <li>
      <Heart
        size={12}
        className={active ? "color-primary" : "color-gray-medium"}
      />
      <span className={active ? "" : "unavailable"}>{children}</span>
    </li>
  );
};

const CardBenefits = ({
  name,
  text,
  maxCovered,
  price,
  urlShield,
  isLima,
  isThirtyClinics,
  hasHomeDoctor,
  hasPreventiveCheck,
  hasNationalRefund,
  hasInternationalRefund,
}: Plan) => {
  return (
    <div className="card-plan">
      <div className="card-plan__header">Cuentas con estos beneficios</div>
      <div className="card-plan__body">
        <div className="card-plan__max">
          <div className="card-plan__max__detail">
            <span className="font-12 mb-15">Cobertura máxima</span>
            <strong className="mb-15">{maxCovered}</strong>
            <div>
              <span className="tag">PLAN {text}</span>
            </div>
          </div>
          <img src={urlShield} alt="benefit" />
        </div>
        <div className="card-plan__offer">
          <ul>
            <ElementPlan active={isLima}>
              <>
                <span>Lima</span>
                <span>(zona de cobertura)</span>
              </>
            </ElementPlan>
            <ElementPlan active={isThirtyClinics}>
              <>
                <span>+30 clínicas</span>
                <span>(en red afiliada)</span>
              </>
            </ElementPlan>
            <ElementPlan active={hasHomeDoctor}>
              <>Médico a domicilio</>
            </ElementPlan>
            <ElementPlan active={hasPreventiveCheck}>
              <>Chequeos preventivos</>
            </ElementPlan>
            <ElementPlan active={hasNationalRefund}>
              <>Reembolso nacional</>
            </ElementPlan>
            <ElementPlan active={hasInternationalRefund}>
              <>Reembolso internacional</>
            </ElementPlan>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function InsuranceDataForm({ person }: InsuranceFormValues) {
  const [step, setStep] = useState<number>(1);
  const [relatives, setRelatives] = useState<
    { relationship: string; relativeBirthDate: string }[]
  >([]);
  const history = useHistory();

  const goNextStep = () => {
    setStep(2);
  };

  const goPreviousStep = () => {
    setStep(1);
  };

  const goThanksPage = () => {
    history.push("/thanks");
  };

  const goHomePage = () => {
    history.push("/");
  };

  const deleteRelative = (index: number) => {
    let auxRelatives = [...relatives];
    auxRelatives.splice(index, 1);
    setRelatives(auxRelatives);
  };

  return (
    <Formik
      initialValues={person}
      validationSchema={insuranceFormValidator}
      onSubmit={(values: Person, { setSubmitting }: FormikHelpers<Person>) => {
        history.push("/choosing");
      }}
    >
      {(formik) => {
        const addRelative = (
          relationship: string,
          relativeBirthDate: string
        ) => {
          if (relationship && relativeBirthDate) {
            setRelatives([
              ...relatives,
              {
                relationship: relationship,
                relativeBirthDate: relativeBirthDate,
              },
            ]);
            formik.values.relationships = "Cónyuge";
            formik.values.relativeBirthDate = "";
          }
        };

        return (
          <Form className="insurance-form">
            {step === 1 ? (
              <>
                <div className="flex align-center mb-20 font-12">
                  <img
                    src={urlIconBackRounded}
                    alt="Back"
                    className="cursor-pointer ml-30-neg"
                    onClick={goHomePage}
                  />
                  <span
                    className="color-primary cursor-pointer ml-8"
                    onClick={goHomePage}
                  >
                    PASO 1&nbsp;
                  </span>
                  <span className="color-gray"> DE 2</span>
                </div>
                <h2 className="light mb-10">
                  <span>Hola, </span>
                  <span className="light color-primary">Maria</span>
                </h2>
                <p className="light mb-35">
                  Valida que los datos sean correctos
                </p>
                <h3 className="light mb-20">Datos personales del titular</h3>
                <SelectWithTextInput
                  selectName="kindIdentifier"
                  options={[{ value: "dni", text: "DNI" }]}
                  textName="identifier"
                  textLabel="Nro. de documento"
                  textPlaceholder="87654321"
                  showError={!formik.isValid}
                  errorMessage={formik.errors.identifier || ""}
                />

                <TextInput
                  name="name"
                  label="Nombres"
                  placeholder="Nombres"
                  showError={!formik.isValid}
                  errorMessage={formik.errors.name || ""}
                />

                <TextInput
                  name="faherLastname"
                  label="Apellido paterno"
                  placeholder="Apellido paterno"
                  showError={!formik.isValid}
                  errorMessage={formik.errors.faherLastname || ""}
                />

                <TextInput
                  name="motherLastname"
                  label="Apellido Materno"
                  placeholder="Apellido Materno"
                  showError={!formik.isValid}
                  errorMessage={formik.errors.motherLastname || ""}
                />

                <DateInput
                  name="birthDate"
                  label="Fecha de nacimiento"
                  placeholder="Fecha de nacimiento"
                  showError={!formik.isValid}
                  errorMessage={formik.errors.birthDate || ""}
                />

                <RadioButtonGroupInput
                  name="gender"
                  title="Género"
                  options={[
                    { value: "M", text: "Masculino" },
                    { value: "F", text: "Femenino" },
                  ]}
                  showError={!formik.isValid}
                  errorMessage={formik.errors.gender || ""}
                />

                <RadioButtonGroupInput
                  name="insured"
                  title="¿A quién vamos a asegurar?"
                  options={[
                    { value: "yo", text: "Solo a mí" },
                    { value: "familia", text: "A mí y a mi familia" },
                  ]}
                  showError={!formik.isValid}
                  errorMessage={formik.errors.insured || ""}
                />

                {formik.values.insured === "familia" ? (
                  <>
                    <div className="flex align-center">
                      <SelectWithDateInput
                        selectName="relationships"
                        options={[
                          { value: "Cónyuge", text: "Cónyuge" },
                          { value: "Hijo", text: "Hijo" },
                          { value: "Hija", text: "Hija" },
                        ]}
                        dateName="relativeBirthDate"
                        dateLabel="Fecha de nacimiento"
                        datePlaceholder="Fecha de nacimiento"
                        showError={false}
                        errorMessage={""}
                        className="grow-1"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          addRelative(
                            formik.values.relationships,
                            formik.values.relativeBirthDate
                          );
                        }}
                        className={"btn-white mt-16 color-gray-medium"}
                      >
                        Agregar
                      </button>
                    </div>

                    <div className="flex align-center">
                      <ul className="relatives grow-1">
                        {relatives.map((relative, index) => (
                          <li className="flex align-center">
                            <div className="flex align-center grow-1 pl-15">
                              <span className="mw-100">
                                {relative.relationship}
                              </span>
                              <span>{relative.relativeBirthDate}</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => {
                                deleteRelative(index);
                              }}
                              className={"btn-white color-gray-medium"}
                            >
                              Eliminar
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : null}

                <div className="flex justify-end mt-20">
                  <button
                    type="button"
                    onClick={goNextStep}
                    className={
                      formik.isValid && !!formik.values.insured
                        ? "btn"
                        : "btn-disabled"
                    }
                    disabled={!(formik.isValid && !!formik.values.insured)}
                  >
                    CONTINUAR
                    <ChevronRight />
                  </button>
                </div>
              </>
            ) : null}
            {step === 2 ? (
              <>
                <div className="flex align-center mb-20 font-12">
                  <img
                    src={urlIconBackRounded}
                    alt="Back"
                    className="cursor-pointer ml-30-neg"
                    onClick={goPreviousStep}
                  />
                  <span
                    className="color-primary cursor-pointer ml-8"
                    onClick={goPreviousStep}
                  >
                    PASO 2&nbsp;
                  </span>
                  <span className="color-gray"> DE 2</span>
                </div>

                <h2 className="light mb-10">
                  <span>Elige </span>
                  <span className="light color-primary">tu protección</span>
                </h2>
                <p className="light mb-35">Selecciona tu plan de salud ideal</p>

                <div role="group" aria-labelledby="plan" className="plans">
                  {PLANS.map((plan) => {
                    return (
                      <>
                        <label
                          key={plan.name}
                          className={
                            plan.name === formik.values.plan
                              ? "checkbox-plan--active"
                              : "checkbox-plan"
                          }
                        >
                          <Field type="radio" name="plan" value={plan.name} />
                          <div className="checkbox-plan__description">
                            <div>
                              <span className="font-11">{plan.text}</span>
                            </div>
                            <div>
                              <span className="font-10">s/ </span>
                              <span>{plan.price}</span>
                            </div>
                            <div>
                              <span className="font-11">mensual</span>
                            </div>
                          </div>
                          {plan.name === formik.values.plan ? (
                            <img
                              className="check-icon"
                              src={urlIconCorrect}
                              alt="check"
                            />
                          ) : null}
                        </label>
                      </>
                    );
                  })}
                </div>
                <div>
                  {PLANS.map((plan) => {
                    return plan.name === formik.values.plan ? (
                      <CardBenefits
                        name=""
                        text={plan.text}
                        maxCovered={plan.maxCovered}
                        urlShield={plan.urlShield}
                        price={0}
                        isLima={plan.isLima}
                        isThirtyClinics={plan.isThirtyClinics}
                        hasHomeDoctor={plan.hasHomeDoctor}
                        hasPreventiveCheck={plan.hasPreventiveCheck}
                        hasNationalRefund={plan.hasNationalRefund}
                        hasInternationalRefund={plan.hasInternationalRefund}
                      />
                    ) : null;
                  })}
                </div>
                <div className="border-bottom-gray-light py-20 flex justify-between align-center">
                  <div>
                    <p>Revisa nuestros</p>
                    <strong className="color-primary">
                      servicios y exclusiones
                    </strong>
                  </div>
                  <img className="check-icon" src={urlMan} alt="check" />
                </div>
                <div className="flex justify-between py-20 border-bottom-gray-light">
                  <span>Servicios brindados</span>
                  <ChevronDown className="color-primary" />
                </div>
                <div className="flex justify-between mb-20 py-20 border-bottom-gray-light">
                  <span>Servicios brindados</span>
                  <ChevronDown className="color-primary" />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="btn-white font-11 border-bottom-gray-light"
                  >
                    ENVIAR COTIZACIÓN POR CORREO
                  </button>
                  <button
                    type="submit"
                    className="btn font-11"
                    onClick={goThanksPage}
                  >
                    COMPRAR PLAN
                  </button>
                </div>
              </>
            ) : null}
          </Form>
        );
      }}
    </Formik>
  );
}
