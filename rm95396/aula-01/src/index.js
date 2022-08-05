//CHAMADO A BIBLIOTECA REACT PARA GARANTIR A HERANÇA DO JSX
import React from 'react'

//CRIANDO O VDOM (DOM VIRTUAL)
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App/>, document.getElementById("root"))

