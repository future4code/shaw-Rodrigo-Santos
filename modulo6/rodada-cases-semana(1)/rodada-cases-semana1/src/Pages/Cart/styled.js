import styled from "styled-components";

export const Main = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const MainCard = styled.div`
  display: flex;
  height: 5%;
  justify-content: center;
  align-self: center;
  font-size: 2rem;
`;

export const CartConfig = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 95%;
  justify-content: space-between;
`;

export const InfoProfile = styled.div`
  margin-top: 5px;
  height: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  background-color: lightgray;
  width: 100%;
`;
