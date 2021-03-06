import React from "react";
import { useHistory } from "react-router-dom";

import urlManOk from "./../../assets/images/man-ok.svg";
import urlBannerThanks from "./../../assets/images/banner-thanks.svg";
import urlLogo from "./../../assets/images/logo.svg";
import "./../../assets/styles/thanks.sass";

export default function Thanks() {
  const history = useHistory();

  const goIndexPage = () => {
    history.push("/");
  };

  return (
    <main className="main-thanks">
      <header className="header-thanks-mobile">
        <img className="" src={urlLogo} alt="Rimac" />
      </header>
      <div className="banner-thanks">
        <img className="" src={urlBannerThanks} alt="Rimac" />
      </div>
      <section className="separator-thanks-section">
        <div className="mt-20 ml-30-percent">
          <img className="" src={urlLogo} alt="Rimac" />
        </div>
      </section>
      <section className="detail-thanks-section w-100p">
        <div className="w-50p">
          <img className="man-ok" src={urlManOk} alt="check" />
          <h2 className="light">
            Revisa nuestros<br></br>
            <strong className="color-primary">servicios y exclusiones</strong>
          </h2>
        </div>
        <div className="py-20 w-50p">
          <span className="font-12">
            Queremos conocer mejor la salud de los asegurados. Un asesor{" "}
            <strong>se pondrá en contacto</strong> contigo en las siguientes{" "}
            <strong>48 horas.</strong>
          </span>
        </div>
        <div className="flex justify-end w-50p">
          <button type="submit" className="btn font-11" onClick={goIndexPage}>
            IR A SALUD
          </button>
        </div>
      </section>
    </main>
  );
}
