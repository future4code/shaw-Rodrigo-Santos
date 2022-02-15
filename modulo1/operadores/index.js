/* 

**Exercícios de interpretação de código**

1 - a. false
    b. false
    c. true
    d. boolean 

2 - Caro colega, aqui o problema é 
que os dados inseridos pelo usuário virão 
em forma de string e irão somar de forma errada. 
Se você colcar 10 e 12 o resutado 
impresso será 1012 e não 22.

3 - 

let primeiroNumero =  Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero

console.log(soma)

*/

// **Exercícios de escrita de código**

//1-

let suaIdade = Number(prompt("Qual a sua idade?"))
let idadeDoMelhorAmigo = Number(prompt("Qual a idade do seu melhor amigo?"))
const suaIdadeEhMaior = suaIdade > idadeDoMelhorAmigo 
const diferecaDeIdade = suaIdade - idadeDoMelhorAmigo

console.log ("Sua idade é maior do que a do seu melhor amigo?", suaIdadeEhMaior)
console.log(diferecaDeIdade)

//2-

let insiraUmPar = Number(prompt("Insira por favor um número par"))
let restoDaDivisaoPorDois = insiraUmPar % 2
console.log(restoDaDivisaoPorDois)

/* 
c) Divisão de par por 2 nunca sobra resto
d) Caso o usuário insira um número ímpar ele irá obter sempre uma divisão com resto
*/ 

//3- 

let qualEhASuaidadeEmAnos = Number(prompt("Qual é a sua idade em anos?"))
console.log ("Sua idade em meses é ", qualEhASuaidadeEmAnos * 12)
console.log ("Sua idade em dias é ", (qualEhASuaidadeEmAnos * 12) * 30)
console.log ("Sua idade em horas é ", ((qualEhASuaidadeEmAnos * 12) * 30)*24)

//4- 

let numeroPrimeiro = Number(prompt("Me fale por favor, um número"))
let numeroSegundo = Number(prompt("Me fale outro número por gentileza"))

console.log("O primeiro numero é maior que segundo? ", numeroPrimeiro > numeroSegundo)
console.log("O primeiro numero é igual ao segundo? ", numeroPrimeiro === numeroSegundo)
console.log("O primeiro numero é divisível pelo segundo? ", numeroPrimeiro % numeroSegundo == 0)
console.log("O segundo numero é divisível pelo primeiro?  ", numeroSegundo % numeroPrimeiro == 0)

//