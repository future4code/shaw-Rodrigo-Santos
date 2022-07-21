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
        setRestaurants(res.data.restaurants)
        filterCategory(res.data.restaurants)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getRestaurants();
  }, []);

  const filterCategory = (restaurants) => {
    const arrayAux = []
    restaurants && restaurants.map((res)=>{
      arrayAux.push(res.category) 
    })
    const takeOutRepeat = [...new Set(arrayAux)]
    setCategoryRestaurants(takeOutRepeat)
  }

  const filterRestaurant = restaurants.filter((restaurant) => 
      inputText
        ? restaurant.name.toLowerCase().includes(inputText.toLowerCase())
        : true
    )
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
        {categoryRestaurants.map((category) =>{
          return <MenuItem select={false}>{category}</MenuItem>
        })}
     
      </Menu>
      <CardsRestaurant>{filterRestaurant}</CardsRestaurant>
    </ContainerFeed>
  );
};
export default Feed;
