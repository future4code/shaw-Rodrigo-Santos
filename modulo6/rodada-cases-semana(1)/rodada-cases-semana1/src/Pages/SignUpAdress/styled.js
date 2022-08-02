import styled from "styled-components";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const Main = styled.div`
  padding: 10px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    margin-top: 50px;
    display: flex;
    width: 90%;
    height: 50%;
    justify-content: space-evenly;
    flex-direction: column;
  };

  p {
    font-size: 1rem;
  }
`;

export const InputMaterial = styled(TextField)`
  width: 100%;
`;

export const ButtonStyled = styled(Button)`
  && {
    color: #000;
    background-color: #e8222e;
    width: 100%;
  }
`;


