/* 1a) Acessamos os parêmetros através do comando npm start (nesse caso ele acessa o script criado no package.json) */

//1b)
const nome = process.argv[2]
const idade = Number(process.argv[3])

console.log(`Olá, ${nome}! Você tem ${idade} anos.`);

console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}`);