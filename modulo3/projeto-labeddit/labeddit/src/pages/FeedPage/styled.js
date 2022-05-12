import styled from "styled-components";

export const CardFeedStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 9px 10px;
  gap: 18px;
  width: 90%;
  height: 30vh;
  margin: 2%;
  background: #fbfbfb;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
`;

export const EnviadoPorStyle = styled.div`
  width: 80%;
  height: 16px;

  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  color: #6f6f6f;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const TextoFeedPage = styled.div`
  width: 80vw;
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 400;
  color: #000000;
`;

export const BotaoLike = styled.button`
  display: flex;
  align-items: flex-start;
  padding: 9px 10px;
  gap: 18px;
  margin: 2%;
  width: 50%;
  height: 6vh;
  background: #fbfbfb;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  cursor: pointer;
  
  &:hoover{
    background-color: aquamarine;
  }
`;

export const ButtonsFather = styled.div`
  display: flex;
`;

export const MainCard = styled.div`
  
`;

//Style do Post

export const NewPostFather = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 9px 10px;
  gap: 18px;
  width: 90%;
  height: 30%;
  margin: 2%;
  background: #fbfbfb;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
`;
export const DivDosForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const InputStyleTitle = styled.input`
  width: 80vw;
  height: 4vh;
  background: #ededed;
  border-radius: 12px;
  border: none;
  margin-bottom: 3%;
`; 

export const InputStyle = styled.input`
  width: 80vw;
  height: 16vh;
  background: #ededed;
  border-radius: 12px;
  border: none;
`;

export const PostButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2% 4%;
  width: 80vw;
  height: 7vh;
  margin: 3%;
  cursor: pointer;
  background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%), #4088cb;
  border: none;
  border-radius: 12px;
  
`;

export const ButtonLetter = styled.div`
  width: 55px;
  height: 23px;
  font-family: "IBM Plex Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

