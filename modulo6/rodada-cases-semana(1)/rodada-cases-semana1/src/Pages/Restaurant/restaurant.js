import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../Constants/url";
import axios from "axios";
import {
  CardsRestaurant,
  Category,
  ContainerRestaurant,
  SectionProductByCategory,
} from "./styled";
import CardRestaurantDetails from "../../Components/CardRestaurantDetails/CardsRestaurantDetails";
import CardProduct from "../../Components/CardProduct/CardProduct";
import Header from "../../Components/Header/Header";
import MenuBottom from "../../Components/Menu/Menu";
import { useGlobal } from "../../Context/Global/GlobalStateContext";

const Restaurant = () => {
  //hook de parametro
  const { restaurantId } = useParams();
  const [restaurant, setRestaurant] = useState({});
  const [categories, setCategories] = useState([]);

  const { requests } = useGlobal();
  const { addToCart } = requests;

  const getRestaurant = async () => {
    const token = window.localStorage.getItem("token");
    await axios
      .get(`${BASE_URL}/restaurants/${restaurantId}`, {
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
  //UseEffect para obter o restaurante
  useEffect(() => {
    getRestaurant();
  }, []);

  //UseEffect para pegar os detalhes do restaurante
  useEffect(() => {
    if (restaurant.products) {
      const newCategories = [];
      for (const product of restaurant.products) {
        if (!newCategories.includes(product.category)) {
          newCategories.push(product.category);
        }
      }
      setCategories(newCategories);
    }
  }, [restaurant]);

  return (
    <ContainerRestaurant>
      <Header title={"Restaurante"} back={true} />
      <CardsRestaurant>
        <CardRestaurantDetails restaurant={restaurant} />

        {restaurant.products &&
          categories.map((category) => {
            return (
              <SectionProductByCategory key={category}>
                <Category>{category}</Category>
                {restaurant.products
                  .filter((product) => {
                    return product.category === category;
                  })
                  .map((product) => {
                    return (
                      <CardProduct
                        product={product}
                        key={product.id}
                        addToCart={addToCart}
                        restaurant={restaurant}
                      />
                    );
                  })}
              </SectionProductByCategory>
            );
          })}
      </CardsRestaurant>
      <MenuBottom page={""} />
    </ContainerRestaurant>
  );
};
export default Restaurant;
