import React from "react";
import { HeaderMain, LogoStyle, ButtonStyle } from "./styled";
import { goToLogin, goToBack, goToFeedPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderMain>
      <ButtonStyle onClick={() => goToFeedPage(navigate)}>
        <LogoStyle src={logo} alt="logomarca" />
      </ButtonStyle>
      <ButtonStyle onClick={() => goToLogin(navigate)}>login</ButtonStyle>
      {/* <button onClick={() => goToBack(navigate)}>Voltar</button> */}
    </HeaderMain>
  );
};

export default Header;
