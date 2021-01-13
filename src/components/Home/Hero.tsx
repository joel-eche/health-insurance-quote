import React, { useState } from "react";

import urlLogo from "./../../assets/images/logo.svg";
import urlIconShield from "./../../assets/images/icon-shield.svg";
import urlIconMobile from "./../../assets/images/icon-mobile.svg";
import urlIconMoney from "./../../assets/images/icon-money.svg";
import urlIconClinic from "./../../assets/images/icon-clinic.svg";
import urlIconBack from "./../../assets/images/icon-back.svg";
import urlIconBackDisabled from "./../../assets/images/icon-back-disabled.svg";
import urlIconNext from "./../../assets/images/icon-next.svg";
import urlIconNextDisabled from "./../../assets/images/icon-next-disabled.svg";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(1);

  const goNextSlide = () => {
    if (currentSlide < 4) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const goPreviousSlide = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    }
  };

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

        <ul className="hero-section__info__services--small">
          {currentSlide === 1 && (
            <li className="">
              <img className="hero-icon" src={urlIconShield} alt="ico" />
              <p>Cómpralo de manera fácil y rápida</p>
            </li>
          )}
          {currentSlide === 2 && (
            <li className="">
              <img className="hero-icon" src={urlIconMobile} alt="ico" />
              <p>Cotiza y compra tu seguro 100% digital</p>
            </li>
          )}
          {currentSlide === 3 && (
            <li className="">
              <img className="hero-icon" src={urlIconMoney} alt="ico" />
              <p>Hasta S/.12 millones de cobertura anual</p>
            </li>
          )}
          {currentSlide === 4 && (
            <li className="">
              <img className="hero-icon" src={urlIconClinic} alt="ico" />
              <p>Más de 300 clínicas en todo el Perú</p>
            </li>
          )}
          <div className="flex align-center">
              <img className="back-icon" src={currentSlide === 1 ?urlIconBackDisabled:urlIconBack} alt="<" onClick={goPreviousSlide}/>
            <span>{currentSlide}</span>
            <span>/ 04</span>
              <img className="next-icon" src={currentSlide === 4 ?urlIconNextDisabled:urlIconNext} alt=">" onClick={goNextSlide}/>
          </div>
        </ul>
      </div>
      <div className="hero-section__copyright">
        <span>&copy; 2020 RIMAC Seguros y Reaseguros</span>
      </div>
    </>
  );
}
