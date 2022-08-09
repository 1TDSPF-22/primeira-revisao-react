import React from "react"
//Importar uma imagem
import carro1 from'../../img/bronco.png'
import Parceiros from "../Parceiros/parceiros"

export default function Carro(){

    return(
        <>
        <img src={carro1} width="250 px" alt=""/>
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