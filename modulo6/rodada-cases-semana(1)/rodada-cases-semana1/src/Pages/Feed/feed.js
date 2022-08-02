import axios from "axios";
import React, { useEffect, useState } from "react";
import CardRestaurant from "../../Components/CardRestaurant/CardRestaurant";
import Header from "../../Components/Header/Header";
import MenuBottom from "../../Components/Menu/Menu";
import Order from "../../Components/Order/order";
import { BASE_URL } from "../../Constants/url";
import { useGlobal } from "../../Context/Global/GlobalStateContext";
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

  const { setters, states } = useGlobal();
  const { setOrder } = setters;
  const { order } = states;

  const getOrder = () => {
    axios
      .get(`${BASE_URL}/active-order`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setOrder(res.data.order);
        
        const expiresAt = res.data.order.expiresAt;
        setTimeout(() => {
          getOrder();
        }, expiresAt - new Date().getTime());
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getRestaurants();
    getOrder();
  }, []);

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

    const changeObjectArray = [];

    takeOutRepeat.map((category) => {
      const insertObj = { category, select: false };
      changeObjectArray.push(insertObj);
    });
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
      return <CardRestaurant restaurant={restaurant} key={restaurant.id} />;
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
        <MenuItem onClick={() => setValueCategory("")}>Todos</MenuItem>
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
      <MenuBottom page={"feed"} />
      {order && (
        <Order
          restaurantName={order.restaurantName}
          totalPrice={order.totalPrice}
        />
      )}
    </ContainerFeed>
  );
};
export default Feed;
