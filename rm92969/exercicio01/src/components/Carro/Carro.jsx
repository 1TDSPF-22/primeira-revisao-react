import React from 'react'
//Importar uma imagem
import carro1 from '../../img/carro.jpg'

export default function Carro(){

    return(
        <>
        <img src={carro1}width="250px" alt="" />
        <ul>
            <li>Fusca</li>
            <li>Fusca</li>
            <li>Fusca</li>
            <li>Fusca</li>
            <li>Fusca</li>
        </ul>
        </>
    )
}