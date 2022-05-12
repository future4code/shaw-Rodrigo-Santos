import React from "react";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import useForm from "../../hooks/useForm";
import { postCreateComent } from "../../services/posts";
import Loading from "../../components/Loading/Loading";
import {
  creatCommentVote,
  putChangeCommentVote,
} from "../../services/likes";

const PostPage = () => {
  useProtectedPage();
  //Passou params para pegar o ID de quando clicar no card
  const params = useParams();
  //Setando as configurações do hook useForm
  const { form, onChange, clear } = useForm({ body: "" });

  //Requisição da API que obtém todos os comentários
  const getComments = useRequestData(
    [{}],
    `${BASE_URL}/posts/${params.id}/comments`
  );

  const onClickCreatCommentVote = (id) => {
    creatCommentVote(id);
    console.log(id);
  };

  const onClickPutputChangeCommentVote = (id) => {
    putChangeCommentVote(id);
    console.log(id);
  };

  //Map da requisição acima, ele vai renderizar os comentários 1 a 1
  const mapGetPostComents = getComments.map((coment) => {
    return (
      <div key={coment.id}>
        <p> comentado por... {coment.username}</p>
        <p> {coment.body} </p>
        <button onClick={()=> onClickCreatCommentVote(coment.id) }> Dar Like</button>
        <button onClick={()=> onClickPutputChangeCommentVote(coment.id) }> Dar Deslike</button>
        <p> likes: {coment.voteSum}</p>
      </div>
    );
  });

  //Requisição dos posts, puxa todos os posts disponíveis, porém queremos apenas o selecionado ao clicar no card do feed
  const getPost = useRequestData([], `${BASE_URL}/posts`);

  //Filter da requisição acima, esse filter vai garantir que só o post que tenha o ID igual ao ID passado por params seja renderizado
  const filterGetPost = getPost.filter((post) => {
    return post.id === params.id;
  });

  //Aqui temos onSubmit da tag <form> nele demos o prevent default que nos previne o comportamento padrão da tag de se atualizar.
  //Temos também a requisição de POST que posta novos comentários ná página
  const onSubmit = (event) => {
    event.preventDefault();
    postCreateComent(form, clear, params);
  };

 

  return (
    <div>
      <div>
        <h2>
          {filterGetPost && filterGetPost[0] && filterGetPost[0].username}
        </h2>
        <h2>{filterGetPost && filterGetPost[0] && filterGetPost[0].title}</h2>
        <h2>{filterGetPost && filterGetPost[0] && filterGetPost[0].body}</h2>
      </div>

      <form onSubmit={onSubmit}>
        <input type="text" name="body" value={form.body} onChange={onChange} />
        <button>Enviar Comentário</button>
      </form>
      {mapGetPostComents}
    </div>
  );
};

export default PostPage;
