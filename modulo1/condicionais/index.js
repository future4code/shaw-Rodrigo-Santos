/*Exercícios de interpretação de código**********

1a) O código verifica se o número digitado pelo usuário é ou não par
b)Números pares
c)Números impares

2a) O código serve para que o usuário selecione uma fruta do sacolão e informar o preço 
b) O preço da fruta Maçã é R$ 2.25
c) A Pêra sai do sistema e vira um default

3a) Criando uma variável número que pergunta ao usuário um número e transforma a reposta em number
b) Se o usuário digitar 10 a mensagem será "Esse número passou no teste". Se o usuário digitar -10 a mensagem será nula
c) Sim irá informar que mensagem não é definida caso digite algum número abaixo de 0
*/

//Exercícios de escrita de código*******************

//1***********

let podeDirigir = Number(prompt("Quantos anos você tem?"))

if (podeDirigir >= 18) {
    console.log("Você pode dirigir");
} else {
    console.log("Você não pode dirigir.");
}

//2**********

const qualTurnoEstuda = prompt("Qual turno você estuda? Responda com M (matutino) ou V (Vespertino) ou N (Noturno)")

if (qualTurnoEstuda == "M") {
    console.log("Bom Dia!");
} else if (qualTurnoEstuda == "V") {
    console.log("Boa Tarde!");
} else {
    console.log("Boa Noite!");

}

//3************

let qualTurnoEstuda2 = prompt("Qual turno você estuda? Responda com M (matutino) ou V (Vespertino) ou N (Noturno)")

switch (qualTurnoEstuda2) {
    case "M":
        console.log("Bom Dia!");
        break;
    case "V":
        console.log("Boa Tarde!");
        break;
    default:
        console.log("Boa Noite!");
        break;
}

//4*********

const generoFilme = prompt("Qual o generô do filme?")
const precoIngresso = Number(prompt("Qual o preço do ingresso?"))

if (generoFilme == "Fantasia" && precoIngresso <= 15) {
    console.log("Bom filme!");
} else {
    console.log("Escolha outro filme :(");
}

//🏅  Desafios

//1*************

const generoFilme2 = prompt("Qual o generô do filme?")
const precoIngresso2 = Number(prompt("Qual o preço do ingresso?"))

if (generoFilme2 == "Fantasia" && precoIngresso2 <= 15) {
    lanche = prompt("Qual será seu lanchinho?")
    console.log("Bom filme!");
    console.log(`Aproveite o seu ${lanche}`);
} else {
    console.log("Escolha outro filme :(");
}

//2***************

const nomeCompleto = prompt("Qual seu nome completo?")
const tipoJogo = prompt("Qual o tipo do jogo? Caso seja internacional digite IN, caso seja doméstico digite DO.")
const etapaJogo = prompt("Qual a etapa do jogo? SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final")
const categoriaI = Number(prompt("Qual a categoria do ingreso? 1, 2, 3 ou 4;"))
const quantidadeI = prompt("Qual a quantidade de ingressos?")
let valorIngresso = 0

switch (etapaJogo) {
    case "SF":
        switch (categoriaI) {
            case 1:
                valorIngresso = 1320
                break
            case 2:
                valorIngresso = 880
                break
            case 3:
                valorIngresso = 550
                break
            case 4:
                valorIngresso = 220
                break
            default:
                valorIngresso = 0
                break
        }
        break
    case "DT":
        switch (categoriaI) {
            case 1:
                valorIngresso = 660
                break
            case 2:
                valorIngresso = 440
                break
            case 3:
                valorIngresso = 330
                break
            case 4:
                valorIngresso = 170
                break
            default:
                valorIngresso = 0
                break
        }
        break
    case "FI":
        switch (categoriaI) {
            case 1:
                valorIngresso = 1980
                break
            case 2:
                valorIngresso = 1320
                break
            case 3:
                valorIngresso = 880
                break
            case 4:
                valorIngresso = 330
                break
            default:
                valorIngresso = 0
                break

        }
    default:
        break
}

if (tipoJogo === "IN") {
    valorIngresso = valorIngresso / 4.10
}

let textoDoJogo
if (textoDoJogo === "DO") {
    textoDoJogo = "Domestico"

} else {
    textoDoJogo = "Internacional"
}

let textoDaEtapa
if (textoDaEtapa === "SF") {
    textoDaEtapa = "Semi-Final"

} else if (textoDaEtapa === "DT") {
    textoDaEtapa = "Decisão de terceiro lugar"

} else {
    textoDaEtapa = "Final"
}

let valorQuantidade = valorIngresso * quantidadeI

console.log("---Dados da compra---")
console.log(`Nome do cliente: ${nomeCompleto}`);
console.log(`Tipo do jogo: ${textoDoJogo}`);
console.log(`Etapa do jogo: ${textoDaEtapa}`);
console.log(`Categoria: ${categoriaI}`);
console.log(`Quantidade de Ingressos: ${quantidadeI}`);
console.log(`---Valores--- `);
console.log(`Valor do ingresso: ${valorIngresso}`);
console.log(` Valor total: ${valorQuantidade}`);




