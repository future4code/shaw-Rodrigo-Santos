import React from "react";

const Cart = () => {
  return (
    <div>
      <div>
        {" "}
        <p>Meu Carrinho</p>
      </div>

      <div>
        <p>Endereço de entrega</p>
        <p>Rua do bobo, numero 0</p>
      </div>
      <div>
        <p>Carrinho vazio</p>
      </div>
      <div>
        <p>Frete R$ 0,00</p>
        <div>
          <p>Subtotal</p>
          <p>R$ 0,00</p>
        </div>
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
  );
};
export default Cart;
