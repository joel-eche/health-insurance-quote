import React, { useEffect, useState } from "react";
import InsuranceDataForm from "./InsuranceDataForm";

import urlLogo from "./../../assets/images/logo.svg";
import "./../../assets/styles/choosing.sass";
import { Person } from "../../classes/Person";
import { getPerson } from "../../services/api.services";

export default function Choosing() {
  const [person, setPerson] = useState<Person>();
  const [isLoading, setIsloading] = useState<boolean>(true);

  const formatDashDate = (date: string) => {
    const [day, month, year] = date.split("/");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const getInitialPersonData = async () => {
      const newPerson = new Person();
      const data = await getPerson();
      newPerson.identifier = data.numDocumento;
      newPerson.kindIdentifier = data.tipoDocumento;
      newPerson.name = data.nombres;
      newPerson.faherLastname = data.apellidoPaterno;
      newPerson.motherLastname = data.apellidoMaterno;
      newPerson.birthDate = formatDashDate(data.fecNacimiento);
      newPerson.gender = data.sexo;
      newPerson.insured = "";
      newPerson.plan = "basic";
      setPerson(newPerson);
    };

    getInitialPersonData();
  }, []);

  useEffect(() => {
    if (person) {
      setIsloading(false);
    }
  }, [person]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <main className="main-choosing">
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
