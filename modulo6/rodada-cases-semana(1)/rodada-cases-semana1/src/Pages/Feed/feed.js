import axios from "axios";
import React, { useEffect, useState } from "react";
import CardRestaurant from "../../Components/CardRestaurant/CardRestaurant";
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
  const [categoryRestaurants, setCategoryRestaurants] = useState([]);
  const [valueCategory, setValueCategory] = useState("");

  const [inputText, setInputText] = useState("");

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
        filterCategory(res.data.restaurants);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getRestaurants();
  }, []);

  const filterCategory = (restaurants) => {
    const arrayAux = [];
    restaurants &&
      restaurants.map((res) => {
        arrayAux.push(res.category);
      });
    const takeOutRepeat = [...new Set(arrayAux)];
    setCategoryRestaurants(takeOutRepeat);
  };

  const filterRestaurant = restaurants
    //filtro do input
    .filter((restaurant) =>
      inputText
        ? restaurant.name.toLowerCase().includes(inputText.toLowerCase())
        : true
    )
    //filtro da categoria
    .filter((restaurant) =>
      valueCategory
        ? restaurant.category
            .toLowerCase()
            .includes(valueCategory.toLowerCase())
        : true
    )
    //mapeando para mostrar os restaurantes
    .map((restaurant) => {
      return <CardRestaurant restaurant={restaurant} />;
    });

  return (
    <ContainerFeed>
      <Header title={"UaiFood"} />

      <BoxInputSearch>
        <InputSearch
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </BoxInputSearch>
      <Menu>
        {categoryRestaurants.map((category) => (
          <MenuItem
            key={category}
            select={valueCategory === category}
            onClick={() => setValueCategory(category)}
          >
            {category}
          </MenuItem>
        ))}
      </Menu>
      <CardsRestaurant>{filterRestaurant}</CardsRestaurant>
    </ContainerFeed>
  );
};
export default Feed;
