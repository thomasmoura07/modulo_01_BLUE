/*Calculadora de Dano - Escreva um programa que receba dois valores digitados pelo usuário: quantidade de vida de um monstro (entre 10 e 50) e valor do ataque do jogador por turno (entre 5 e 10). Baseado nos valores digitados, exiba a quantidade de turnos que o jogador irá demorar para conseguir derrotar o monstro (o jogador irá derrotar o monstro em 8 turnos).*/

const prompt = require("prompt-sync")();

let monsterLife,
  attackPoints,
  turnos,
  v = false;

do {
  monsterLife = +prompt(
    "Insira um valor entre 10 e 50, que será a quantidade de vida do monstro: "
  );
  v = false;
  if (monsterLife < 10 || monsterLife > 50) {
    console.log("Digite um valor válido (entre 10 e 50)");
    v = true;
  }
} while (v);

do {
  attackPoints = +prompt(
    "Insira um valor entre 5 e 10 para ser quantidade de dano do personagem(por turno): "
  );
  v = false;
  if (attackPoints < 5 || attackPoints > 10) {
    console.log("Digite um valor válido (entre 5 e 10)");
    v = true;
  }
} while (v);
turnos = Math.ceil(monsterLife / attackPoints);
console.log(
  `Com um ataque de ${attackPoints} pontos, atacando um monstro de ${monsterLife}, serão necessários ${turnos} turnos para derrotá-lo.`
);

// Uma vez que "turnos" retorna um número com casas decimais, preciso adicionar mais um turno, para que faça sentido, pois o monstro ainda teria life, por mais mínimo que fosse.
