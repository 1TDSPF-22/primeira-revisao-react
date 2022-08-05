import React from 'react'
import Primeiro from "./components/Primeiro"
import './App.css' 

export default function App (){



    const tag = <strong> Olá React!!</strong>

    return(
        <div>
        <h1> {tag} </h1>
        <h2> Elemento 2 </h2>
        <h3> Elemento 3</h3>
        <Primeiro> </Primeiro>
        </div>
    )
}
