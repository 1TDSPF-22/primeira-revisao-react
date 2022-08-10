import React from 'react'
//Importar uma imagem
import carro1 from '../../img/carro.jpg'
import Parceiros from '../Parceiros/Parceiros'

export default function Carro(props){

    return(
        <>
        <img src={carro1}width="250px" alt="Carro" />
        <ul>
            <li>{props.modelo["Fusca"]}</li>
            <li></li>
            <li>Fusca</li>
            <li>Fusca</li>
            <li>Fusca</li>
        </ul>
        <Parceiros></Parceiros>
        </>
    )
}