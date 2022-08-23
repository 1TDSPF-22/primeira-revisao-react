import React from "react"
import Primeiro from "./components/Primeiro"
import './App.css'

export default function app(){

    const tag = <strong>Olá React!!</strong>

    return(      
        <div>
            <h1>{tag}</h1>
            <h2>Novo elemento</h2>
            <h3>Mais um título</h3>
            <Primeiro/>
        </div>
    )
}