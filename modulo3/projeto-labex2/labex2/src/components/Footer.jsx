import React from "react";
import axios from "axios";
import styled from "styled-components";
import logo from "../assets/logo.png";

const FooterLayout = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #294864;
  color: white;
  height: 12vh;
`;

const Imglogo =  styled.img`
  height: 12vh;

`

export default function Footer() {
  

  return (
    <FooterLayout>
   <Imglogo src={logo}/>
   <h6>By Rodrigo Vieira</h6>
   <h6> Avenida de Pruneridge, 19111 Cupertino, CA 95014</h6>
    </FooterLayout>
  );
}