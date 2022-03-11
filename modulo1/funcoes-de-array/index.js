//Exercícios de interpretação de código

/*
1- Será impresso: 
{ nome: "Amanda Rangel", apelido: "Mandi" }, 0, array(3) e etc

2- ['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']
3- ['Mandi', 'Laura']
*/

//Exercícios de escrita de código

const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

//1a Nomes dos dogs

const mostraPets = pets.map((pet) => {
    console.log(pet.nome);
})

//1b Filtrar os salsicha

const filtraSalsicha = pets.filter((pet) => {
    return pet.raca === "Salsicha"
})
console.log(filtraSalsicha);

//1c Crie novo Array com mensagem para todos os poodles.

const filtraPoodle = pets.filter((pet) => {
    return pet.raca === "Poodle"
}).map((pet) => { console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`); })

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

//2a Apenas o nome de cada item

const nomeProdutos = produtos.map((produto) => {
    console.log(produto.nome);
})

//2b Crie um array com um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

let nomePrecoDesconto = produtos.filter((produto) => {
    produto.preco = produto.preco * 0.95
    return produto.preco
}).filter((produto) => { return produto.nome }).map((produto) => { console.log(produto.nome, produto.preco); })

/* resolucao Mina
const desconto = produtos.map((produto) => {
    return {
        nomeProduto: produto.nome.toLocaleUpperCase()
        PrecoProduto: (produto.preco * 0.95).toFixed(2)
    }
})
console.log(desconto);
*/

//2c Filtar Bebidas

let filtrarBebidas = produtos.filter((produto) => {
    return produto.categoria === "Bebidas"
})
console.log(filtrarBebidas);

//2d Filtar Ypê

let filtarYpe = produtos.filter((produto) => {
    if (produto.nome.includes("Ypê"))
        return produto.nome
})
console.log(filtarYpe);

//2e Crie novo array em que cada item é uma frase: 

let filtaEscreveYpe = produtos.filter((produto) => {
    if (produto.nome.includes("Ypê"))
        return produto.nome
}).map((produto) => { console.log(`Compre ${produto.nome} por ${produto.preco}`); })

//🏅  Desafios
/*
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]

//1a Crie novo arrray com pokemons em ordem alfabetica

let pokeAlfabeticos = pokemons.filter((pokemon) => {

    return pokemon.nome
})

pokeAlfabeticos.sort(function (a, b) {

    return (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0);
});

console.log(pokeAlfabeticos)
*/