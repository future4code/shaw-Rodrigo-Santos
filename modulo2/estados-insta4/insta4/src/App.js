import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;



class App extends React.Component {
  state = {
    post: [
      {
        nome: "paulinha",
        fotoUsuario: "https://picsum.photos/50/50",
        fotoPost: "https://picsum.photos/id/237/536/354",
      },
      {
        nome: "Pods1989",
        fotoUsuario: "https://picsum.photos/id/1062/5092/3395",
        fotoPost: "https://picsum.photos/id/1025/4951/3301",
      },
      {
        nome: "DaniCapai",
        fotoUsuario: "https://picsum.photos/id/177/2515/1830",
        fotoPost: "https://picsum.photos/id/160/3200/2119",
      },
    ],

    valorInputNome: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: "",
  };

  adicionaPost = () => {
    const novoPost = {
      nome: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost,
    };

    const novoPosts = [...this.state.post, novoPost];

    this.setState({
      post: novoPosts,
      valorInputNome: "",
      valorInputFotoUsuario: "",
      valorInputFotoPost: "",
    });
  };

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState({ valorInputFotoUsuario: event.target.value });
  };

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };

  render() {
    const listaDePosts = this.state.post.map((posts) => {
      return (
        <Post
          nomeUsuario={posts.nome}
          fotoUsuario={posts.fotoUsuario}
          fotoPost={posts.fotoPost}
        />
      );
    });

    return (
      <MainContainer>
        {listaDePosts}

        <input
          value={this.state.valorInputNome}
          onChange={this.onChangeInputNome}
          placeholder={"Nome"}
        />

        <input
          value={this.state.valorInputFotoUsuario}
          onChange={this.onChangeInputFotoUsuario}
          placeholder={"Foto Usuário"}
        />

        <input
          value={this.state.valorInputFotoPost}
          onChange={this.onChangeInputFotoPost}
          placeholder={"Foto Post"}
        />

        <button onClick={this.adicionaPost}>Post!</button>
      </MainContainer>
    );
  }
}
export default App;
