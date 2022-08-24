import React from "react"
import Primeiro from "./components/Primeiro/Primeiro"
import Cabecalho from "./components/Cabecalho/Cabecalho"
import './App.css'
import Carro from "./components/Carro/Carro"

export default function app(){

    const tag = <strong>Olá React!!</strong>

    return(      
        <div>
            <Cabecalho/>
            <Carro/>
            <h1>{tag}</h1>
            <h2>Novo elemento</h2>
            <h3>Mais um título</h3>
            <Primeiro/>
        </div>
    )
}