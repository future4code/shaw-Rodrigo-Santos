import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 80vh;
  width: 50vh;
  background-color: #eae8eb;
  text-align: center;
  border-radius: 8px;
  margin: 5px;
  font-weight: bold;
  overflow-y: auto;
  overflow-x: hidden;

`

const ContainerMatch = styled.div `
display: flex;
align-items: center;
margin: 1%;
width: 100%;
img{
  margin-right: 2%;
  object-fit: contain;
}

:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    background-color: pink;
  }
`

const CardHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  
`

const BotaoHead = styled.button`
 
  border: 1px solid rgba(54, 54, 54, 0.6);
  font-weight: 600;
  position: relative;
  outline: none;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 45px;
  width: 130px;
  opacity: 1;
  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`

const Img = styled.img `
width: 80px;
height: 70px;
border-radius: 20px;
box-shadow: 0px 0px 3px 0px #555;
`

export default function TelaMatch(props){

  const [listTela, setListTela] = useState ([])

   //Pegar Mathches

   const getMatches = () => {
    const url =
      "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/rodrigo/matches";

    axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        setListTela(res.data.matches);
      })
      .catch((err) => alert(err.data));
  };

  useEffect(()=>{
    getMatches()
  }, [props.clear])

  const listaNaTela = listTela.map((user)=>{
    return <ContainerMatch key={user.id}>
      <Img src={user.photo}/>
      <strong><p>{user.name}</p></strong>
    </ContainerMatch>
  })


  return(
    <CardContainer>
      <CardHeader>
        <BotaoHead onClick={props.goToInicial}>Home</BotaoHead>
        <h3>AstroMatch</h3>
        </CardHeader>
        {listaNaTela}
      
    </CardContainer>
  )
}