import React from "react"
import Primeiro from "./components/Primeiro"
import './App.css'
export default function App(){

    const tag = <strong>Olá React!</strong>
    const ale = <strong>Ale é o melhor professor da FIAP</strong>
    const ronqui = <strong> Depois do ronqui</strong>
    return(
        <div>
            <h1>{tag}</h1>
            <h2>{ale}</h2>
            <h3>{ronqui}</h3>
            <Primeiro/>
        </div>
    )
        
}
