import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Card from "../../Components/Card";

const CardMain = styled.div`
  display: flex;
  justify-content: space-around;
`;

export default function TelaInicial() {
  return (
    <CardMain>
      <Card />
    </CardMain>
  );
}
