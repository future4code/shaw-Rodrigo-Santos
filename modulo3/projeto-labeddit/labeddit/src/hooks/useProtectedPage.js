import React, { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom"
import { goToLogin } from "../routes/coordinator";

//Custom hook de proteção
export const useProtectedPage = () => {
    const navigate = useNavigate()
    //para redirecionar ao login caso não consiga o token
    useLayoutEffect(()=>{
      const token = localStorage.getItem("token")
    
      if(token===null){
        alert("Não está logado!!")
        goToLogin(navigate)
      }
    },[navigate])
  } 