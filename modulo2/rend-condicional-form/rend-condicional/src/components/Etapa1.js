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
background-color: black;
color: white;

`

class Etapa1 extends React.Component {
  render() {
    return (
      <MainContainer>
        <h1>ETAPA 1 - DADOS GERAIS</h1>

        <div>

          <form>
            <Form1>
              Qual seu nome?
              <input type="text" name="username"/>
            </Form1>

            <Form1>
              Qual a sua idade?
              <input type="number" name="idade"/>
            </Form1>

            <Form1>
              Qual seu email?
              <input type="text" name="email"/>
            </Form1>

            

            
            <select value="">
              <option value="Ensino médio incompleto">
                Ensino médio incompleto
              </option>

              <option value="Ensino médio completo">
                Ensino médio completo
              </option>

              <option value="Ensino superior incompleto">
                Ensino superior incompleto
              </option>

              <option value="Ensino superior completo">
                Ensino superior completo
              </option>
            </select>
          </form>
        </div>
      </MainContainer>
    );
  }
}
export default Etapa1;
