//1a) Ao setar como string ele me proibe de atribuir um número a variável: Type 'number' is not assignable to type 'string'.
// let minhaString: string = 10;
//b) Para uma váriável aceitar mais de um tipo é preciso do sinal | ele é um sinal de OU chamamos de Unio Type
// let meuNumero: number | string = "10"
//c) 
    const person1: {nome: string, idade: number, corFavorita: string} ={
        nome: "Rodrigo",
        idade: 32,
        corFavorita: "Vermelho"
    }

    enum CorFavorita {
        VERMELHO = "Vermelho",
        LARANJA = "Laranja",
        AMARELO = "Amarelo",
        VERDE = "Verde",
        AZUL = "Azul",
        ANIL = "Anil",
        VIOLETA = "Violeta"
 
     }

    type Pessoa = {
        nome: string,
        idade: number,
        corFavorita: string
    }

    const person2: Pessoa = {
        nome: "Daniela",
        idade: 35,
        corFavorita: CorFavorita.AZUL
    }

    const person3: Pessoa = {
        nome: "Pipoca",
        idade: 5,
        corFavorita: CorFavorita.VIOLETA
    }

    console.table(person1);
    console.table(person2);
    console.table(person3);
    

  

