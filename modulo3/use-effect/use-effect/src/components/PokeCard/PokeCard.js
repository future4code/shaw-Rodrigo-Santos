import React, { useState, useEffect } from "react";
import axios from "axios";

export default function PokeCard() {
  const [pokemon1, setPokemon1] = useState({});

  useEffect(() => {
    pegaPokemon(pokemon1);
  }, []);

  useEffect((prevProps) => {
    if (prevProps.pokemon1 !== pokemon1) {
      pegaPokemon(pokemon1);
    }
  });

  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((response) => {
        // guarda as infos do pokemon no estado
        setPokemon1({ pokemon: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const pokemon = pokemon1;

  return (
    <div>
      <p>{pokemon.name}</p>
      <p>{pokemon.weight} Kg</p>
      {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
      {pokemon.sprites && (
        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      )}
    </div>
  );
}
