const prompt = require("prompt-sync")();
console.clear();

const respostas = [];
const histBack =
  "Zuran um poderoso guerreiro que havia sido morto, misteriosamente retorna e inicia uma insaciável busca por poder e conquista das terras e povos de Meridium,\nusando de toda sua força e crueldade para isso. Lariev um jovem paladino é convocado pelo conselho de Aziev, por ser descendente daquele que derrotou Zuran e o\núnico capaz de portar a Espada de Terebro a que tudo perfura. Orientado pelos sábios embarca em sua aventura mais desafiadora, derrotar Zuran e trazer paz e\njustiça por toda Meridium.";
let perguntas = [
  "1 - Você encontrou a ilha de Terra-mar, achando o Senhor das Armas, para lhe ensinar as técnicas ocultas da Espada de Terebro?(s/n)",

  "2 - Nas fronteiras do novo domínio de Zuram, ao encontrar uma criatura de forma Élfica, você aceitou sua ajuda, um elixir?(s/n)",

  `3 - Ao derrotar um Feiticeiro das forças inimigas, você obteve a pedra Omnia reveals?.(s/n)`,

  `4 - Você conheceu Tarus um anão do Condado de Ori? E forjou um escudo especial para você, um escudo capaz de criar uma áurea que te oculta sob a luz.(s/n)`,

  "5 - Antes de entrar em embate com Zuran, você dedidiu espionar seu covil, utilizando o poder do seu escudo?(s/n)",
];

let contador = 0;
let branch4a = false; // RAMIFICAÇÃO 1: PARA 4 RESPOSTAS POSITIVAS
let branch4b = false; // RAMIFICAÇÃO 2: PARA 4 RESPOSTAS POSITIVAS

// EXIBR HISTÓRIA E INSTRUÇÕES BÁSICAS

console.log(
  'CERTIFIQUE-SE DE ESTAR COM O CONSOLE MAXIMIZADO.\nPARA UMA MELHOR EXPERIÊNCIA REDUZA O ZOOM DO SEU CONSOLE(ctrl + "-").'
);
console.log(
  'Todas as perguntas podem ser respondidas com "s" e "sim" para sim e "n" e "nao" para não.'
);
console.log();
console.log("DÊ UM ENTER PARA CONTINUAR:");
continuar = prompt();
console.clear();

console.log(histBack);
console.log();
console.log("DÊ UM ENTER PARA CONTINUAR:");
continuar = prompt();
console.clear();

// PERGUNTAS REALIZADAS DENTRO DE UM LAÇO FOR. E O WHILE USADO PARA VALIDAÇÃO DE ENTRADA.
for (let i = 0; i < perguntas.length; i++) {
  respostas[i] = prompt(perguntas[i]).toLowerCase();

  while (
    respostas[i] != "sim" &&
    respostas[i] != "nao" &&
    respostas[i] != "s" &&
    respostas[i] != "n"
  ) {
    console.clear();
    respostas[i] = prompt(perguntas[i]).toLowerCase();
    console.clear();
  }
  if (respostas[i] == "s" || respostas[i] == "sim") {
    contador++;
    // CRIAR UMA RAMIFICAÇÃO NA HISTÓRIA, ONDE SOMENTE A PERGUNTA 5 FOI RESPONDIDA NEGATIVAMENTE.
    if (
      respostas[i] == respostas[0] &&
      respostas[i] == respostas[1] &&
      respostas[i] == respostas[2] &&
      respostas[i] == respostas[3]
    ) {
      //caso a única negativa seja a resposta 5.
      branch4a = true;
    }
  }
  // A pergunta 4 e 5 possuem uma ligação, aqui é a forma de correção caso a pergunta 4 seja negativa.
  if (respostas[3] == "n" || respostas[3] == "nao") {
    perguntas[4] =
      "5 - Antes de entrar em embate com Zuran, você arrisca espionar seu covil?";
    branch4b = true;
  }

  console.clear();
}

