import React from "react";

import urlLogo from "./../../assets/images/logo.svg";
import urlIconShield from "./../../assets/images/icon-shield.svg";
import urlIconMobile from "./../../assets/images/icon-mobile.svg";
import urlIconMoney from "./../../assets/images/icon-money.svg";
import urlIconClinic from "./../../assets/images/icon-clinic.svg";

export default function Hero() {
  return (
    <>
    <div className="mt-20">
      <img src={urlLogo} alt="Rimac" />
    </div>
        
      <div className="hero-section__info">
        <h1 className="hero-section__info__title">
          <span className="light">Seguro de</span>
          <br></br>Salud
        </h1>
        <ul className="hero-section__info__services--large">
          <li className="flex align-center">
            <img className="hero-icon" src={urlIconShield} alt="ico" />
            Cómpralo de manera fácil y rápida
          </li>
          <li className="flex align-center">
            <img className="hero-icon" src={urlIconMobile} alt="ico" />
            Cotiza y compra tu seguro 100% digital
          </li>
          <li className="flex align-center">
            <img className="hero-icon" src={urlIconMoney} alt="ico" />
            Hasta S/.12 millones de cobertura anual
          </li>
          <li className="flex align-center">
            <img className="hero-icon" src={urlIconClinic} alt="ico" />
            Más de 300 clínicas en todo el Perú
          </li>
        </ul>
      </div>
      <div className="hero-section__copyright">
        <span>&copy; 2020 RIMAC Seguros y Reaseguros</span>
      </div>
    </>
  );
}
