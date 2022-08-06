import React from "react";
import CarroBranco from "../assets/img/carro-branco.jpg";
import "./Carros.css";

export default function Carros() {
  return (
    <>
      <div className="carros-img">
        <img src={CarroBranco} alt="" />
      </div>
      <ul>
        <li>
          <a href="#">Fiat Uno Hatch compacto</a>
        </li>
        <li>
          <a href="#">VW Golf Hatch médio.</a>
        </li>
        <li>
          <a href="#">Ford Fiesta Sedan.</a>
        </li>
        <li>
          <a href="#">Toyota Corolla.</a>
        </li>
        <li>
          <a href="#">Peugeot 207 SW Perua.</a>
        </li>
      </ul>
    </>
  );
}
