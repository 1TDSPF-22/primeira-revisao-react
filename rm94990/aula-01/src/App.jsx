import React from "react";

import Primeiro from "./components/Primeiro";

import "./App.css";

export default function App() {
  const tag = <strong>Olá React!!</strong>;

  return (
    <div>
      <h1>{tag}</h1>
      <h2>As ideia é dura</h2>
      <h2>e ngm da valor..</h2>
      <Primeiro></Primeiro>
    </div>
  );
}
