import React from "react";

import carro1 from "../../img/bronco.jpg";
import Parceiros from "../Parceiros/Parceiros";

export default function Carro() {
  return (
    <>
      <img src={carro1} width="250px" alt="Veículo automotor." />
      <ul>
        <li>Opala</li>
        <li>Fusca</li>
        <li>Ferrari</li>
        <li>BMW</li>
        <li>GTR</li>
      </ul>
      <Parceiros></Parceiros>
    </>
  );
}
