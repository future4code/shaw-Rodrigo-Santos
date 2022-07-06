import { Post } from "../model/Post";
import { BaseDataBase } from "./BaseDataBase";

export default class PostData extends BaseDataBase {
  protected TABLE_NAME = "labook_posts";

  insert = async (post: Post) => {
    try {
      await this.connection(this.TABLE_NAME).insert(post);
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro ao criar o post!");
      }
    }
  };
}
