import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-image: url(https://i.pinimg.com/originals/8e/6b/e9/8e6be91a01ba06f18b9eddfb944b2b42.jpg);
`;

const Mensagem = styled.div`
  width: 500px;
  height: 99.5vh;
  margin: 0px;
  background-color: rgba(15, 15, 15, 0.986);
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
`;

const Msg = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  spam {
    font-weight: bold;
  }
`;

const DivBotoes = styled.div`
  display: flex;
`;

const NomeInput = styled.input`
  width: 100px;
  height: 30px;
  border-radius: 5px;
  padding: 1px;
`;

const MsgInput = styled.input`
  width: 327px;
  border-radius: 5px;
  padding: 1px;
  
`;

const BotaoEnviar = styled.button`
  color: white;
  background-color: #5cb315;
  border-radius: 5px;
`;

/*const BalaoDeMensagem = styled.div`

background-color: ${props => {
        if (props.tipo === "eu") {
            return "#DDF7C8" // Verde copiado do WhatsApp
        } else if (props.tipo === "outro") {
            return "#ffffff" // Branco
        }
    }};

align-self:  ${props => {
        if (props.tipo === "eu") {
            return "flex-end"
        } else {
            return "flex-start"
        }
}};

margin-right: ${props => {
  if (props.tipo === "eu") {
    return "1.5em"
    }
}};

margin-left: ${props => {
    if (props.tipo !== "eu") {
      return "1.5em"
    }
  }};

max-width: 60%;
min-width: 8%;
margin-bottom: 1em;
word-wrap: break-word;
`*/

class App extends React.Component {
  state = {
    zap: [],
    onclick: false,
    valorInputNome: "",
    valorIputMensagem: "",
  };

  adicionaNome = () => {
    const novoZap = {
      mensagem: this.state.valorIputMensagem,
      nome: this.state.valorInputNome,
    };

    const novosZaps = [...this.state.zap, novoZap];

    this.setState({ zap: novosZaps, valorIputMensagem: "", onclick: true });
  };

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputMensagem = (event) => {
    this.setState({ valorIputMensagem: event.target.value });
  };

  render() {

    /*let nome = this.props.valorInputNome.toLowerCase()
    if(nome === "eu"){
      return(
        <BalaoDeMensagem tipo={"eu"}>{this.props.conteudo}</BalaoDeMensagem>
      )
    }else{
      return(
        <BalaoDeMensagem tipo={"outro"} >
          <div>{this.props.nome}</div>
          <div>{this.props.conteudo}</div>
        </BalaoDeMensagem>
      )
    }*/

    let listaDeComponentes;
    if (this.state.onclick) {
      listaDeComponentes = this.state.zap.map((texto) => {
        return (
          <div>
            <span>{texto.nome}</span>: {texto.mensagem}
          </div>
        );
      });
    }

    return (
      <MainContainer>
        <Mensagem>
          <Msg>{listaDeComponentes}</Msg>
        
          <DivBotoes>
            <NomeInput
              value={this.state.valorInputNome}
              onChange={this.onChangeInputNome}
              placeholder={"Nome"}
            />

            <MsgInput
              value={this.state.valorIputMensagem}
              onChange={this.onChangeInputMensagem}
              placeholder={"Mensagem"}
            />

            <BotaoEnviar onClick={this.adicionaNome}>Manda!</BotaoEnviar>
          </DivBotoes>
        </Mensagem>
      </MainContainer>
    );
  }
}export default App;
