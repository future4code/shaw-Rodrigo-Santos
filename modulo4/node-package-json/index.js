/* 1a) Acessamos os parêmetros através do comando npm start (nesse caso ele acessa o script criado no package.json) */

//1b)
/* const nome = process.argv[2]
const idade = Number(process.argv[3])

console.log(`Olá, ${nome}! Você tem ${idade} anos.`);

console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}`); */

//2)

/* const operacao = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

const calculadora = (num1, num2) => {
  switch (operacao) {
    case "add":
      return num1 + num2
      break;
    case "sub":
        return num1 - num2;
      break;
    case "mult":
        return num1 * num2;
      break;
    case "div":
        return num1 / num2;
      break;

    default:
      break;
  }
};

console.log(calculadora(num1, num2)); */

//3)

/* const tarefa = process.argv[2]

const tarefas = ["Lavar a louça", "Limpar a casa"]

const adicionaTarefas = tarefas.push(`${tarefa}`)

console.log(tarefas); */

//4)
