import React from "react";
import { BASE_URL } from "../../constants/urls";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import {
  CardFeedStyle,
  EnviadoPorStyle,
  TextoFeedPage,
  BotaoLike,
  ButtonsFather,
  NewPostFather,
} from "./styled";

const FeedPage = () => {
  useProtectedPage();
  const feed = useRequestData([], `${BASE_URL}/posts`);
  console.log(feed);

  const onClickCard = () => {};

  const feedCards = feed.map((postFeed) => {
    return (
      <div>
        {/* < button onClick={onClickCard}> */}
        <CardFeedStyle key={postFeed.id}>
          <EnviadoPorStyle>Enviado por: {postFeed.userId}</EnviadoPorStyle>
          <TextoFeedPage>
            <h3>{postFeed.title}</h3>
            <p>{postFeed.body}</p>
          </TextoFeedPage>
          <ButtonsFather>
            <BotaoLike>{postFeed.voteSum}</BotaoLike>
            <BotaoLike>{postFeed.userVote}</BotaoLike>
          </ButtonsFather>
          <button onClick={onClickCard}>Ver post</button>
        </CardFeedStyle>
       {/*  </button> */}
      </div>
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
