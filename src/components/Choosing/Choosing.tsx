import React, { useEffect, useLayoutEffect, useState } from "react";
import InsuranceDataForm from "./InsuranceDataForm";

import Loader from "react-loader-spinner";
import { useHistory, useLocation } from "react-router-dom";

import urlLogo from "./../../assets/images/logo.svg";
import "./../../assets/styles/choosing.sass";
import { Person } from "../../classes/Person";
import { getPerson } from "../../services/api.services";

interface locationValues {
  person: Person;
}

export default function Choosing() {
  const [person, setPerson] = useState<Person>();
  const [isLoading, setIsloading] = useState<boolean>(true);
  const history = useHistory();
  const location = useLocation<locationValues>();

  const formatDashDate = (date: string) => {
    const [day, month, year] = date.split("/");
    return `${year}-${month}-${day}`;
  };

  useLayoutEffect(() => {
    if (!history.location.state) {
      history.push("/");
    }
  }, [history]);

  useEffect(() => {
    const getInitialPersonData = async () => {
      const newPerson = new Person();
      const params = location.state?.person || newPerson;
      const data = await getPerson();

      if (
        params.identifier === data.numDocumento &&
        params.birthDate === formatDashDate(data.fecNacimiento)
      ) {
        newPerson.identifier = data.numDocumento;
        newPerson.name = data.nombres;
        newPerson.kindIdentifier = data.tipoDocumento;
        newPerson.birthDate = formatDashDate(data.fecNacimiento);
        newPerson.faherLastname = data.apellidoPaterno;
        newPerson.motherLastname = data.apellidoMaterno;
        newPerson.gender = data.sexo;
      } else {
        newPerson.identifier = params.identifier;
        newPerson.kindIdentifier = "2";
        newPerson.birthDate = params.birthDate;
      }
      newPerson.insured = "";
      newPerson.plan = "basic";
      newPerson.agreeWithDataPolicy = params.agreeWithDataPolicy;
      newPerson.agreeWithCommunicationPolicy =
        params.agreeWithCommunicationPolicy;
      setPerson(newPerson);
    };
    getInitialPersonData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (person) {
      setIsloading(false);
    }
  }, [person]);

  return (
    <>
      {isLoading ? (
        <div className="w-100vh w-100vh flex align-center justify-center">
          <Loader type="Oval" color="#EF3340" height={100} width={100} />
        </div>
      ) : (
        <main className="main-choosing">
          <header className="header-mobile">
            <img className="" src={urlLogo} alt="Rimac" />
          </header>
          <section className="separator-choosing-section">
            <div className="mt-20 ml-30-percent">
              <img className="" src={urlLogo} alt="Rimac" />
            </div>
          </section>
          <section className="form-choosing-section">
            <InsuranceDataForm person={person || new Person()} />
          </section>
        </main>
      )}
    </>
  );
}
