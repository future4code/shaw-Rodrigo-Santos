import { useNavigate } from "react-router-dom";
import { goToCart, goToFeed, goToProfile } from "../../Routes/coordinator";
import {
  CartStyled,
  HomeStyled,
  MenuContainer,
  MenuContainerSpace,
  UserStyled,
} from "./styled";

const MenuBottom = ({ page }) => {
  const navigate = useNavigate();
  return (
    <>
      <MenuContainer>
        <HomeStyled
          pageCurrent={page === "feed"}
          onClick={() => goToFeed(navigate)}
        />
        <UserStyled
          pageCurrent={page === "profile"}
          onClick={() => goToProfile(navigate)}
        />
        <CartStyled
          pageCurrent={page === "cart"}
          onClick={() => goToCart(navigate)}
        />
      </MenuContainer>
      <MenuContainerSpace />
    </>
  );
};
export default MenuBottom;
