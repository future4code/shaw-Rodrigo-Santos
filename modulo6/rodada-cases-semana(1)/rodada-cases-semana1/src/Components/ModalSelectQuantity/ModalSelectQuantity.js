import Modal from "@mui/material/Modal";
import { useState } from "react";
import {
  BoxModal,
  ButtonAddTaCart,
  SelectQuantity,
  TitleModal,
} from "./styled";

const ModalSelectQuantity = ({ open, setOpen, choiceQuantity }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
        }}
      >
        <BoxModal>
          <TitleModal>Selecione a quantidade desejada</TitleModal>
          <SelectQuantity onChange={(e) => setQuantity(e.target.value)}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
          </SelectQuantity>
          <ButtonAddTaCart onClick={() => choiceQuantity(Number(quantity))}>
            Adicionar ao carrinho
          </ButtonAddTaCart>
        </BoxModal>
      </Modal>
    </div>
  );
};
export default ModalSelectQuantity;
