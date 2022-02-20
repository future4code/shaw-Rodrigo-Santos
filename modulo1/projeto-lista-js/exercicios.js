// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = prompt("Me dê a altura do retÂngulo:")
  const largura = prompt("Me dê a altura do largura:")
  const calculo = altura*largura

  console.log(calculo);

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Ano atual?")
  const anoNascimento = prompt("Ano de nascimento?")
  const idade = anoAtual - anoNascimento

  console.log(idade);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
 
  return  (peso/(altura*altura))

}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("Qual seu nome?")
  const idade = prompt("Qual a sua idade?")
  const email = prompt("Qual seu email?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`);
}



// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("Qual sua cor favorita número 1?")
  const cor2 = prompt("Qual sua cor favorita número 2?")
  const cor3 = prompt("Qual sua cor favorita número 3?")

  console.log([cor1, cor2, cor3]);

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
 
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  return custo/valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  
  return string1.length >= string2.length
  

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  return array[array.length - 1];
  
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  let a = array.length -1
  let b = array[0]
  let c = array[a]
  array[0] = c
  array[a] = b

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  let minuscula1 = string1.toLowerCase()
  let minuscula2 = string2.toLowerCase()

  return minuscula1 === minuscula2

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

  const anoAtual_ = prompt("Qual é o ano corrente?")
  const anoNascimento_ = prompt("Qual seu ano de nascimento?")
  const anoEmissaoID = prompt("Qual o ano de emissão da sua Carteira de Identidade?")
  const idade_ = anoAtual_ - anoNascimento_
  const validadeCarteiraID = anoAtual_ - anoEmissaoID

  if (idade_ <= 20 && validadeCarteiraID >= 5) {
    console.log(true);

  } else if (idade_ > 20  && idade_ <= 50 && validadeCarteiraID >= 10) {
    console.log(true);

  } else if (idade_ >50 && validadeCarteiraID >= 15) {
    console.log(true);

  } else {
    console.log(false)
  } 

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
/*
 receba um ano
 retorne um booleano true ou false que indica se o ano é bissexto
 anos bissextos;

 multiplos de 400
 multiplos de 4, exceto se for multiplo de 100 mas naão de 400
 não são bissextos todos os outros anos

  */

  return (0 == ano % 4) && (0 != ano % 100) || (0 == ano % 400)
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
 
  const deMaior = prompt("Você tem mais de 18 anos?")
  const ensinoMedio = prompt("Você possui ensino médio completo?")
  const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  "sim" == true
  "nao" == false

   let condicoes = (deMaior == "sim" && ensinoMedio == "sim" && disponibilidade == "sim")

   console.log(condicoes);
}  