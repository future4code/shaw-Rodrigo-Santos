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
const Form1 = styled.label`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 10px;

`

class Etapa3 extends React.Component {
  render() {
    return (
      <MainContainer>
        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>

        <Form1>
          Você fez algum curso complementar?
          <select>
            <option value="Curso técnico">Curso técnico</option>
            <option value="Cursos de inglês">Cursos de inglês</option>
            <option value="Não fiz curso complementar">
              Não fiz curso complementar
            </option>
          </select>
        </Form1>
      </MainContainer>
    );
  }
}
export default Etapa3;
