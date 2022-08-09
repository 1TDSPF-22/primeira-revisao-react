import React from "react"
//importar a imagem
import carro1 from '../../img/bronco.jpg'
import Parceiros from "../Parceiros/Parceiros"


export default function Carro() {
    //Crie um componente chamado Carros.js e insira uma imagem de carro e uma lista com 5 modelos de carro.
    return(
        <>
            <img src={carro1} width="250px" alt="um veiculo" />
            <ul>
                <li>Fusca</li>
                <li>Opala</li>
                <li>Celta</li>
                <li>Ka</li>
                <li>Chevete</li>
            </ul>
        </>
    )
}