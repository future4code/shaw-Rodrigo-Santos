/* 
**Exercícios de interpretação de código**

1 - 

a. undefined

b. null

c. 11

d. 3

e.  Array(11)
    0: 3
    1: 19
    2: 5
    3: 6
    4: 7
    5: 8
    6: 9
    7: 10
    8: 11
    9: 12
    10: 13
    length: 11

f. 9

2- C

SUBI NUM ÔNIBUS EM MIRROCOS 27
*/

//Exercícios de escrita de código 

//1
let nomeDoUsuario = prompt("Qual seu nome?")
let emailDoUsuario = prompt("Qual seu e-mail?")
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

//2
//A)
const comidasFavoritas = ["strogonoff", "hamburguer", "pizza", "chocolate", "churrasco" ]
console.log(comidasFavoritas)
//B)
console.log("Essas são as minhas comidas preferidas: ")
comidasFavoritas.forEach(comidasFavoritas => { console.log(comidasFavoritas)});
//C)
const comidaDoUsuario = prompt("Qual a sua comida favorita?")
const comidaDoUsuarioLower = comidaDoUsuario.toLowerCase()
comidasFavoritas[1] = comidaDoUsuarioLower
console.log (comidasFavoritas)


//3
//A)
let listaDeTarefas = []
//B) e C)
const primeiraTrefa = prompt("Me fale uma tarefa que você precisa realizar no dia")
const segundaTarefa = prompt("Me fale outra tarefa que você precisa realizar no dia")
const terceiraTarefa = prompt("Me fale mais uma tarefa que você precisa realizar no dia")
listaDeTarefas.push(primeiraTrefa, segundaTarefa, terceiraTarefa)
console.log("Três tarefas que preciso realizar no dia: ", listaDeTarefas)
//D), E) e F)
let indiceRealizado = prompt("Me informe uma tarefa que você já realizou hoje: 0, 1 ou 2: ")
listaDeTarefas.splice(indiceRealizado, 1)
console.log(listaDeTarefas)

//🏅  Desafios

//1-
let fraseUsuario = prompt("Me diga uma frase especial")
let lista = fraseUsuario.split(" ")
console.log(lista)

//2-

let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log(frutas.length)
let indiceDaBanana = frutas.indexOf("Abacaxi")
console.log(indiceDaBanana)