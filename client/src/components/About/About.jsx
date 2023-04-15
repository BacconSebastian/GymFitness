import { useState } from "react";

import CheckIcon from "../../assets/shared/check-icon.png";

import "./About.scss";

const About = () => {
  const [activePlan, setActivePlan] = useState("mensual");

  const handleClickPlan = (plan) => {
    setActivePlan(plan);
  };

  return (
    <div id="planes" className="about">
      <div className="left-side">
        <h2>Nuestros planes</h2>
        <p>
          Elegí el plan que se ajuste a tus necesidades.
          <br />
          Tenemos planes mensuales y anuales.
        </p>
        <button
          onClick={() => handleClickPlan("mensual")}
          style={{ marginRight: "1rem" }}
          className={
            activePlan === "mensual" ? "first-button active" : "first-button"
          }
        >
          MENSUAL
        </button>
        <button
          onClick={() => handleClickPlan("anual")}
          className={
            activePlan === "anual" ? "first-button active" : "first-button"
          }
        >
          ANUAL
        </button>
      </div>
      <div className="right-side">
        <div className="plan-card">
          <p>{activePlan}</p>
          <h3>Plan Standard</h3>
          <hr />
          <div className="precio-container">
            <p className="precio">
              $ <span>{activePlan === "anual" ? "120.000" : "12.000"}</span>
            </p>
            <button className="first-button">Asociate</button>
          </div>
          <hr />
          <ul className="descripcion">
            <li>
              <img className="inactive" src={CheckIcon} alt="" />
              Acceso a todas las sedes
            </li>
            <li>
              <img src={CheckIcon} alt="" />
              Clases online
            </li>
            <li>
              <img src={CheckIcon} alt="" />
              Asesoria nutricional
            </li>
          </ul>
        </div>

        <div className="plan-card">
          <p>{activePlan}</p>
          <h3>Plan Premium</h3>
          <hr />
          <div className="precio-container">
            <p className="precio">
              $ <span>{activePlan === "anual" ? "150.000" : "15.000"}</span>
            </p>
            <button className="first-button">Asociate</button>
          </div>
          <hr />
          <ul className="descripcion">
            <li>
              <img src={CheckIcon} alt="" />
              Acceso a todas las sedes
            </li>
            <li>
              <img src={CheckIcon} alt="" />
              Clases online
            </li>
            <li>
              <img src={CheckIcon} alt="" />
              Asesoria nutricional
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
