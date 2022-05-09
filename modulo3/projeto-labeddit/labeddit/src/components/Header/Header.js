import React from "react";
import { HeaderMain } from "./styled";
import { goToLogin } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate
    return(
        <HeaderMain>
            <button><img src= "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.iconscout.com%2Ficon%2Ffree%2Fpng-256%2Freddit-4062838-3357724.png&imgrefurl=https%3A%2F%2Ficonscout.com%2Ficon%2Freddit-4062838&tbnid=EU7zAenrZWVvwM&vet=12ahUKEwjgnrqAtNP3AhWHMrkGHa-gBn0QMygPegUIARDdAQ..i&docid=UkQN1ydmOS9A2M&w=256&h=256&q=logo%20reddit%20button&client=opera-gx&ved=2ahUKEwjgnrqAtNP3AhWHMrkGHa-gBn0QMygPegUIARDdAQ"/></button>
            <button onClick={() => goToLogin(navigate)}>Login</button>
           

        </HeaderMain>
    )
}

export default Header