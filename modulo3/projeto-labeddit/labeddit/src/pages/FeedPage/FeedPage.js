import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { goToPostPage } from "../../routes/coordinator";
import { postCreatePost } from "../../services/posts";
import useForm from "../../hooks/useForm";
import { CircularProgress } from "@mui/material";
import Loading from "../../components/Loading/Loading";
import {
  CardFeedStyle,
  EnviadoPorStyle,
  TextoFeedPage,
  BotaoLike,
  ButtonsFather,
  NewPostFather,
  MainCard,
  PostButton,
  ButtonLetter,
  InputStyle,
  DivDosForm,
  InputStyleTitle
} from "./styled";

const FeedPage = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const feed = useRequestData([], `${BASE_URL}/posts`);
  const { form, onChange, clear } = useForm({ title: "", body: "" });
  const [isLoading, setIsLoading] = useState(false);

  const onClickCard = (id) => {
    goToPostPage(navigate, id);
  };

  const feedCards = feed.map((postFeed) => {
    return (
      <MainCard onClick={() => onClickCard(postFeed.id)}>
        <CardFeedStyle key={postFeed.id}>
          <EnviadoPorStyle>Enviado por: {postFeed.id}</EnviadoPorStyle>
          <TextoFeedPage>
            <h3>{postFeed.title}</h3>
            <p>{postFeed.body}</p>
          </TextoFeedPage>
          <ButtonsFather>
            <BotaoLike>{postFeed.voteSum}</BotaoLike>
            <BotaoLike>{postFeed.userVote}</BotaoLike>
          </ButtonsFather>
        </CardFeedStyle>
      </MainCard>
    );
  });

  const onSubmit = (event) => {
    event.preventDefault();
    postCreatePost(form, clear, setIsLoading);
  };

  return (
    <div>
      <NewPostFather>
        <form onSubmit={onSubmit}>
          <DivDosForm>
            <InputStyleTitle
              type="text"
              name="title"
              value={form.title}
              onChange={onChange}
              placeholder="Título..."
            />
            <InputStyle
              type="text"
              name="body"
              value={form.body}
              onChange={onChange}
              placeholder="Escreva seu post..."
            />
            <PostButton>
              {isLoading ? <CircularProgress color={"inherit"} /> : <ButtonLetter>Postar</ButtonLetter>}
            </PostButton>
          </DivDosForm>
        </form>
      </NewPostFather>
      <h1>FeedPage</h1>
      {feedCards}
    </div>
  );
};
export default FeedPage;
