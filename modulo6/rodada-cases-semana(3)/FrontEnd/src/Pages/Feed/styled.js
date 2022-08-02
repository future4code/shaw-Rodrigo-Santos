import styled from "styled-components";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export const Main = styled.div`
  padding: 10px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 1rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 30%;
  width: 80%;
  justify-content: space-evenly;
`;

export const ButtonStyled = styled(Button)`
  && {
    color: #000;
    background-color: #e8222e;
    width: 100%;
  }
`;

export const InputMaterial = styled(TextField)`
  width: 100%;
`;

export const DivPassword = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ImgSize = styled.img`
  width: 45%;
  margin-top: 10%;
`;

export const SignUpButton = styled.button`
  width: 90%;
  height: 8vh;
  padding: 12px 16px;

  background-color: white;
  border: none;
  margin: 2%;
`;
