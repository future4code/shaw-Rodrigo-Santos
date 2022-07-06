import UserData from "../data/UserData";
import { User } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { loginInputDTO } from "../types/loginInputDTO";
import { signupInputDTO } from "../types/signupInputDTO";

export class UserBusiness {
  //injeção de dependência, assim obrigamos a entregar os 4 objetos
  constructor(
    private userData: UserData,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) {}

  signup = async (input: signupInputDTO) => {
    //validação dos dados
    const { name, email, password } = input;
    if (!email || !name || !password) {
      throw new Error("Campos inválidos!");
    }

    //conferir se o usuários existe
    const registeredUser = await this.userData.findByEmail(email);
    if (registeredUser) {
      throw new Error("Email já cadastrado");
    }

    //fazer uma id pro usuário
    const id = this.idGenerator.generate();

    //hashear o password (criptografar)
    const hashedPassword = await this.hashManager.hash(password);

    //criar o usuário no banco
    const user = new User(id, name, email, hashedPassword);
    await this.userData.insert(user);

    //criar o token
    const token = this.authenticator.generateToken({ id });

    //retornar o token
    return token;
  };

  login = async (input: loginInputDTO) => {
    //validação dos dados
    const { email, password } = input;
    if (!email || !password) {
      throw new Error("Campos inválidos!");
    }

    //conferir se o usuários existe
    const registeredUserLogin = await this.userData.findByEmail(email);
    if (!registeredUserLogin) {
      throw new Error("Email já cadastrado");
    }

    //fazer uma id pro usuário
    const id = this.idGenerator.generate();

    //hashear o password (criptografar)
    const hashedPassword = await this.hashManager.hash(password);

    //verificar se o password está correto
    const isPasswordCorrect = await this.hashManager.compare(
      password,
      registeredUserLogin.password
    );
    if (!isPasswordCorrect) {
      throw new Error("Senha incorreta");
    }

    //criar o token
    const token = this.authenticator.generateToken({ id });

    //retornar o token
    return token;
  };
}
