/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 */

console.log("Boas vindas ao jogo de Blackjack!");

if (confirm("Quer iniciar uma nova rodada?")) {
   console.log("Começar nova rodada!!");
   let jogadorCarta1 = comprarCarta()
   let jogadorCarta2 = comprarCarta()
   let pcCarta1 = comprarCarta()
   let pcCarta2 = comprarCarta()

   let pontosJogador = jogadorCarta1.valor + jogadorCarta2.valor
   let pontosPc = pcCarta1.valor + pcCarta2.valor

   console.log(`Usuário - cartas: ${jogadorCarta1.texto}, ${jogadorCarta2.texto} - pontuação:  ${pontosJogador}`);
   console.log(`Computador - cartas: ${pcCarta1.texto}, ${pcCarta2.texto} - pontuação: ${pontosPc}`);

   if (pontosJogador === pontosPc) {
      console.log("Empate!");

   } else if (pontosJogador > pontosPc) {
      console.log("O usuário ganhou! Obrigado Sarah Connor, a humanidade está salva!.");

   } else {
      console.log("O computador ganhou! SkyNet wins =(");

   }

} else {
   console.log("O jogo acabou =(");

}