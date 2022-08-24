import React from "react";
//Importando uma imagem
import carro1 from "../../img/agera r.jpg"
import Parceiros from "../Parceiros/Parceiros";

export default function Carro(){

    return(
        <>
            <img src={carro1} alt="O melhor de todos!!!" />
            <ul>
                <li>Fusca</li>
                <li>Opala</li>
                <li>Celta</li>
                <li>Ka</li>
                <li>Chevete</li>
            </ul>
            <Parceiros/>
        </>
    )

}