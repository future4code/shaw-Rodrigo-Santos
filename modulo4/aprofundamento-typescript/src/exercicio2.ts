//a)

function obterEstatisticas(numeros: Array<number>) {
  const numerosOrdenados: Array<number> = numeros.sort((a, b) => a - b);

  let soma: number = 0;

  for (let num of numeros) {
    soma += num;
  }

  const estatisticas: Array<number> | {} = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };
  return estatisticas;
}

console.log(obterEstatisticas([21, 18, 65, 44, 15, 18]));

//b) Array<number> para um array de números, number para um número apenas, {} para o objeto

//c)

type AmostraDeDados = {
  numeros: Array<number>;

  obterEstatisticas: (numeros: Array<number>) => {};
};

const amostraDeIdades: AmostraDeDados = {
  numeros: [21, 18, 65, 44, 15, 18],
  

  obterEstatisticas: (numeros): object => {
    const numerosOrdenados: Array<number> = numeros.sort((a, b) => a - b);

    let soma: number = 0;

    for (let num of numeros) {
      soma += num;
    }

    const estatisticas: Array<number> | {} = {
      maior: numerosOrdenados[numeros.length - 1],
      menor: numerosOrdenados[0],
      media: soma / numeros.length,
    };
    return estatisticas;
  },
};
console.log(amostraDeIdades.obterEstatisticas(amostraDeIdades.numeros))

