import styled from "styled-components";

export const ContainerCardProduct = styled.div`
  display: flex;
  width: 100%;
  margin: 0.5rem 0;
  border: solid 1px gray;
  border-radius: 8px;
`;

export const ImageProduct = styled.img`
  width: 6rem;
  height: 7rem;
  border-radius: 7px 7px 0 0;
`;

export const BoxNameQuantity = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NameProduct = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: red;
  padding-bottom: 0.25rem;
`;

export const BoxInform = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0rem 0rem 0 1rem;
  flex-grow: 1;
`;

export const InformDescription = styled.p`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: gray;
  padding-bottom: 0.25rem 0;
  flex-grow: 1;
`;

export const BoxInformPriceButton = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InformPrice = styled.p``;

export const InformAddItemButton = styled.button`
  width: 5.625rem;
  height: 1.938rem;
  border-radius: 8px 0 8px 0;
  background-color: white;
  outline: 0;
  border: 1px black solid;
`;

export const InformRemoveItemButton = styled(InformAddItemButton)`
  border: 1px red solid;
  color: red;
`;

export const QuantityProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px red;
  width: 2.063rem;
  height: 2.63rem;
  border-radius: 0 8px 0 8px ;

`;