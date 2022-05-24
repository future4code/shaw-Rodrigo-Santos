import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { goToPostPage } from "../../routes/coordinator";
import { postCreatePost } from "../../services/posts";
import useForm from "../../hooks/useForm";
import {CircularProgress } from "@mui/material";
import { ThumbDownAltRounded, ThumbUpOffAltRounded } from "@mui/icons-material";
import { creatPostVote, putChangePostVote } from "../../services/likes";
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
  InputStyleTitle,
} from "./styled";

const FeedPage = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const [feed, getFeed] = useRequestData([], `${BASE_URL}/posts`);
  const { form, onChange, clear } = useForm({ title: "", body: "" });
  const [isLoading, setIsLoading] = useState(false);

  const onClickCard = (id) => {
    goToPostPage(navigate, id);
    console.log(id);
  };

  const onClickCreatPostVote = (id) => {
    creatPostVote(id, getFeed);
    console.log(id);
  };

  const onClickputChangePostVote = (id) => {
    putChangePostVote(id, getFeed);
    console.log(id);
  };

  const feedCards = feed.map((postFeed) => {
    return (
      <MainCard>
        <CardFeedStyle key={postFeed.id}>
          <EnviadoPorStyle>Enviado por: {postFeed.username}</EnviadoPorStyle>
          <TextoFeedPage>
            <h3>{postFeed.title}</h3>
            <p>{postFeed.body}</p>
          </TextoFeedPage>
          <ButtonsFather>
            <BotaoLike onClick={() => onClickCreatPostVote(postFeed.id)}><div> <ThumbUpOffAltRounded/> {postFeed.voteSum}</div></BotaoLike>
            <BotaoLike onClick={()=> onClickputChangePostVote(postFeed.id)}> <ThumbDownAltRounded/
            >{postFeed.userVote} </BotaoLike>
            <BotaoLike onClick={() => onClickCard(postFeed.id)}>Post</BotaoLike>
          </ButtonsFather>
        </CardFeedStyle>
      </MainCard>
    );
  });

  const onSubmit = (event) => {
    event.preventDefault();
    postCreatePost(form, clear, setIsLoading, getFeed );
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
              {isLoading ? (
                <CircularProgress color={"white"} />
              ) : (
                <ButtonLetter>Postar</ButtonLetter>
              )}
            </PostButton>
          </DivDosForm>
        </form>
      </NewPostFather>
      {feedCards}
    </div>
  );
};
export default FeedPage;
