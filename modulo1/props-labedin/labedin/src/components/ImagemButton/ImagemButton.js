import React from 'react';
import styledComponents from "styled-components";

const BotaoEstilo = styledComponents.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;

`

const Icone = styledComponents.img`
    width: 30px;
    margin-right: 10px;

`

function ImagemButton(props) {
    return (
        <BotaoEstilo>
            <Icone src={ props.imagem }/>
            <p>{ props.texto }</p>
        </BotaoEstilo>

    )
}

export default ImagemButton;