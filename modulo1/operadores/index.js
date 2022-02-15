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

//🏅  Desafios

/*

1 -

a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.

b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também

c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também

d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter

*/

//a)

let fahParaKelvin = (77 - 32) * (5/9) + 273.15
console.log (fahParaKelvin, " K")

//b)

let celsiuParaFah = (80) * (9/5) + 32
console.log(celsiuParaFah, " ºF")

//c)

let celsiuParaFahNovo = 30 * (9/5) + 32 

let fahParaKelvinNovo = (celsiuParaFahNovo - 32) * (5/9) + 273.15

console.log (celsiuParaFahNovo, " ºF", fahParaKelvinNovo, " K" )

//d)

let grausCelsius = Number(prompt("Digite um valor em graus celsius que deseja converter: "))

let celsiuParaFahNovamente = grausCelsius * (9/5) + 32 

let fahParaKelvinNovamente = (celsiuParaFahNovamente - 32) * (5/9) + 273.15

console.log(celsiuParaFahNovamente, " ºF", fahParaKelvinNovamente, " K" )

// 2-

/* 
Fazer um programa k/h a R$0.05
Calcule e mostre o valor de uma residencia que gastou 280 k/h
altere para receber desconto de 15%
*/

let quilowattHora = 0.05
console.log(280*quilowattHora, "Valor sem desconto")
console.log((280*quilowattHora)*0.8, "Valor com desconto de 15%")

//3-

/*  




*/ 

