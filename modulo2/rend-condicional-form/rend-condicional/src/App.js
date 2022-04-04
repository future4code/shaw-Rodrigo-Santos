import React from "react";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import PaginaFinal from "./components/PaginaFinal";
import styled from "styled-components";

const MainContainer  = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: black;
color: white;
`



class App extends React.Component {
  state = {
    pagina: 1,
  };

proximaEtapa = () => {
  this.setState({pagina: this.state.pagina +1})
  console.log(this.state.pagina);
}

render() {

  let paginaAtual;
    switch (this.state.pagina){
      case 1:
        paginaAtual = <Etapa1/>;
      break;
      case 2:
        paginaAtual = <Etapa2/>;
      break;
      case 3:
        paginaAtual = <Etapa3/>;
      break;   
      default: 
        paginaAtual = <PaginaFinal/>
    
      
    }

    return (
      <>
        {paginaAtual}

        <MainContainer>
          <button onClick={this.proximaEtapa}>
            Proxima etapa
          </button>
        </MainContainer>

      </>
    );
  }
}export default App;
