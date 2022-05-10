import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/urls";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { goToPostPage } from "../../routes/coordinator";
import {
  CardFeedStyle,
  EnviadoPorStyle,
  TextoFeedPage,
  BotaoLike,
  ButtonsFather,
  NewPostFather,
  MainCard,
} from "./styled";

const FeedPage = () => {
  useProtectedPage();
  const feed = useRequestData([], `${BASE_URL}/posts`);
  const navigate = useNavigate();

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

  return (
    <div>
      <NewPostFather>
        <input />
        <button>Postar</button>
      </NewPostFather>
      <h1>FeedPage</h1>
      {feedCards}
    </div>
  );
};

export default FeedPage;
