import React from 'react'
//Importar uma imagem
import carro1 from '../../img/carro.jpg'
import Parceiros from '../Parceiros/Parceiros'

export default function Carro(){

    const novoModelo = () => 'Equinox'

    return(
        <>
        <img src={carro1}width="250px" alt="Carro" />
        <ul>
            <li>Fusca</li>
            <li>Onix</li>
            <li>Cruze</li>
            <li>Spin</li>
            <li>Camaro</li>
            <Parceiro carros={carros} novoModelo={novoModelo} />
        </ul>
        <Parceiros></Parceiros>
        </>
    )
}