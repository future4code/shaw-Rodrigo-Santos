import moment from "moment";
import PostData from "../data/PostData";
import { Post } from "../model/Post";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { createPostDTO } from "../types/creatPostDTO";

export default class PostBusiness {
  //injeção de dependência
  constructor(
    private postData: PostData,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator
  ) {}

  createPost = async (input: createPostDTO, token: string) => {
    //validação dos dados
    const { photo, description, type } = input;
    if (!photo || !description || !type) {
      throw new Error("Campos inválidos");
    }

    //fazer um id para o post
    const id = this.idGenerator.generate();

    //criar data do post através da lib moment
    const createdAt = moment().format("YYYY-MM-DD");

    //conferir se o token existe
    const tokenData = this.authenticator.getTokenData(token);
    if (!tokenData) {
      throw new Error("Token não enviado ou expirado");
    }

    //criar o post no banco
    const post = new Post(
      id,
      photo,
      description,
      type,
      createdAt,
      tokenData.id
    );
    await this.postData.insert(post);

    //retornar o post

    return post;
  };
}