// ATRIBUIR UMA SAÍDA (FINAL DA HISTÓRIA) DE ACORDO COM A VARIÁVEL CONTADOR.
switch (contador) {
  case 0:
    console.log(
      "Alguma força desconhecida agiu sobre Lariev que o fez perder a cabeça. Sua missão foi um completo fiasco."
    );
    break;
  case 1:
    // CRIAR UMA RAMIFICAÇÃO RANDÔMICA
    let sucess = Math.floor(Math.random() * 2 + 1);
    console.log(
      "Não seguir o conselho dos sábios e nem sua intuição foi uma péssima ideia."
    );
    if (sucess == 1) {
      
      console.log(
        "Teve que retornar de maneira vergonhosa para Aziev. Aos trapos e farrapos."
      );
    } else {
      console.log(
        "Só resta fugir agora. Mas uma pedra no caminho derruba Lariev, dando fim a sua existência. Como pode? Uma pedra?."
      );
    }

    break;
  case 2: // CONTEXTO DA RESPOSTA: AQUI NOSSO HERÓI IGNNOROU ELEMENTOS EXTERNOS AO OBJETIVO PRINCIPAL QUE SÃO FUNDAMENTAIS PARA O SUCESSO DA MISSÃO.
    console.log(
      "Focar totalmente no resultado foi sua ruína. É preciso estar conectado ao que está acontecendo ao seu redor.\nAgora é tarde demais. O desafio agora é explicar seu fracasso para Aziev."
    );
    break;
  case 3:
    console.log("Seus esforços não foram suficientes para vencer Zuran.");
    break;

  case 4:
    if (branch4a) {
      // CONTEXTO DA RESPOSTA: O VERDADEIRO VILÃO É ABADON. SO A PEDRA É CAPAZ DE REVELAR SUA LIGAÇÃO COM ZURAN, PARA ISSO PRECISA ENTRAR FURTIVAMENTE NO COVIL SEM QUE ABADON O PERCEBA E SE OCULTE.(A PEDRA SE TORNOU UM ITEM SEM UTILIDADE.)
      console.log(
        "Lariev derrotou Zuran, porém seu ressurgimento ficou sem explicação, será que deveria ter investigado? Bem para que? Tudo parece estar bem agora.\nUma pedra ficou de lembrança da missão."
      ); // CASO A PERGUNTA 4 SEJA NEGATIVA - AQUI LARIEV NÃO TEM SEU ESCUDO COM O PODER DA INVISIBILIDADE, MAS ENTRA NO COVIL FURTIVAMENTE POR SUA CONTA E RISCO.
    } else if (branch4b) {
      // CRIAR UMA RAMIFICAÇÃO RANDÔMICA
      let sucess = Math.floor(Math.random() * 2 + 1);
      if (sucess == 1) {
        console.log(
          "Lariev furtivamente encontra Zuran(Algo parece sumir nas sombras). Uma batalha épica é destravada, Lariev é o grande vencedor.\nUma pedra e um elixir ficaram de lembrança da aventura."
        );
      } else {
        console.log(
          "Lariev é percebido pelos guardas da alta elite de Zuran, mas os consegue derrotar. O elixir permite que lariev retorne sua vitalidade e força para enfrentar Zuran, tendo êxito em sua missão."
        );
      }
    } else {
      console.log(
        "Todo seu treinamento é recompensando ao derrotar Zuran, finalmente Meridium tem a perspectiva de paz novamente, porém ainda se mantêm misterioso o ressurgimento de Zuran do mundo dos mortos."
      );
    }
    break;
  case 5:
    console.log(
      "Lariev ao entrar de forma oculta(Graças ao seu escudo!) no Covil de Zuran, encontra Abadon, um poderoso feiticeiro do Magistério de Meridium, de boa fama por todos os povos, mas um ser polêmico pelo Conselho. Ele foi o responsável por trazer Zuran do mundo dos mortos, utilizando-o como fantoche para sua vontade. Com o poder da pedra Omni Reveals, Lariev pôde ver a ligação de Zuran e de Abadon, quebrando o enlace e inutilizando Zuran, agora podia lutar destemidamente contra o verdadeiro inimigo, Abadon. Meridium agora prospera e os tempos de aflição ficaram para trás,\nLariev entrou na história, porém, continuou modesto e se aventurando ajudando aqueles que o invocavam."
    );
    break;
}

console.log();
console.log("FIM");
