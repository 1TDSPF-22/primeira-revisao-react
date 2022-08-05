import React from 'react'
import Primeiro from './components/Primeiro'
import './App.css'

export default function App(){

    const tag = <strong>Olá React!</strong>
    
    return(
        <div>
        <h1>{tag}</h1>
        <h2>Novo Elemento</h2>
        <h3>Mais um título</h3>
        <Primeiro></Primeiro>
        </div>
    )
}
