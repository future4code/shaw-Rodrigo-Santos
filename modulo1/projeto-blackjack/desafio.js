/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


//IMPRIME O RESULTADO FINAL
function imprimeResultadoFinal(user, PC) {
   if (gameOver) {
      //let the dealer take cards
      while (
         dealerScore < playerScore &&
         playerScore <= 21 &&
         dealerScore <= 21
      ) {
         dealerCards.push(getNextCard());
         updateScores();
      }
   }
   if (user > 21) {
      playerWon = false;
      gameOver = true;
   } else if (PC > 21) {
      playerWon = true;
      gameOver = true;
   } else if (gameOver) {
      if (user > PC) {
         playerWon = true;
      } else {
         playerWon = false;
      }
   }

   //PEGA TODAS AS CARTAS DE UM JOGADOR E CONVERT EM STRING
   function cartasParaString(jogador) { }

   //GERA CARTAS INICIAIS PARA UM JOGADOR
   function cartasIniciais(jogador) { }

   //adiciona uma carta para um jogador
   function adicionaUmaCarta(jogador) { }

   alert("Boas vindas ao jogo de Blackjack!");

   let jogandoBlackJack = true

   while (jogandoBlackJack) {
      if (confirm("Quer iniciar uma nova rodada?")) {

      } else {
         alert("O jogo acabou")
         jogandoBlackJack = false

      }

   }



