//Exercícios de interpretação de código*******
/*
//1a)

Matheus Nachtergaele
Virginia Cavendish
canal: "Globo", horario: "14h"

2a)

{nome: 'Juca', idade: 3, raca: 'SRD'}
{nome: 'Juba', idade: 3, raca: 'SRD'}
{nome: 'Jubo', idade: 3, raca: 'SRD'}

b) 

Os três pontos fazem um espelhamento

3a)

false
undefined

b)

Você criou uma função que retornava um "objeto" e acessava uma "propriedade"
Após isso criou um objeto "pessoa" com dados como nome
No console.log acessou as propiedades do objeto; no primeiro você recebeu false como resposta no segundo perguntou uma propriedade que não existia

*/

//Exercícios de escrita de código*******

//1a)********

const pessoa = {
    nome: "Rodrigo",
    apelidos: ["Podre ", "Panda ", "Pods "]
}

const nomeDaPessoa = pessoa.nome
const apelidosDaPessoa = pessoa.apelidos

console.log(`Eu sou ${nomeDaPessoa}, mas pode me chamar de: ${apelidosDaPessoa}`);

//b)*******

const novaPessoa = {
    ...pessoa,
    apelidos: ["Rodriguinho ", "Emo ", "Tuco " ]
}

const novosApelidos = novaPessoa.apelidos
console.log(`Eu sou ${nomeDaPessoa}, mas pode me chamar de: ${novosApelidos}`);

//2a)b)******
const pessoa1 = {
    nome: "João Gordo", 
    idade:57,
    profissao: "Cantor" 
}
const pessoa2 = {
    nome: "Joey Ramone", 
    idade:52,
    profissao: "Singer" 
}

function imprimirInfos(pers1) {
    resultadoSomado = [pers1.nome, pers1.nome.length, pers1.idade, pers1.profissao, pers1.profissao.length]
    return resultadoSomado
}

console.log(imprimirInfos(pessoa1));
console.log(imprimirInfos(pessoa2));

//3)***********

const carrinho = []

const frutas = {
    nome: "Banana",
    disponibilidade: true
}
const frutas2 = {
    ...frutas, 
    nome: "Pera",
}   
const frutas3 = {
    ...frutas,
    nome: "Maçã"
}

function adicionarNoArray(objeto){
    carrinho.push(objeto)
}

adicionarNoArray(frutas)
adicionarNoArray(frutas2)
adicionarNoArray(frutas3)

console.log(carrinho);

//🏅  Desafios**********

//1**********
/*
const usuario ={
    nome: "Keith Richards",
    idade: 200,
    profissão: "Guitarrista"
}

console.log(usuario);
console.log(typeof usuario);


function nomeUsuario() {
   
    const nome = prompt("Qual seu nome?")
    const idade = Number(prompt("Qual a sua idade?"))
    const profissao = prompt("Qual a sua profissão?")
    
    let dados = 

    console.log(dados);
}
//2********* 
/*
const filme1 ={
    anoDeLancamento: 1971,
    nome: "Laranja Mecânica"
}
const filme2 ={
    anoDeLancamento: 1980,
    nome: "O Iluminado"
}
/*
 O primeiro filme foi lançado antes do segundo? false
O primeiro filme foi lançado no mesmo ano do segundo? true
*/