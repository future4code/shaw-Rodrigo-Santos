1a) Sim, concordo, pois números têm combinações limitadas, strings podem gerar mais combinações

2a) O código acima faz a conexção com o BD e após isso cria uma const que cria um usuário e então o insere no BD

b) 
CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
)

3a) A linhas "as string" está ali para transformar a "senha" para string idenpendete do que o admin colocar como chave

