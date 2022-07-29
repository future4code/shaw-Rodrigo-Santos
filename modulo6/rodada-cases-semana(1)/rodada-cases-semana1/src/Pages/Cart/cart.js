import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import CardProduct from "../../Components/CardProduct/CardProduct";
import Header from "../../Components/Header/Header";
import MenuBottom from "../../Components/Menu/Menu";
import { BASE_URL } from "../../Constants/url";
import { useGlobal } from "../../Context/Global/GlobalStateContext";
import { useRequestData } from "../../Hooks/useRequestData";
import {
  Main,
  CartConfig,
  InfoProfile,
  InfoRestaurant,
  CartInfo,
  Payment,
  Freight,
  EmptyCart,
  Total,
  Form,
} from "./styled";

const Cart = () => {
  const profile = useRequestData({}, `${BASE_URL}/profile`);
  const [payment, setPayment] = useState("");
  const [fullPrice, setFullPrice] = useState(0);
  const [paymentMethod] = useState(["money", "creditcard"]);

  const { setters, states } = useGlobal();
  const { setOrder } = setters;
  const { cart, restaurant, order } = states;

  const onChangePayment = (event) => {
    setPayment(event.target.value);
  };

  const totalPrice = () => {
    let totPrice = 0;
    for (const product of cart) {
      totPrice += product.price * product.quantity;
    }
    setFullPrice(totPrice);
  };

  useEffect(() => {
    totalPrice();
  }, []);

  const placeOrder = async () => {
    const body = {
      products: cart.map((product) => {
        return ({
          id: product.id,
          quantity: product.quantity,
        })
      }),
      paymentMethod: payment,
    };

    await axios
      .post(`${BASE_URL}/restaurants/${restaurant.id}/order`, body, {
        headers: {
          auth: window.localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setOrder(res.data.order);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  const onSubmitPlaceOrder = (e) => {
    e.preventDefault();
    placeOrder();
  };

  return (
    <Main>
      <Header title={"Meu carrinho"} back />
      <CartConfig>
        <InfoProfile>
          <p>Endereço de entrega</p>
          <p>{profile[0].user && profile[0].user.address}</p>
        </InfoProfile>

        <InfoRestaurant>
          <p>{restaurant.name}</p>
          <p>{restaurant.address}</p>
          <p>{restaurant.deliveryTime + "min"}</p>
        </InfoRestaurant>

        <CartInfo>
          {cart.length > 0 ? (
            cart.map((product) => {
              return (
                <CardProduct
                  product={product}
                  key={product.id}
                  restaurant={restaurant}
                />
              );
            })
          ) : (
            <EmptyCart>Carrinho vazio</EmptyCart>
          )}
        </CartInfo>

        <Payment>
          <Freight>
            Frete
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(restaurant.shipping ? restaurant.shipping : 0)}
          </Freight>

          <Total>
            <p>Subtotal</p>
            <p>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(fullPrice)}
            </p>
          </Total>

          <h1>Forma de pagamento</h1>
          <Form onSubmit={onSubmitPlaceOrder}>
            {paymentMethod.map((key) => {
              return (
                <div key={key}>
                  <input
                    checked={payment === key}
                    name={"paymentMethod"}
                    id={key}
                    type={"radio"}
                    onChange={onChangePayment}
                    value={key}
                  />
                  <label htmlFor={key}>{key}</label>
                </div>
              );
            })}
            <Button type="submit">Confimar</Button>
          </Form>
        </Payment>
      </CartConfig>
      <MenuBottom page={"cart"} />
    </Main>
  );
};
export default Cart;
