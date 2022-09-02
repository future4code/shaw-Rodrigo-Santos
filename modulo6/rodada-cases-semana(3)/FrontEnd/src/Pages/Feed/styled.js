import styled from "styled-components";

export const Maincontainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-seriff;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 20vh;
  background-color: #2ed0e1;
  justify-content: center;
  align-items: center;
  form {
    input {
      padding: 20px;
      margin: 10px;
      border: none;
      border-radius: 3px;
    }
    button {
      padding: 18px;
      margin: 10px;
      border: 3px solid white;
      border-radius: 3px;
      background-color: inherit;
      color: white;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 50px;
  justify-content: center;
  align-items: center;
`;

export const Graphics = styled.div`
  display: flex;
  width: 100%;
  margin: 50px;
  justify-content: space-between;
  align-items: center;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  border: 1px solid rgba(0, 0, 0, 0.8);
`;

export const TableHead = styled.div`
  display: grid;
  grid-template-columns: 9.5% 30.16% 30.16% 30.16%;
`;
export const TableRows = styled.div`
  display: grid;
  grid-template-columns: 9.5% 30.16% 30.16% 30.16%;
`;

export const ItemTable = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 10px;
  text-align: center;
`;
