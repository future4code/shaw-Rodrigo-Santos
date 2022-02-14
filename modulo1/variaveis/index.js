/* 

**Exercícios de interpretação de código**

1-

10
10 5

2- 

10 10 10

3 - 

let horasTrabalhadasPorDia = prompt("Quantas horas você trabalha por dia?")
let quantoRecebePorDia = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${quantoRecebePorDia/horasTrabalhadasPorDia} por hora`)

*/ 

//**Exercícios de escrita de código**

//1

const nome = prompt("Qual seu nome?") 
const idade = prompt("Qual a sua idade?")

console.log ("Olá", nome, ",você tem", idade, "anos.")

console.log (typeof nome, typeof idade)


const newLocal = true

/*

d) O console apresentou um erro pois não foi atribuído nenhum valor as variáveis

f) As duas variáveis foram identificadas como string pois foram dados inseridos pelo usuário 

*/

//2 

SIM = newLocal

let repostaEstudar = prompt("Você gosta de estudar?")
let repostaBatata = prompt("Você gosta de batata?")
let repostaAndar = prompt("Você gosta de andar a pé?")

console.log("Você gosta de estudar? - ", repostaEstudar)
console.log("Você gosta de batata? - ", repostaBatata)
console.log("Você gosta de andar a pé? - ", repostaAndar)

//3

let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores

c = a
a = b
b = c

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10

//**Desafios**

let primeiroNumero = Number (prompt("Digite um número para mim"))
let segundoNumero = Number( prompt("Digite outro número para mim"))

let somaDosNumeros = primeiroNumero + segundoNumero
let multiplicacaoDosNumeros = primeiroNumero * segundoNumero

console.log("O primeiro número somado ao segundo número resulta em:", somaDosNumeros, "." )
console.log("O primeiro número multiplicado pelo segundo número resulta em:", multiplicacaoDosNumeros, "." )

/*




