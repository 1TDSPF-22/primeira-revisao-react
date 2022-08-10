import React from 'react'

export default function Parceiros(props){
    return(
        <>
            <h2>Esses são nossos parceiros</h2>
            <p><a href="#">{props.parceiros['Ford']}</a></p>
            <p><a href="#">{props.parceiros['Ford']}</a></p>
            <p><a href="#">{props.parceiros['Ford']}</a></p>
            <p><a href="#">{props.parceiros['Ford']}</a></p>
            <p><a href="#">{props.novoModelo()}</a></p>
        </>
    )
}