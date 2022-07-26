import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../Constants/url";
import axios from "axios";
import { ContainerRestaurant } from "./styled";

const Restaurant = () => {
  //hook de parametro
  const params  = useParams();
  console.log(params);

  const getRestaurant = async () => {
    const token = window.localStorage.getItem('token');
    await axios
      .get(`${BASE_URL}/restaurants/${params.id}`, {
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

  return <ContainerRestaurant>


  </ContainerRestaurant>;
};
export default Restaurant;
