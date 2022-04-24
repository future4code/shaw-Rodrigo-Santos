import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import logo from "../../Assets/logo.png";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 98vh;
  width: 30vw;
  border-radius: 16px;
  margin: 5px;
  box-shadow: 2px 2px 5px 0px #555;
  font-weight: bold;
  font-family: "Poppins", sans-serif;
  background-color: white;
  overflow: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
        width: 4px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #44535c;
    }

    @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
        ::-webkit-scrollbar {
            width: 0;
        }
    }
`;

const MiniCardMatch = styled.div`
  display: flex;
  align-items: center;
  :hover {
    background-color: whitesmoke;
  }
`;

const ImgMatch = styled.img`
  width: 80px;
  height: 70px;
  border-radius: 20px;
  padding: 1%;
/*   box-shadow: 0px 0px 3px 0px #555;*/
`;

const GoToButton = styled.button`
  align-self: center;
  width: 6em;
  height: 2em;
  margin: 4px;
  background-color: #f27244;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 600;
  font-size: 1em;
  border: 0;
  border-radius: 10px;
  transition: all 0.3s;
  box-shadow: 2px 2px 5px 0px #555;
`;

const CardHeader = styled.div`
  display: flex;
  height: 8%;
`;

const ImgLogo = styled.img`
  height: 100%;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: 8vh;
  }
`;

export default function TelaMatch(props) {
  const [listTela, setListTela] = useState([]);

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

  useEffect(() => {
    getMatches();
  }, [props.clear]);

  const listaNaTela = listTela.map((user) => {
    return (
      <MiniCardMatch key={user.id}>
        <ImgMatch src={user.photo} />
        <strong>
          <p>{user.name}</p>
        </strong>
      </MiniCardMatch>
    );
  });

  return (
    <CardContainer>
      <CardHeader>
        <GoToButton onClick={props.goToInicial}>Home</GoToButton>
        <ImgLogo src={logo} />
      </CardHeader>
      {listaNaTela}
    </CardContainer>
  );
}
