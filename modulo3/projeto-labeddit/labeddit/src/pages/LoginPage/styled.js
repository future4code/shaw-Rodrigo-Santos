import styled from "styled-components";

export const LogoStyle = styled.img`
  height: 48vh;
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  max-width: 450px;
  align-items: center;
  margin-bottom: 2%;
`;

export const InputStyle = styled.input`
  display: flex;
  flex-direction: column;
  margin: 1vh;
  height: 8vh;
  width: 90vw;
  box-sizing: border-box;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  background: #ffffff;
  border: 1px solid #d5d8de;
  border-radius: 4px;
`;

export const PostButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding: 2% 4%;
  width: 90vw;
  height: 6vh;
  margin: 3% 0% ;
  cursor: pointer;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%), #4088cb;
  border: none;
  border-radius: 27px;
`;

export const ButtonLetter = styled.div`
  height: 23px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const SignUpButton = styled.button`
  display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 10px;
width: 90vw;
height: 6vh;
left: 29px;
top: 676px;
cursor: pointer;
border: 1px solid #FE7E02;
border-radius: 27px;
`

export const SigButtonLetter = styled.div`
  height: 23px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #FE7E02;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
