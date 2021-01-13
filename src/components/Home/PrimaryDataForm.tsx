import React, { useState } from "react";

import { Formik, Form, FormikHelpers } from "formik";
import { useHistory } from "react-router-dom";
import { primaryDataFormValidator } from "./primaryDataFormValidator";
import {
  DateInput,
  TextInput,
  SelectWithTextInput,
  CheckboxInput,
} from "../common/FormElements";
import { Person } from "../../classes/Person";

const PrimaryForm = () => {
  const [hasErrors, setHasErrors] = useState(false);
  let history = useHistory();

  return (
    <Formik
      initialValues={new Person()}
      validationSchema={primaryDataFormValidator}
      onSubmit={(values: Person, { setSubmitting }: FormikHelpers<Person>) => {
        history.push({ pathname: "/choosing", state: { person: values } });
      }}
    >
      {(formik) => {
        if (formik.isSubmitting && !formik.isValid) {
          setHasErrors(true);
        }

        return (
          <Form className="primary-data-form">
            <SelectWithTextInput
              selectName="kindIdentifier"
              options={[{ value: "dni", text: "DNI" }]}
              textName="identifier"
              textLabel="Nro. de documento"
              textPlaceholder="87654321"
              showError={hasErrors}
              errorMessage={formik.errors.identifier || ""}
            />

            <DateInput
              name="birthDate"
              label="Fecha de nacimiento"
              placeholder="Fecha de nacimiento"
              showError={hasErrors}
              errorMessage={formik.errors.birthDate || ""}
            />

            <TextInput
              name="cellphone"
              label="Celular"
              placeholder="123456789"
              showError={hasErrors}
              errorMessage={formik.errors.cellphone || ""}
            />

            <CheckboxInput
              name="agreeWithDataPolicy"
              showError={hasErrors}
              errorMessage={formik.errors.agreeWithDataPolicy || ""}
            >
              <span>
                Acepto la{" "}
                <span className="underlined">
                  {" "}
                  Política de Protección de Datos Personales y los Términos y
                  Condiciones.
                </span>
              </span>
            </CheckboxInput>

            <CheckboxInput
              name="agreeWithCommunicationPolicy"
              showError={hasErrors}
              errorMessage={formik.errors.agreeWithCommunicationPolicy || ""}
            >
              <span>
                Acepto la{" "}
                <span className="underlined">
                  {" "}
                  Política de Envío de Comunicaciones Comerciales.
                </span>
              </span>
            </CheckboxInput>
            <button
              className={`${
                formik.isValid && formik.values.identifier.trim() !== ""
                  ? "btn"
                  : "btn-disabled"
              } mt-40`}
              type="submit"
              disabled={
                !formik.isValid || formik.values.identifier.trim() === ""
              }
            >
              COMENCEMOS
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default function PrimaryDataForm() {
  return (
    <>
      <h2>
        <span className="light">Obtén tu </span>
        <span className="light color-primary">seguro ahora</span>
      </h2>
      <p>Ingresa los datos para comenzar</p>
      <PrimaryForm />
    </>
  );
}
