import styled from "styled-components";

export const ContainerFeed = styled.div``;

export const CardsRestaurant = styled.div`
  padding: 0 1rem;
  margin-top: 0.5rem;
`;

export const BoxInputSearch = styled.div`
  padding: 0 1rem;
  margin-top: 0.5rem;
`;

export const InputSearch = styled.input`
  width: 100%;
  height: 3.5rem;
  border: 1px solid black;
  border-radius: 2px;
  padding: 1rem 0.503rem 1rem 1.063rem;
`;
export const Menu = styled.nav`
  display: flex;
  height: 2.625rem;
  align-items: center;
  padding: 0 1rem 0 0;
  width: 100%;
  border-bottom: 1px solid black;
  overflow-x: auto;
`;
export const MenuItem = styled.button`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1rem;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: ${(p) => (p.select ? "red" : "black")};
  border: none;
  background: none;
  padding: 0.5rem 1rem;

  &:hover {
    background: #f5f5f5;
  }
`;
