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

export const InfoRestaurant = styled.div`
display: flex;
flex-direction: column;
width: 100%;
font-size: 1.2rem;
margin: 10px;
p:nth-child(1){
    color: red;
}
`
export const CartInfo = styled.div`
margin-top:  10px;
display: flex;
flex-direction: column;
width: 100%;
`
export const EmptyCart = styled.div`
font-size: 3rem;
text-align: center;
`
export const Payment = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
p,label{
    font-size: 1.2rem;
}
`
export const Freight = styled.div`
display: flex;
justify-content: flex-end;
margin: 5px;
`
export const Total = styled.div`
display: flex;
justify-content:space-between;
margin:5px;
p:nth-child(2){
    color: red;
    font-size: 1.5rem;
}
`
export const Form = styled.form`
display: flex;
flex-direction: column;
div{
margin:5px;
}
label{
    font-size: 1.5rem;
    text-transform: uppercase;
}
input{
    height: 20px;
    width: 20%;
}
`
export const SpaceFooter = styled.div`
height:3.000rem;
`
