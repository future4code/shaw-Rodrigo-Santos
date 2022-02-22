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

//1

let podeDirigir = Number(prompt("Quantos anos você tem?"))

if (podeDirigir >= 18) {
    console.log("Você pode dirigir");  
} else {
    console.log("Você não pode dirigir."); 
}

//2
const qualTurnoEstuda = prompt("Qual turno você estuda? Responda com M (matutino) ou V (Vespertino) ou N (Noturno)")

if (qualTurnoEstuda == "M") {
    console.log("Bom Dia!");
}else if(qualTurnoEstuda == "V"){
    console.log("Boa Tarde!");  
} else {
    console.log("Boa Noite!");
    
}

//3
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

//4
const generoFilme = prompt("Qual o generô do filme?")
const precoIngresso = Number(prompt("Qual o preço do ingresso?"))

if (generoFilme == "Fantasia" && precoIngresso <= 15) {
    console.log("Bom filme!");
} else {
    console.log("Escolha outro filme :(");
}

//🏅  Desafios

//1

const generoFilme2 = prompt("Qual o generô do filme?")
const precoIngresso2 = Number(prompt("Qual o preço do ingresso?"))

if (generoFilme2 == "Fantasia" && precoIngresso2 <= 15) {
    lanche = prompt("Qual será seu lanchinho?")
    console.log("Bom filme!");
    console.log(`Aproveite o seu ${lanche}` );
} else {
    console.log("Escolha outro filme :(");
}

//2

/*
PERGUNTAR AO USUARIO
NOME COMPLETO 

TIPO DE JOGO: 
IN indica internacional; e DO indica doméstico;

ETAPA DO JOGO: 
SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final

CATEGORIA:
1, 2, 3 ou 4;

QUANTIDADE DE INGRESSOS

USAR O PROMPT
DEVE IMPRIMIR TUDO ISSO ACIMA MAIS
VALOR DO INGRESSO 
VALOR TOTAL
VALOR DO DOMÉSTICO É O MESMO DO IN PORÉM MULTIPLICADO PELO DOLAR 4,10
EXEMPLO:

---Dados da compra--- 
Nome do cliente:  Soter Padua 
Tipo do jogo:  Nacional 
Etapa do jogo:  Final 
Categoria:  1 
Quantidade de Ingressos:  10 ingressos 
---Valores--- 
Valor do ingresso:  R$ 1980
Valor total:  R$ 19800
X

---Dados da compra--- 
Nome do cliente:  Soter Padua 
Tipo do jogo:  Internacional 
Etapa do jogo:  Final 
Categoria:  1 
Quantidade de Ingressos:  10 ingressos 
---Valores--- 
Valor do ingresso:  U$ 482.92682926829275
Valor total:  U$ 4829.2682926829275

---Dados da compra--- 
Nome do cliente:  Soter Padua 
Tipo do jogo:  Internacional 
Etapa do jogo:  Final 
Categoria:  1 
Quantidade de Ingressos:  10 ingressos 
---Valores--- 
Valor do ingresso:  U$ 482.92682926829275
Valor total:  U$ 4829.2682926829275


const nomeCompleto = prompt("Qual seu nome completo?")
const tipoJogo = prompt("Qual o tipo do jogo? Caso seja internacional digite IN, caso seja doméstico digite DO.")
const etapaJogo = prompt("Qual a etapa do jogo? SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final")
const categoriaI = prompt("Qual a categoria do ingreso? 1, 2, 3 ou 4;")
const quantidadeI = prompt("Qual a quantidade de ingressos?")
let valorIngresso
*/





