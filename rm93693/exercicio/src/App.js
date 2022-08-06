import React from "react";
import Cabecalho from "./components/Cabecalho";
import Carros from "./components/Carros";
import Parceiros from "./components/Parceiros";

export default function App() {
  const carros = [
    "Fiat Uno Hatch compacto",
    "VW Golf Hatch médio",
    "Ford Fiesta Sedan",
    "Toyota Corolla",
    "Peugeot 207 SW Perua",
  ];

  const novoModelo = () => "Fusca";

  const multiplicar = (n1, n2) => {
    return n1 * n2;
  };

  return (
    <>
      <Cabecalho />
      <Carros modelos={carros} maisModelo={novoModelo} />
      <Parceiros mult={multiplicar} />
    </>
  );
}
