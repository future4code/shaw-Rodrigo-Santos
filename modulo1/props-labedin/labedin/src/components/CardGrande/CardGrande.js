import React from 'react';
import styledComponents from "styled-components";

const DivCardGrande = styledComponents.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    
`;

const CardGrandeGeral = styledComponents.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;

`

const Icone = styledComponents.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

const Titulo = styledComponents.h4`
    margin-bottom: 15px;
`


function CardGrande(props) {
    return (
        <CardGrandeGeral>
            <DivCardGrande>
            <Icone src={ props.imagem } />
            <div>
                <Titulo>{ props.nome }</Titulo>
                <p>{ props.descricao }</p>
            </div>
            </DivCardGrande>
        </CardGrandeGeral>
        
    )
}

export default CardGrande;