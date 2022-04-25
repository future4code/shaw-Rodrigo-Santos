import React from "react";
import axios from "axios";
import styled from "styled-components";

const Tudo = styled.div`
    display: grid ;
    grid-template-rows: 6fr 2fr;
    
`

const Tela = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
 height: 80vh;
  background-color: #121212;
  color: white;
`;

const Footer = styled.div`
 display: flex;
  flex-direction: column;
  align-items: center;
  
  background-color: black;
  color: white;

`

const headers = {
  headers: {
    Authorization: "rodrigo-santos-shaw",
  },
};

class CriarPlaylist extends React.Component {
  state = {
    inputName: "",
  };

  criaPlaylist = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    const body = {
      name: this.state.inputName,
    };

    axios
      .post(url, body, headers)
      .then((res) => {
        alert(`A playlist ${body.name} foi criada!`);
        this.setState({
          inputName: "",
        });
      })
      .catch((error) => {
        alert("Ocorreu um erro na criação da sua playlist, tente novamente");
      });
  };

  onChangeNomeValue = (event) => {
    this.setState({ inputName: event.target.value });
  };

  render() {
    return (
      <Tudo>
        

        <main>
          <Tela>
            <h1> LABEFY </h1>

            <h2>Crie a sua playlist</h2>

            <div>
              <input
                placeholder="Nome da sua nova Playlist"
                value={this.state.inputName}
                onChange={this.onChangeNomeValue}
              />
            </div>

            <div>
              <button onClick={this.criaPlaylist}>Criar playlist</button>
            </div>
          </Tela>
        </main>

        <Footer>
        <h3>By Rodrigo Vieira</h3>
        <h2>Avenida de Pruneridge, 19111 Cupertino, CA 95014</h2>
        

        </Footer>
      </Tudo>
    );
  }
}
export default CriarPlaylist;
