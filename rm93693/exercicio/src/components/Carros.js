import React from "react";
import CarroBranco from "../assets/img/carro-branco.jpg";
import "./Carros.css";

export default function Carros(props) {
  return (
    <>
      <div className="carros-img">
        <img src={CarroBranco} alt="" />
      </div>
      <ul>
        <li>
          <a href="#">{props.modelos[0]}</a>
        </li>
        <li>
          <a href="#">{props.modelos[1]}</a>
        </li>
        <li>
          <a href="#">{props.modelos[2]}</a>
        </li>
        <li>
          <a href="#">{props.modelos[3]}</a>
        </li>
        <li>
          <a href="#">{props.modelos[4]}</a>
        </li>
      </ul>
    </>
  );
}
