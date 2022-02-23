/*

Exercícios de interpretação de código

1- Esse código é um loop que irá percorrer valores até menor que 5 repetindo uma soma de um em um somando valor + indice: 1+2+3+4
2a) 19, 21, 23, 25, 27, 30
b) 
3)
*
**
***
****

x

//Exercícios de escrita de código

//1
let bichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"))
let index = 0
let lista = []


if (bichinhos === 0) {
    console.log("Que pena! Você pode adotar um pet!");

} else if (bichinhos > 0)
    while (index < bichinhos) {
        nomes = (prompt("Legal, qual o nome dele?"));
        index++
        lista.push(nomes)
    }
    console.log(`${lista}`);

}
*/

//2

//2a)
console.log("2a)");

let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]


for (let index = 0; index < arrayOriginal.length; index++) {
    console.log(arrayOriginal[index])

}

//b)
console.log("2b)");

for (let index = 0; index < arrayOriginal.length; index++) {
    console.log(arrayOriginal[index] / 10)

}

//c
console.log("2c)");

function pares(array) {
    let novoArray = []
    for (let numeros of array) {
        if (numeros % 2 === 0) {
            novoArray.push(numeros)
        }

    }
    console.log(novoArray);
}
pares(arrayOriginal)

//d)

console.log("2d)");
/* criar um array de strings que retorne a mensagem:

"O elemento do índex i é: numero"

imprima


function indice(array) {
    let novoArray = []
    for (let posicao = 0; posicao < array.length; posicao++) {
        if (array[i] > maiorNumero) {
            maiorNumero = arrayOriginal[i]
    }
    console.log(novoArray);


}
indice(arrayOriginal)
*/



//e) 

console.log("2e)");

let maiorNumero = 0
let valorMinimo = 0

function encontrarMaior(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maiorNumero) {
            maiorNumero = arrayOriginal[i]
        }
    } console.log(`O maior número é ${maiorNumero}`);

}
encontrarMaior(arrayOriginal)