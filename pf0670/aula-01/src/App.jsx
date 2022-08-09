import React from 'react'
import Primeiro from './components/Primeiro/Primeiro'
import Cabecalho from './components/Cabecalho/Cabecalho'
import Carro from './components/Carro/Carro'
import './App.css'


export default function App() {

    const tag = <strong>Olá React!!</strong>

    return (
        <div>
            <Cabecalho />
            <Carro />
            <h1>{tag}</h1>
            <h2>Novo elemento</h2>
            <h3>Mais um título</h3>
            <Primeiro />
        </div>
    )
}