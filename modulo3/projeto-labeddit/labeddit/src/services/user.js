import axios from "axios";
import { BASE_URL } from "../constants/urls";
import { goToFeedPage } from "../routes/coordinator";

export const login = (body, clear, navigate, setRightButtonText) => {
  axios
    .post(`${BASE_URL}/users/login`, body)
    .then((res) => {
      console.log("Deu certo", res);
      localStorage.setItem("token", res.data.token)
      clear()
      goToFeedPage(navigate)
      setRightButtonText("Logout")
    })
    .catch((err) => {
        console.log("Deu erro", err)
        alert(err.response.data.message)
    })
};

export const signUp = (body, clear, navigate, setRightButtonText) => {
  axios
    .post(`${BASE_URL}/users/signup`, body)
    .then((res) => {
      console.log("Deu certo", res);
      alert("Cadastro realizado com sucesso")
      localStorage.setItem("token", res.data.token)
      clear()
      goToFeedPage(navigate)
      setRightButtonText("Logout")
    })
    .catch((err) => {
        console.log("Deu erro", err.response)
        alert("Erro no cadastro!", err.response.data.message)
    })
};
