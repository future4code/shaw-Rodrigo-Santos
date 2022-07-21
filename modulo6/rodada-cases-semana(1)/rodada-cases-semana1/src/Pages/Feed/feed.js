import axios from "axios";
import React, { useEffect, useState } from "react";
import CardRestaurant from "../../Components/CardRestaurant/CardRestaurant";
import { ContainerCardRestaurant } from "../../Components/CardRestaurant/styled";
import Header from "../../Components/Header/Header";
import { BASE_URL } from "../../Constants/url";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import {
  BoxInputSearch,
  CardsRestaurant,
  ContainerFeed,
  InputSearch,
  Menu,
  MenuItem,
} from "./styled";

const Feed = () => {
  useProtectedPage();

  const [restaurants, setRestaurants] = useState([]);

  const getRestaurants = () => {
    axios
      .get(`${BASE_URL}/restaurants`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data);
        setRestaurants(res.data.restaurants);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <ContainerFeed>
      <Header title={"UaiFood"} />

      <BoxInputSearch>
        <InputSearch />
      </BoxInputSearch>
      <Menu>
        <MenuItem select={true} >Burger</MenuItem>
        <MenuItem select={false}>Asiática</MenuItem>
        <MenuItem select={false}>Massas</MenuItem>
        <MenuItem select={false}>Pizzas</MenuItem>
        <MenuItem select={false}>Saudável</MenuItem>
        <MenuItem select={false}>Salgados</MenuItem>
        <MenuItem select={false}>Doces</MenuItem>
        <MenuItem select={false}>Bebidas</MenuItem>
        <MenuItem select={false}>Sobremesas</MenuItem>
        <MenuItem select={false}>Lanches</MenuItem>
        <MenuItem select={false}>Pães</MenuItem>
        <MenuItem select={false}>Bolos</MenuItem>
        <MenuItem select={false}>Doces</MenuItem>
      </Menu>
      <CardsRestaurant>
        {restaurants.map((restaurant) => {
          return <CardRestaurant restaurant={restaurant} />;
        })}
      </CardsRestaurant>
    </ContainerFeed>
  );
};
export default Feed;
