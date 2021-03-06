// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((a, b) => a - b)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const par = x => x % 2 === 0
    const pares = array.filter(par)

    return pares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {

    const par = x => x % 2 === 0

    const pares = array.filter(par)

    var elevado = pares.map(function (item) {
        return Math.pow(item, 2)
    })

    return elevado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    var maior = Math.max.apply(null, array);
    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    const objeto = {
        maiorNumero: Math.max(num1, num2),

        maiorDivisivelPorMenor: (Math.max(num1, num2) % Math.min(num1, num2)) === 0,

        diferenca: Math.max(num1, num2) - Math.min(num1, num2)
    }
    return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

    let numerosPares = [];
    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i);
        }
    }
    return numerosPares;

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if (ladoA == ladoB && ladoA == ladoC) {
        return "Equilátero"
    } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
        return "Isósceles"
    } else {
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {

    let arrayOrdenado = array.sort((a, b) => a - b)
    let segundoMaior = arrayOrdenado[(arrayOrdenado.length - 2)]
    let segundoMenor = arrayOrdenado[1]

    return [segundoMaior, segundoMenor]

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(', ')}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

    const novaPessoa = {
        ...pessoa,
        nome: "ANÔNIMO"
    }

    return novaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

    const autorizados = pessoas.filter((pessoa) => {
        return pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade <= 60
    })

    return autorizados
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

    const naoAutorizados = pessoas.filter((pessoa) => {
        return pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade > 60
    })

    return naoAutorizados
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

    contas.forEach((conta) => {
        let totalDeCompras = 0

        conta.compras.forEach((compra) => {
            totalDeCompras = totalDeCompras + compra
        })

        conta.saldoTotal = conta.saldoTotal - totalDeCompras
        conta.compras = []

    });
    return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

    consultas.sort(function (a, b) {
        if (a.nome < b.nome) {
            return -1;
        } else {
            return true;
        }
    });
    return consultas

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}