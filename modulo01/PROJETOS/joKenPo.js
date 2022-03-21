const prompt = require("prompt-sync")();
console.clear();

// O Jokenpô é o popular jogo do "pedra, papel e tesoura". A premissa é simples, você tem 3 elementos para escolher, e cada um deles vence de um, e perde para o outro.

const gameOption = ["papel", "pedra", "tesoura"];
let continua;

//RESPONSÁVEL POR REINICALIZAR O JOGO CASO SEJA REQUISITADO.
do {
  let player,
    bot,
    rodadasI,
    scoreP = 0, // Contador de pontos do usuário
    scoreB = 0, // Contador de pontos do computador
    scoreD = 0; // Contador de Empates

  do {
    rodadasI = prompt("Quantas rodadas quer jogar?(min: 1; max: 10):");
    console.clear();
  } while (isNaN(rodadasI) || rodadasI <= 0 || rodadasI > 10);

  // RODADAS: VAI REPETIR O JOGO DE ACORDO COM A VARIÁVEL 'rodadasI' DEFINIDA PELO USURÁRIO.
  for (let i = 1; i <= rodadasI; i++) {
    console.log(`Rodada ${i} de ${rodadasI} rodada(s)`);
    player = prompt("Esolha: | Papel | Pedra | Tesoura |------>").toLowerCase();

    while (player != "papel" && player != "pedra" && player != "tesoura") {
      console.clear();
      console.log(`Rodada ${i} de ${rodadasI} rodada(s)`);
      player = prompt(
        "Esolha: | Papel | Pedra | Tesoura |------>"
      ).toLowerCase();

      console.clear();
    }
    console.clear();
    // CONVERTER A STRING PARA NÚMEROS PARA SER USADO COM A ARRAY 'gameOption'
    switch (player) {
      case "papel":
        player = 0;
        break;
      case "pedra":
        player = 1;
        break;
      case "tesoura":
        player = 2;
        break;
    }

    bot = Math.floor(Math.random() * 3);

    console.log(`Rodada ${i} de ${rodadasI} rodada(s)`);
    // Delimitação de condições caso o usuário vença
    if (
      (gameOption[player] == "papel" && gameOption[bot] == "pedra") ||
      (gameOption[player] == "pedra" && gameOption[bot] == "tesoura") ||
      (gameOption[player] == "tesoura" && gameOption[bot] == "papel")
    ) {
      scoreP++;
      console.log();
      console.log(`${scoreP} PLAYER | ${scoreB} CPU`);
      console.log();
      console.log(
        `player: ${gameOption[player]}---X--${gameOption[bot]} (CPU)`
      );
      console.log(`Você ganhou`);
      // Delimitação de condições caso o usuário perda
    } else if (
      (gameOption[player] == "papel" && gameOption[bot] == "tesoura") ||
      (gameOption[player] == "tesoura" && gameOption[bot] == "pedra") ||
      (gameOption[player] == "pedra" && gameOption[bot] == "papel")
    ) {
      scoreB++;
      console.log();
      console.log(`${scoreP} PLAYER | ${scoreB} CPU`);
      console.log();
      console.log(
        `player: ${gameOption[player]}---X--${gameOption[bot]} (CPU)`
      );
      console.log(`Você perdeu`);
      // Delimitação de condições caso haja empate
    } else if (
      (gameOption[player] == "papel" && gameOption[bot] == "papel") ||
      (gameOption[player] == "pedra" && gameOption[bot] == "pedra") ||
      (gameOption[player] == "tesoura" && gameOption[bot] == "tesoura")
    ) {
      console.log();
      console.log(`${scoreP} PLAYER | ${scoreB} CPU`);
      console.log();
      console.log(
        `player: ${gameOption[player]}---X--${gameOption[bot]} (CPU)`
      );
      console.log("Empate");
      scoreD++;
    }
    continua = prompt();
    console.clear();
  }
  console.log();
  // DETERMINAR O VENCEDOR DO JOGO DE ACORDO COM OS PONTOS ACUMULADOS EM CADA RODADA
  if (scoreP > scoreB) {
    console.log("Você venceu a máquina!");
  } else if (scoreP < scoreB) {
    console.log("Você perdeu para a máquina!");
  } else {
    console.log("Jogo Empatado!");
  }
  console.log();
  console.log(`Vitórias: ${scoreP}\nDerrotas: ${scoreB}\nEmpates: ${scoreD}`);

  console.log();
  do {
    //VALIDAÇÃO DE ENTRADA DE DADOS
    continua = prompt("Deseja jogar novamente (s/n):").toLowerCase();
    console.clear();
  } while (
    continua != "s" &&
    continua != "sim" &&
    continua != "n" &&
    continua != "nao"  // A RESTRIÇÃO EM SIM E NÃO FOI REALIZADA AFIM DE EVITAR COMANDOS ACIDENTAIS, UMA VEZ QUE QUALQUER TECLA AUTOMATICAMENTE ENCERRARIA O PROGRAMA SE NÃO HOUVESSE RESTRIÇÃO.
  );
} while (continua == "sim" || continua == "s");


console.log('FIM DE JOGO')
