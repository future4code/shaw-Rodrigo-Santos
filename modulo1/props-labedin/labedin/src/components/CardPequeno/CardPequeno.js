import React from "react";
import styledComponents from "styled-components";

const ImagemCardPequeno = styledComponents.div`
display: flex;
align-items: center;
border: 1px solid black;
padding: 10px 10px;
margin-bottom: 10px;
width: 41%;

`;

const Icone = styledComponents.img`
    width: 50px;
    margin-right: 10px;
    border-radius: 50%;   
`;

function CardPequeno(props) {
  return (
    <ImagemCardPequeno>
      <Icone src={props.imagem} />
      <div>
        <h4>{props.descricao}</h4>
      </div>
    </ImagemCardPequeno>
  );
}

export default CardPequeno;
