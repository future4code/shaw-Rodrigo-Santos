import axios from "axios";
import React, { useEffect, useState } from "react";
import CardRestaurant from "../../Components/CardRestaurant/CardRestaurant";
import { ContainerCardRestaurant } from "../../Components/CardRestaurant/styled";
import Header from "../../Components/Header/Header";
import { BASE_URL } from "../../Constants/url";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { CardsRestaurant, ContainerFeed, InputSearch } from "./styled";

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
      <CardsRestaurant>
        <InputSearch />
        {restaurants.map((restaurant) => {
          return <CardRestaurant restaurant={restaurant} />;
        })}
      </CardsRestaurant>
    </ContainerFeed>
  );
};
export default Feed;
