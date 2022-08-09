import React from 'react'
import Primeiro from './components/Primeiro'
import Cabecalho from './components/Primeiro/Cabecalho/cabecalho'
import Carro from './components/Carro/carro'
import './App.css'

export default function App(){

    const tag = <strong>Olá React!</strong>
    
    return(
        <div>
            <Cabecalho/>
            <Carro/>
            <h1>{tag}</h1>
            <h2>Novo Elemento</h2>
            <h3>Mais um título</h3>
            <Primeiro/>
        </div>
    )
}
