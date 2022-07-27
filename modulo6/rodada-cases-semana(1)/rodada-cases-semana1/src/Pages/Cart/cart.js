import React from "react";
import { BASE_URL } from "../../Constants/url";
import { useRequestData } from "../../Hooks/useRequestData";
import { Main, MainCard, CartConfig, InfoProfile } from "./styled";

const Cart = () => {

  const profile = useRequestData({}, `${BASE_URL}/profile`)

  console.log(profile[0].user);
  
  return (
    <Main>
      <MainCard>
        <p>Meu Carrinho</p>
      </MainCard>

      <CartConfig>
        <InfoProfile>
          <p>Endereço de entrega</p>
          <p>Rua do bobo, numero </p>
        </InfoProfile>

        <div>
          <p>Carrinho vazio</p>
        </div>

        <div>
          <p>Frete R$ 0,00</p>
          <div>
            <p>Subtotal</p>
            <p>R$ 0,00</p>
          </div>

          <h1>Forma de pagamento</h1>
          <form>
            <label>Dinheiro</label>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
            <label>Cartão</label>
            <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
            <button>Confirmar</button>
          </form>

        </div>

      </CartConfig>

    </Main>
  );
};
export default Cart;
