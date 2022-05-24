import styled from "styled-components";

export const InputFather = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 9px 10px;
  width: 90%;
  margin: 2%;
  left: 31px;
  top: 122px;
  background: #fbfbfb;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
`;

export const DivDosForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputStyle = styled.input`
  width: 90vw;
  height: 16vh;
  background: #ededed;
  border-radius: 12px;
  border: none;
`;

export const CommentsFather = styled.div`
  display: flex;
`;

export const PostButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 2% 4%; */
  width: 80vw;
  height: 5vh;
  margin: 4%;
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

export const EnviadoPorStyle = styled.div`
  width: 80%;
  height: 16px;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  text-align: start;
  color: #6f6f6f;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const BotaoLike = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2%;
  width: 18vw;
  height: 3vh;
  background: #fbfbfb;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  cursor: pointer;
`;
