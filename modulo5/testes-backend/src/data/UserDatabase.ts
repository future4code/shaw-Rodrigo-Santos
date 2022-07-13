import BaseDataBase from "./BaseDatabase";
import { User } from "../model/User";
import { CustomError } from "../errors/CustomError";

export class UserDatabase extends BaseDataBase {
  protected tableName: string = "User_Arq";

  private toModel(dbModel?: any): User | undefined {
    return (
      dbModel &&
      new User(
        dbModel.id,
        dbModel.name,
        dbModel.email,
        dbModel.password,
        dbModel.role
      )
    );
  }

  public async createUser(user: User): Promise<void> {
    try {
      await BaseDataBase.connection.raw(`
            INSERT INTO ${this.tableName} (id, name, email, password, role)
            VALUES (
            '${user.getId()}', 
            '${user.getName()}', 
            '${user.getEmail()}',
            '${user.getPassword()}', 
            '${user.getRole()}'
            )`);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getUserByEmail(email: string): Promise<User | undefined> {
    try {
      const result = await BaseDataBase.connection.raw(`
            SELECT * from ${this.tableName} WHERE email = '${email}'
         `);
      return this.toModel(result[0][0]);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getUserById(id: string): Promise<User | undefined> {
    try {
      const result = await BaseDataBase.connection.raw(`
            SELECT * from ${this.tableName} WHERE id = '${id}'
         `);
      return this.toModel(result[0][0]);
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

/*   public async getUserById(id: string) {
    const user = await this.userDatabase.getUserById(id);

    if (!user) {
      throw new CustomError(404, "User not found");
    }

    return {
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      role: user.getRole(),
    };
  } */

  public async getAllUsers(): Promise<User[]> {
    try {
      const result = await BaseDataBase.connection.raw(`
            SELECT * from ${this.tableName}
         `);
      return result[0].map((res: any) => {
        return this.toModel(res);
      });
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}

export default new UserDatabase();
