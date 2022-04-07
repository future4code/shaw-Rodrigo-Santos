import React from "react";
import axios from "axios";
import styled from "styled-components";

const Tela = styled.div`
    background-color: red;
`
const headers = {
    headers: {
        Authorization: "rodrigo-santos-shaw",
      },
}


export default class ListaPlaylist extends React.Component {
  render() {
    return (
    
    <Tela>
        VEJA A LISTA
    </Tela>
    
    )
  }
}
