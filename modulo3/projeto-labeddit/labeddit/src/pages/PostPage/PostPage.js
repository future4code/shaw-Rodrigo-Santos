import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import useForm from "../../hooks/useForm";
import { postCreateComent } from "../../services/posts";
import { creatCommentVote, putChangeCommentVote } from "../../services/likes";
import { InputFather, InputStyle, DivDosForm, EnviadoPorStyle, BotaoLike, CommentsFather, PostButton, ButtonLetter } from "./styled";
import { ThumbDownAltRounded, ThumbUpOffAltRounded } from "@mui/icons-material";


const PostPage = () => {
  useProtectedPage();
  //Passou params para pegar o ID de quando clicar no card
  const params = useParams();
  //Setando as configurações do hook useForm
  const { form, onChange, clear } = useForm({ body: "" });

  //Requisição da API que obtém todos os comentários
  const [comments, getComment] = useRequestData(
    [{}],
    `${BASE_URL}/posts/${params.id}/comments`
  );

  const onClickCreatCommentVote = (id) => {
    creatCommentVote(id, getComment);
    console.log(id);
  };

  const onClickPutputChangeCommentVote = (id) => {
    putChangeCommentVote(id, getComment);
    console.log(id);
  };

  //Map da requisição acima, ele vai renderizar os comentários 1 a 1
  const mapGetPostComents = comments.map((coment) => {
    return (
      <InputFather key={coment.id}>
        <EnviadoPorStyle> Enviado por: {coment.username}</EnviadoPorStyle>
        <p> {coment.body} </p>
        <CommentsFather>
        <BotaoLike onClick={() => onClickCreatCommentVote(coment.id)}>
         <ThumbUpOffAltRounded/>
        </BotaoLike>
        <BotaoLike onClick={() => onClickPutputChangeCommentVote(coment.id)}>
        <ThumbDownAltRounded/>
        </BotaoLike>
        <BotaoLike> likes: {coment.voteSum}</BotaoLike>
        </CommentsFather>
      </InputFather>
    );
  });

  //Requisição dos posts, puxa todos os posts disponíveis, porém queremos apenas o selecionado ao clicar no card do feed
  const [getPost] = useRequestData([], `${BASE_URL}/posts`);

  //Filter da requisição acima, esse filter vai garantir que só o post que tenha o ID igual ao ID passado por params seja renderizado
  const filterGetPost = getPost.filter((post) => {
    return post.id === params.id;
  });

  //Aqui temos onSubmit da tag <form> nele demos o prevent default que nos previne o comportamento padrão da tag de se atualizar.
  //Temos também a requisição de POST que posta novos comentários ná página
  const onSubmit = (event) => {
    event.preventDefault();
    postCreateComent(form, clear, params, getComment);
  };

  return (
    <>
      <InputFather>
        <h3>{filterGetPost && filterGetPost[0] && filterGetPost[0].username}</h3>
        <h4>{filterGetPost && filterGetPost[0] && filterGetPost[0].title}</h4>
        <h5>{filterGetPost && filterGetPost[0] && filterGetPost[0].body}</h5>
      </InputFather>

      <DivDosForm>
      <form onSubmit={onSubmit}>
        <InputStyle type="text" name="body" value={form.body} onChange={onChange} placeholder={"Adicionar comentário"} />
        <PostButton><ButtonLetter>Responder</ButtonLetter></PostButton>
      </form>
      </DivDosForm>
      {mapGetPostComents}
    </>
  );
};

export default PostPage;
