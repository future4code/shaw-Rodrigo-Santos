import React, { useEffect, useState } from "react";
import axios from "axios";
import TelaInicial from "./Pages/TelaInicial/TelaInicial";
import TelaMatch from "./Pages/TelaMatch/TelaMatch";
import styled from "styled-components";

const MainSyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-image: linear-gradient(45deg,#fd267a,#ff6036); */
  height: 100vh;
 /*  background-image: url(https://api.mssngpeces.com/wp-content/uploads/2022/03/tinder-gradient.jpg); */
 background-color: yellow;
  
 
`;

export default function App() {
  const [telaAtual, setTelaAtual] = useState("inicial");
  const [perfil, setPerfil] = useState("");
  const [listaMatch, setListaMatch] = useState({});

  //Troca de telas:

  const escolherTela = () => {
    switch (telaAtual) {
      case "inicial":
        return (
          <TelaInicial
            perfil={perfil}
            choosePersonTrue={choosePersonTrue}
            choosePersonFalse={choosePersonFalse}
            goToInicial={goToInicial}
            goToMatch={goToMatch}
          />
        );
      case "match":
        return (
          <TelaMatch
            goToMatch={goToMatch}
            goToInicial={goToInicial}
            listaMatch={listaMatch}
          />
        );
      default:
        return <TelaInicial />;
    }
  };

  /*  const mudaTela = (nomeTela) => {
    setTelaAtual(nomeTela);
  }; */

  const goToMatch = () => {
    setTelaAtual("match");
  };

  const goToInicial = () => {
    setTelaAtual("inicial");
  };

  //Lista para escolher:

  useEffect(() => {
    getProfileToChoose();
  }, []);

  const getProfileToChoose = () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rodrigo/person";
    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setPerfil(res.data.profile);
      })
      .catch((err) => console.log(err.response));
  };

  //Escolher pessoa para match:

  const choosePersonTrue = () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rodrigo/choose-person";

    const body = {
      id: perfil.id,
      choice: true,
    };

    const header = { "Content-Type": "application/json;charset=UTF-8" };

    axios
      .post(url, body, header)
      .then((res) => {
        console.log(res.data);
        setListaMatch(res.data.matches);
        getProfileToChoose();
      })
      .catch((err) => console.log(err.response));
  };

  //Descartar pessoa para match:

  const choosePersonFalse = () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rodrigo/choose-person";

    const body = {
      id: perfil.id,
      choice: false,
    };

    const header = { "Content-Type": "application/json;charset=UTF-8" };

    axios
      .post(url, body, header)
      .then((res) => {
        console.log(res.data);
        setListaMatch(res.data.matches);
        getProfileToChoose();
      })
      .catch((err) => console.log(err.response));
  };

  //Limpar matches:

  const clearList = () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rodrigo/clear";
    const header = { "Content-Type": "application/json" };

    axios
      .put(url, header)
      .then((res) => {
        console.log(res.data);
        setListaMatch(res.data);
      })
      .catch((err) => console.log(err.data));
  };

  return (
    <>
      <MainSyle>
        <header>
          <h1>AstroMatch</h1>
          
        </header>

        <main>
        {escolherTela()}
       
        </main>

        <footer>
          <>
            <button onClick={() => clearList()}>
              {" "}
              Limpar swipes e matches
            </button>
            <h6>
              By Rodrigo Vieira
            </h6>
          </>
        </footer>
      </MainSyle>
    </>
  );
}
