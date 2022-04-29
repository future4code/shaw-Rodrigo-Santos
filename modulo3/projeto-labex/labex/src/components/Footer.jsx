import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import logo from "../assets/logo.png";

const FooterLayout = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #294864;
  color: white;
`;

const Imglogo =  styled.img`
  height: 12vh;

`


export default function Footer() {
  

  return (
    <FooterLayout>
   <Imglogo src={logo}/>
   <h2>FOOTER</h2>
   <menubar>Menu</menubar>
    </FooterLayout>
  );
}