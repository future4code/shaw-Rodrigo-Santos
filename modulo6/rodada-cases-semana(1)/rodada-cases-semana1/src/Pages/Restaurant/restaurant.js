import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../Constants/url";
import axios from "axios";

const Restaurant = () => {
  //hook de parametro
  const { restaurantId } = useParams();

  const getRestaurant = async () => {
    const token = localStorage.getItem("token");
    await axios
      .get(`${BASE_URL}/restaurants/${restaurantId}`, {
        headers: {
          auth: token
        }
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err.response.data.message)
      });
  };
  useEffect(() => {
    getRestaurant();
  }, []);

  return <div>Restaurant</div>;
};
export default Restaurant;
