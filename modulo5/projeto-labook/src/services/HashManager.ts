import * as bcrypt from "bcryptjs"

export class HashManager {
    //Faz a encriptação da senha, precisa inserir numero de rounds por .env
    public async hash(text: string): Promise<string>{
        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcrypt.genSalt(rounds)
        return bcrypt.hash(text, salt)
    }

    //Compara a senha com o usuário inseriu e a que temos no banco de dados
    public async compare(text: string, hash: string): Promise<boolean>{
        return bcrypt.compare(text, hash)
    }
}