import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";



export default function ListTripsPage() {
  const navigate = useNavigate()

  const goToHomePage = () => {
    navigate("/")
  }

  const goBack = () => {
    navigate(-1)
  }

  return (
    <>
   <h1>ListTripsPage</h1>
   <button onClick={goToHomePage}>Home</button>
   <button onClick={goBack}>Voltar</button>
    </>
  );
}