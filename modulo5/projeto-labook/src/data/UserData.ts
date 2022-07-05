import { BaseDataBase } from "./BaseDataBase";

export class UserData extends BaseDataBase {
  protected TABLE_NAME = "labook_users"

  findByEmail = async (email: string) => {
    try {
      const queryResult = await this.connection(this.TABLE_NAME)
    } catch (error) {
      throw new Error("");
      
    }
  }
    
}