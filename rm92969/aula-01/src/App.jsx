import React from "react"
import Primeiro from "./components/Primeiro"
import './App.css'

export default function App(){

    const tag = <strong>Olá react!!!</strong>

    return(
        <div>
            <h1>{tag}</h1>
            <h2>Novo elemento</h2>
            <h3>Mais um titulo</h3>
            <Primeiro></Primeiro>
        </div>
    )
}