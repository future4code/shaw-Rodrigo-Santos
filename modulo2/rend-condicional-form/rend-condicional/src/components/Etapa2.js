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

const H1 = styled.h1`
display: flex;
justify-content: center;
align-items:center;

`

class Etapa2 extends React.Component {
  render() {
    return (
      <MainContainer>
        <div>
            <H1>ETAPA 2 - Curso superior </H1>
          <form>
            <Form1>
              Qual curso?
              <input type="text" name="curso"/>
            </Form1>
            <Form1>
              Qual unidade de ensino?
              <input type="text" name="instituicao"/>
            </Form1>
          </form>
        </div>
      </MainContainer>
    );
  }
}
export default Etapa2;
