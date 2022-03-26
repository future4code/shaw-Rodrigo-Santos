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
  height: 100vh;
  margin: 0px;
  background-color: rgba(15, 15, 15, 0.986);
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  color: white;
  border: 1px solid white;
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
  background-color: green;
  border-radius: 5px;
`;
export default class App extends React.Component {
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

    this.setState({ chat: novosZaps, valorIputMensagem: "", onclick: true });
  };

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputMensagem = (event) => {
    this.setState({ valorIputMensagem: event.target.value });
  };

  render() {
    let listaDeComponentes;
    if (this.state.onclick) {
      listaDeComponentes = this.state.chat.map((texto) => {
        return (
          <div>
            <spam>{texto.nome}</spam>: {texto.mensagem}
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
}
