//importando React para garantir a herança do JSX
import React from 'react'

//importando o VDOM - dom virtual
// o que é o DOM? 
import ReactDOM from 'react-dom'
import App from './components/App'

ReactDOM.render(<App/>, document.getElementById("root"))

