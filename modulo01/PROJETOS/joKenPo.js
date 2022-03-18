const prompt = require('prompt-sync')();
console.clear();

// O Jokenpô é o popular jogo do "pedra, papel e tesoura". A premissa é simples, você tem 3 elementos para escolher, e cada um deles vence de um, e perde para o outro.

const gameOption = ['papel','pedra','tesoura']
let player,bot,rodadasI,scoreP = 0,scoreB = 0,continua


do { 

  do{ 
rodadasI = prompt('Quantas rodadas quer jogar?(min: 1; max: 10)')
  console.clear();
  }while(isNaN(rodadasI) || rodadasI == 0 || rodadasI > 10)

  
   for(let i = 1; i <= rodadasI; i++) {
    console.log(`Rodada ${i} de ${rodadasI} rodada(s)`)
    player = prompt('Esolha: | Papel | Pedra | Tesoura |------>').toLowerCase();

    while(player != 'papel' && player != 'pedra' && player != 'tesoura'){ 
    console.clear();
    console.log(`Rodada ${i} de ${rodadasI} rodada(s)`)
    player = prompt('Esolha: | Papel | Pedra | Tesoura |------>').toLowerCase();

    console.clear();
    
  } 
    console.clear();
    
    switch (player) {
      case 'papel': player = 0;
      break;
      case 'pedra': player = 1;
      break;
      case 'tesoura': player =2;
      break;
    }
  
    bot = Math.floor(Math.random()*3);

    console.log(`Rodada ${i} de ${rodadasI} rodada(s)`)
    
    if ((gameOption[player] == 'papel' && gameOption[bot] == 'pedra') || (gameOption[player] == 'pedra' && gameOption[bot] == 'tesoura') || (gameOption[player] == 'tesoura' && gameOption[bot] == 'papel')) {
      scoreP++;
      console.log();
      console.log(`${scoreP} PLAYER | ${scoreB} CPU`)
      console.log();
      console.log(`player: ${gameOption[player]}---X--${gameOption[bot]} (CPU)`);
      console.log(`Você ganhou`);
     
    
    } else if ((gameOption[player] == 'papel' && gameOption[bot] == 'tesoura') || (gameOption[player] == "tesoura" && gameOption[bot] == 'pedra') || (gameOption[player] == 'pedra' && gameOption[bot] == 'papel')) {
      scoreB++;
      console.log();
      console.log(`${scoreP} PLAYER | ${scoreB} CPU`)
      console.log();
      console.log(`player: ${gameOption[player]}---X--${gameOption[bot]} (CPU)`);
      console.log(`Você perdeu`);
      

    } else if ((gameOption[player] == 'papel' && gameOption[bot] == 'papel') || (gameOption[player] == 'pedra' && gameOption[bot] == 'pedra') || (gameOption[player] == 'tesoura' && gameOption[bot] == 'tesoura')){
      console.log();
      console.log(`${scoreP} PLAYER | ${scoreB} CPU`)
      console.log();
      console.log(`player: ${gameOption[player]}---X--${gameOption[bot]} (CPU)`);
      console.log('Empate');

    }
    continua = prompt();
    console.clear();
  }
  console.log();
  if (scoreP > scoreB) {
    console.log("Você venceu a máquina!")
  } else if (scoreP < scoreB) {
    console.log('Você perdeu para a máquina!')
  } else {console.log('Jogo Empatado!')}

  console.log();

  continua = prompt('Deseja jogar novamente (s/n):').toLowerCase();
  console.clear();

}while(continua == 'sim' || continua == 's')