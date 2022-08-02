import styled from "styled-components";
import { ReactComponent as Home } from "../../Assets/home.svg";
import { ReactComponent as Cart } from "../../Assets/cart.svg";
import { ReactComponent as User } from "../../Assets/user.svg";

export const MenuContainer = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  height: 3.062rem;
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.2), 0 -2px 1px -1px rgba(0, 0, 0, 0.12),
    0 -1px 1px 0 rgba(0, 0, 0, 0.14);
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
`;

export const MenuContainerSpace = styled.div`
  height: 3.062rem;
`;

export const HomeStyled = styled(Home)`
  width: 2.5rem;
  fill: ${(props) => (props.pageCurrent ? "red" : "black")};
    cursor: pointer;
    &:hover {
        fill: red;
    }
    transition: fill 0.2s ease-in-out;
    &:active {
        fill: red;
    }
 
`;

export const CartStyled = styled(Cart)`
  width: 2.5rem;
  fill: ${(props) => (props.pageCurrent ? "red" : "black")};
    cursor: pointer;
    &:hover {
        fill: red;
    }
    transition: fill 0.2s ease-in-out;
    &:active {
        fill: red;
    }
`;

export const UserStyled = styled(User)`
  width: 2.5rem;
  fill: ${(props) => (props.pageCurrent ? "red" : "black")};
    cursor: pointer;
    &:hover {
        fill: red;
    }
    transition: fill 0.2s ease-in-out;
    &:active {
        fill: red;
    }
`;
