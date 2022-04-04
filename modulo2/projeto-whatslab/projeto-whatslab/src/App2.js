import React from "react";
import styled from "styled-components";

const MeuBotao = styled.button`
  background: #0099ff;
  
`;

const MainContainer = styled.div`
  color: black;
  

`

  class ZapLab extends React.Component {

    state = {
      zap: [
        {
        nome: "",
        mensagem: ""
      }
    ],
      
        valorInputNome: "",
        valorInputMensagem: ""
    };
    
    adicionaNome = () => {
      const novoZap = {
        nome: this.state.valorInputNome,
        mensagem: this.state.valorInputMensagem
      };

      const novosZaps = [...this.state.zap, novoZap];

      this.setState({
        zap: novosZaps,
        valorInputNome: "",
        valorInputMensagem: "",
      });
    };

    onChangeInputNome = (event) => {
      this.setState({
        valorInputNome: event.target.value
      });
    };

    onChangeInputMensagem = (event) => {
      this.setstate({
        valorInputMensagem: event.target.value
      });
    };
  
    render() {
      const listaDeMensagens = this.state.zap((texto)=>{
      return(
        <p>
          {texto.nome} - {texto.mensagem}
        </p>
      )
    })
    
    return( 
      
      <MainContainer>

<input
          value={this.state.valorInputNome}
          onChange={this.onChangeInputNome}
          placeholder={"Nome"}
        />

        <input
          value={this.state.valorInputMensagem}
          onChange={this.onChangeInputMensagem}
          placeholder={"Mensagem"}
        />

        <MeuBotao onClick={this.adicionaNome}>Mandar</MeuBotao>
      
      <div>{listaDeMensagens}</div>

      </MainContainer>
    )
  }
  

}export default ZapLab
