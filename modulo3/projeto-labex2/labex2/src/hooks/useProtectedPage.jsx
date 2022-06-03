import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"

//Custom hook de proteção
export const useProtectedPage = () => {
    const navigate = useNavigate()
    //para redirecionar ao login caso não consiga o token
    useEffect(()=>{
      const token = localStorage.getItem("token")
  
      if(token===null){
        console.log("Não está logado!!")
        navigate.push("/login")
      }
    },[])
  }