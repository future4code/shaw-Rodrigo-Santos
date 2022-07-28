import React, { useState } from "react";
import CardCart from "../../Components/CardCart/cardCart";
import Header from "../../Components/Header/Header";
import MenuBottom from "../../Components/Menu/Menu";
import { BASE_URL } from "../../Constants/url";
import { useRequestData } from "../../Hooks/useRequestData";
import {
  Main,
  CartConfig,
  InfoProfile,
  InfoRestaurant,
  CartInfo,
  Payment,
  Freight,
} from "./styled";

const Cart = () => {
  const profile = useRequestData({}, `${BASE_URL}/profile`);
  const [payment, setPayment] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState({
    money: false,
    creditcard: false,
  });

  const mockData = [
    {
      name: "Stencil",
      price: 40,
      photoUrl: "https://picsum.photos/200",
      amount: 2,
      description: "Pão, carne, queijo, presunto, alface, tomate",
    },
    {
      name: "Fritas",
      price: 10,
      photoUrl: "https://picsum.photos/200",
      amount: 2,
      description: "Crocantes",
    },
  ];

  const onChangePayment = (e) => {
    const newCheck = { ...paymentMethod };
    newCheck[e.target.name] = e.target.checked;

    const result = Object.keys(newCheck).filter((pay) => {
      if (newCheck[pay]) {
        return [pay, ...payment];
      }
    });
    setPayment(result);
    setPaymentMethod(newCheck);
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
          <p>Nome do restaurante</p>
          <p>Rua do restaurante</p>
          <p>30 - 45 min</p>
        </InfoRestaurant>

        <CartInfo>
          {mockData.length > 0 ? (
            mockData.map((data) => {
              return (
                <CardCart
                  key={data.name}
                  name={data.name}
                  price={data.price}
                  photoUrl={data.photoUrl}
                  amount={data.amount}
                  description={data.description}
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
            }).format(6)}
          </Freight>
          <div>
            <p>Subtotal</p>
            <p>R$ 0,00</p>
          </div>

          <h1>Forma de pagamento</h1>
          <form>
            {Object.keys(paymentMethod).map((key) => {
              const checked = paymentMethod[key];
              return (
                <div key={key}>
                  <input
                    checked={checked}
                    name={key}
                    id={key}
                    type={"checkbox"}
                    onChange={onChangePayment}
                  />
                  <label>{key}</label>
                </div>
              );
            })}
            <button>Confirmar</button>
          </form>
        </Payment>
      </CartConfig>
      <MenuBottom page={"cart"} />
    </Main>
  );
};
export default Cart;
