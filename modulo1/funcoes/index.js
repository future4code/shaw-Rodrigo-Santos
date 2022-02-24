/*
Exercícios de interpretação de código

1- a) 10 e 50
b) Nada, está fatando argumento

2-a) Essa função têm a funcionalidade de transformar o texto em minúsculas e percorrer o mesmo a procura da string "cenoura"
b) i - eu gosto de cenoura TRUE
ii - cenoura é bom para a vista TRUE
iii - cenouras crescem na terra FALSE

*/

//Exercícios de escrita de código

//1a)

function fraseA (){
    console.log("Eu sou Rodrigo, tenho 32 anos, moro em Belo Horizonte e sou estudante.")
}

fraseA()

//b)

function frase (nome, idade, endereço, profissao){
    
    return `Eu sou ${nome} tenho ${idade} anos, moro em ${endereço} e sou ${profissao}.`
}

console.log(frase("Rodrigo ", 32, "BH ", "estudante "))

//2- a)

function soma (n1, n2){

    return n1 + n2
}
console.log(soma(20, 30))

//2b)

const a = 10
const b = 20
function maiorMenor (n1, n2){
    
    return n1>n2
}

console.log(maiorMenor(a, b))

//2c)

const a1 = 10
const b1 = 5

function comparar (n1){
    
    return n1%2 === 0
}

console.log(comparar(a1))
console.log(comparar(b1))

//2d)

function contar (f1){

    console.log(f1.length, f1.toUpperCase())
    
}

contar("É Galooooooo doioooodoooooo !!!!!!!!!!!!")

//3

function soma(n1, n2){
    return n1 + n2
}

function subtracao(n1, n2){
    return n1 - n2
}

function multiplicacao(n1, n2){
    return n1 * n2
}

function divisao(n1, n2){
    return n1/n2
}

const numero1 = Number(prompt("Me dê um número"))
const numero2 = Number(prompt("Me dê outro número"))

console.log("SOMA: ",soma(numero1, numero2))
console.log("SUBTRAÇÃO: ",subtracao(numero1, numero2))
console.log("DIVISÃO: ",divisao(numero1, numero2))
console.log("MULTIPLICAÇÃO: ",multiplicacao(numero1, numero2))

