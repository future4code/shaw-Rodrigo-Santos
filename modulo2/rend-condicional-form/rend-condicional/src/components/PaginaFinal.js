import React from "react";
import styled from "styled-components";

const MainContainer  = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: black;
color: white;
`

class PaginaFinal extends React.Component {
  render() {
    return (
      <MainContainer>
        <h1>O FORMULÁRIO ACABOU</h1>
        <h2>Muito obrigado por participar! Entraremos em contato!</h2>
      </MainContainer>
    );
  }
}
export default PaginaFinal;
