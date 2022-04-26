import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const HomeLayout = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  color: white;
  

`

export default function HomePage() {
  

  return (
    <HomeLayout>
   <h1>HOMEPAGE</h1>
    </HomeLayout>
  );
}