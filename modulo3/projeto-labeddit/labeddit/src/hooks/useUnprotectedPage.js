import React, { useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom"
import { goToFeedPage } from "../routes/coordinator";

//Custom hook de proteção
export const useUnprotectedProtectedPage = () => {
    const navigate = useNavigate()
    //para redirecionar ao login caso não consiga o token
    useLayoutEffect(()=>{
      const token = localStorage.getItem("token")
    
      if(token){
        alert("Já está logado!!")
        goToFeedPage(navigate)
      }
    },[navigate])
  } 