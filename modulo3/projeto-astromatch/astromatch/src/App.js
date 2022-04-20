import React, { useEffect, useState } from "react";
import axios from "axios";
import TelaInicial from "./Pages/TelaInicial/TelaInicial";
import TelaMatch from "./Pages/TelaMatch/TelaMatch";
import styled from "styled-components";




export default function App() {
  const [telaAtual, setTelaAtual] = useState("inicial");

  const escolherTela = () => {
    switch (telaAtual) {
      case "inicial":
        return <TelaInicial />;
      case "match":
        return <TelaMatch />;
      default:
        return <TelaInicial />;
    }
  };

  const mudaTela = (nomeTela) => {
    setTelaAtual(nomeTela);
  };

  return (
    <>
     <header>
        <h1>AstroMatch</h1>
        <button onClick={() => mudaTela("inicial")}>inicial</button>
        <button onClick={() => mudaTela("match")}>match</button>
        {escolherTela()}
      </header>

      <main></main>

      <footer>
        <>
        <button>
          Limpar swipes e matches
        </button>
        </>
      </footer>
    </>
  );
}
