import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../Constants/url";
import axios from "axios";
import { CardsRestaurant, ContainerRestaurant } from "./styled";
import CardRestaurantDetails from "../../Components/CardRestaurantDetails/CardsRestaurantDetails";

const Restaurant = () => {
  //hook de parametro
  const {restaurantId} = useParams();
  const [restaurant, setRestaurant] = useState({});

  const getRestaurant = async () => {
    const token = window.localStorage.getItem("token");
    await axios
      .get(`${BASE_URL}/restaurants/${ restaurantId }`, {
        headers: {
          auth: token,
        },
      })
      .then((res) => {
        setRestaurant(res.data.restaurant);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };
  useEffect(() => {
    getRestaurant();
  }, []);

  return (
    <ContainerRestaurant>
      <CardsRestaurant>
      <CardRestaurantDetails restaurant={restaurant} />
      </CardsRestaurant>
    </ContainerRestaurant>
  );
};
export default Restaurant;
