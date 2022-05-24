import React from "react";
import { HeaderMain, LogoStyle, ButtonStyle } from "./styled";
import { goToLogin, goToBack, goToFeedPage } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Header = ({ rightButtonText, setRightButtonText }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
  };

  const rightButtonAction = () => {
    if (token) {
      logout();
      setRightButtonText("Login");
      goToLogin(navigate);
    } else {
      goToLogin(navigate);
    }
  };

  return (
    <HeaderMain>
      <ButtonStyle onClick={() => goToFeedPage(navigate)}>
        <LogoStyle src={logo} alt="logomarca" />
      </ButtonStyle>
      <ButtonStyle onClick={rightButtonAction}>{rightButtonText}</ButtonStyle>
      {/* <button onClick={() => goToBack(navigate)}>Voltar</button> */}
    </HeaderMain>
  );
};

export default Header;
