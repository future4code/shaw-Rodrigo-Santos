import React from "react";
import axios from "axios";
import styled from "styled-components";
import logo from "../assets/logo.png";

const HeaderLayout = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #294864;
  color: white;
  height: 12vh;

`;

const Imglogo = styled.img`
  height: 12vh;
`;

const HeaderStyle = styled.div`
  display: flex;
`;

export default function Header() {
  return (
    <HeaderLayout>
      <Imglogo src={logo} />
      <HeaderStyle>
        <h2>LabeX</h2>
      </HeaderStyle>
    </HeaderLayout>
  );
}
