const prompt = require("prompt-sync")();
console.clear();

function entrevista() {
  let random = Math.floor(Math.random() * 5 + 1);
  if (random == 5 && status.entrevista) {
    console.log("Ligação");
    console.log();
    console.log(
      "Olá Cletin está disponível para uma entrevista agora via telefone?"
    );
    prompt("Enter para continuar");
    console.log("Cletin: Sim, claro!");
    console.log("...");
    prompt("Enter para continuar");
    if (
      personagem.empregabilidade > 3 &&
      personagem.saude >= 70 &&
      personagem.motivacao >= 60
    ) {
      console.log();
      console.log("Parabens você conseguiu um emprego.");
      status.game = false;
      status.empregadometh();
    } else {
      console.log();
      console.log("Logo te retornaremos com a resposta.");
    }
  }
  prompt("Enter para continuar");
  console.clear();
}
// SUA FUNÇÃO É CONTROLAR OS EVENTOS DO JOGO, ENCERRANDO O JOGO DE ACORDO COM AS CONDIÇÕES DECLARADAS.
function gameStatus() {
  if (status.empregado) {
    console.log();
    console.log("Parabéns você conseguiu! Cleitin está finalmente emmpregado");
    console.log("FIM DE JOGO");
    status.game = false;
  } else if (personagem.saude <= 0) {
    console.log("Cletin atravessou o além");
    console.log("FIM DE JOGO");
    status.game = false;
  } else if (personagem.motivacao <= 30) {
    console.log();
    console.log(
      "Cleitin está morto por dentro, incapaz de fazer qualquer coisa"
    );
    console.log("FIM DE JOGO");
    status.game = false;
  } else if (personagem.dinheiro < 30) {
    console.log();
    console.log("Cleitin está falido, caiu na desgraça.");
    console.log("FIM DE JOGO");
    status.game = false;
  }
}

let personagem = {
  dinheiro: 1200,
  saude: 100,
  empregabilidade: 1,
  motivacao: 100,
  comprar: function (valor) { // MÉTODO PARA SUBTRAIR/ADICIONAR VALOR DA PROPRIEDADE DINHEIRO.
    this.dinheiro += valor;
  },
  motimeth: function (valor) { // MÉTODO PARA SUBTRAIR/ADICIONAR VALOR DA PROPRIEDADE MOTIVAÇÃO.
    let soma = personagem.motivacao + valor;
    if (soma >= 100) {
      this.motivacao = 100;
    } else if (soma < 100) {
      this.motivacao += valor;
    }
  },
  empregameth: function (valor) {
    this.empregabilidade += valor;
  },

  saudemeth: function (valor) {  // MÉTODO PARA SUBTRAIR/ADICIONAR VALOR DA PROPRIEDADE SAÚDE.
    let soma = personagem.saude + valor;
    // Possui a função de travar os pontos em 100, aqui o uso do this. trouxe um comportamento inesperado.
    if (soma >= 100) {
      this.saude = 100;
    } else if (soma < 100) {
      this.saude += valor;
    }
  },
  empregameth: function (valor) { // MÉTODO PARA ADICIONAR VALOR DA PROPRIEDADE EMPREGABILIDADE.
    this.empregabilidade += valor;
  },
};

// OBJETO PARA FAZER O CONTROLE DO TEMPO
let tempo = {
  hora: 7,
  dia: 1,
  horameth: function (hora) {
    this.hora += hora;
  },
  diameth: function (dia) {
    this.dia += dia;
  },
};

let status = {
  empregado: false,
  empregadometh: function () {
    this.empregado = true;
  },
  entrevista: false,
  entrevistameth: function () {
    this.entrevista = true;
  },
  convite: false,
  convitemeth: function () {
    this.convite = true;
  },
  game: true,
};

console.log(
  "Cleitin está desempregado, e só possui $1200 para se virar até conseguir seu próximo emprego, ajude-o nessa missão."
);
console.log();
console.log(
  "Alcance no mínimo 5 pontos de empregabiilidade para estar apto a uma contratação."
);
console.log("E não esquceça de manter a saúde e a motivação equilibrados.");
console.log();
console.log("Procurar emprego é maçante, e aqui não é diferente!");
prompt("Enter para continuar");
console.clear();
// LOOP PRINCIPAL - CONTÉM OS TRÊS LOOPS SECUNDÁRIOS RESPONSÁVEIS POR CADA TURNO DO DIA: MANHÃ, TARDE E NOITE.
while (status.game) {
  let perguntasManha = {
    p1: "(1) Fazer compras $150",
    p2: "(2) Sair para deixar currículos $30",
    p3: "(3) ver notícias",
    p4: "(4) Fazer exercícios",

    p1m: false, // RESPONSÁVEL POR INFORMAR O VALOR LÓGICO DA PERGUNTA 1, SE FOI POSITIVA OU NÃO, QUE ALTERARÁ NAS ESCOLHAS DA OPÇÃO COMER NOS OUTROS DOIS TURNOS SUBSEQUENTES: TARDE E NOITE.
    p1meth: function () {
      this.p1m = true;
    },
    p1lock: false,
    p2lock: false,
    p3lock: false,
    p4lock: false,

    // Permitirá bloquear as perguntas, para que não seja selecionada mais de uma vez.
    p1lockm: function () {
      this.p1lock = true;
    },
    p2lockm: function () {
      this.p2lock = true;
    },
    p3lockm: function () {
      this.p3lock = true;
    },
    p4lockm: function () {
      this.p4lock = true;
    },
  };

  let resposta;

  while (tempo.hora < 12 && status.game) {
    console.log(
      `Dia ${tempo.dia} ás ${tempo.hora} horas----------Cash: ${personagem.dinheiro} | Saúde: ${personagem.saude} | Empregabilidade: ${personagem.empregabilidade} | Motivação: ${personagem.motivacao}`
    );
    console.log();
    console.log(
      `${perguntasManha.p1} ${perguntasManha.p2} ${perguntasManha.p3} ${perguntasManha.p4}`
    );
    resposta = +prompt("Escolha a opção: ");
    gameStatus();

    if (resposta == 1) {
      if (perguntasManha.p1lock) {
        console.log();
        console.log("Você já realizou compras hoje.");
      } else if (personagem.dinheiro >= 150) {
        personagem.comprar(-150);
        tempo.horameth(3);
        perguntasManha.p1lockm();
        perguntasManha.p1meth(); // Isso permitirá saber se o usuário escolheu essa opção, assim desativando a opção de comer em outros turnos.
        console.log();
        console.log("Compras realizadas!");
        gameStatus();
      } else {
        console.log();
        console.log("Você não possui dinheiro suficiente.");
      }
      prompt("Enter para continuar:");
      console.clear();
    } else if (resposta == 2) {
      if (perguntasManha.p2lock) {
        console.log();
        console.log("Chega de entregar currículos por hoje...");
      } else if (personagem.dinheiro >= 30) {
        personagem.comprar(-30);
        tempo.horameth(2);
        perguntasManha.p2lockm();
        let random = Math.floor(Math.random() * 3 + 1);
        if (random == 1) {
          do {
            console.log();
            console.log("Você consoeguiu uma entrevista!");
            entrevistaResposta = prompt(
              "Aceita realizar a entrevista(s/n)?"
            ).toLowerCase();
          } while (entrevistaResposta != "s" && entrevistaResposta != "n");

          if (entrevistaResposta == "s") {
            if (
              personagem.empregabilidade >= 5 &&
              personagem.saude >= 80 &&
              personagem.motivacao >= 80
            ) {
              console.log();
              console.log("Parabens você conseguiu um emprego.");
              status.game = false;
              status.empregadometh();
            } else {
              console.log();
              console.log("Infelizmente você não passou na entrevista.");
              personagem.motimeth(-10);
            }
          }
        } else if (random == 2) {
          personagem.comprar(-40);
          console.log();
          console.log("Você foi assaltado no caminho e perdeu $40.");
          gameStatus();
        } else if (random == 3) {
          console.log();
          console.log("Ficaram de retornar uma resposta");
          personagem.motimeth(-5);
        }
      } else {
        console.log();
        console.log("Você não possui dinheiro suficiente.");
        prompt("Enter para continuar:");
        console.clear();
      }
      prompt("Enter para continuar:");
      console.clear();
    } else if (resposta == 3) {
      let random = Math.floor(Math.random() * 2 + 1);
      if (perguntasManha.p3lock) {
        console.log("Melhor achar outra coisa para fazer.");
      } else if (random == 1) {
        const badNews = [
          "...o desemprego bate recorde pelo terceiro ano consecutivo[...]",
          "Com a economia em crise e o desemprego em alta sobe siginificamente o número de pessoas em subempregos",
        ]; // alterar frases
        console.log();
        console.log(badNews[Math.floor(Math.random() * badNews.length)]);
        personagem.motimeth(-10);
        tempo.horameth(2);
        gameStatus();
        perguntasManha.p3lockm();
      } else if (random == 2) {
        personagem.empregameth(1);
        tempo.horameth(3);
        perguntasManha.p3lockm();
        personagem.motimeth(10);
        console.log();
        console.log(
          "Você aprendeu novas técnicas de como conseguir um emprego"
        ); // alterar frases
      }
      prompt("Enter para continuar:");
      console.clear();
    } else if (resposta == 4) {
      let random = Math.floor(Math.random() * 2 + 1);
      if (perguntasManha.p4lock) {
        console.log();
        console.log("Por hoje já foi o suficiente...");
      } else if (random == 1) {
        perguntasManha.p4lockm();
        tempo.horameth(1);
        console.log();
        console.log(
          "Se sentindo bem melhor depois de uma sessão de exercícios."
        );
        personagem.motimeth(9);
        personagem.saudemeth(9);
      } else if (random == 2) {
        perguntasManha.p4lockm();
        tempo.horameth(1);
        console.log();
        console.log(
          "Ah não, você se lesionou durante o exercício, mas nada muito sério."
        );
        personagem.saudemeth(-5);
        gameStatus();
      }
      prompt("Enter para continuar:");
      console.clear();
    }
  }

  personagem.saudemeth(-15);

  if (status.game) {
    entrevista();
    gameStatus();
  }
  let perguntasTarde = {
    p1: "(1) Sair para praticar esporte",
    p2: "(2) Fazer um curso livre $190",
    p3: "(3) Comer",
    p4: "(4) Usar redes sociais",

    p1lock: false,
    p2lock: false,
    p3lock: false,
    p4lock: false,

    // Permitirá bloquear as perguntas, para que não seja selecionada mais de uma vez.
    p1lockm: function () {
      this.p1lock = true;
    },
    p2lockm: function () {
      this.p2lock = true;
    },
    p3lockm: function () {
      this.p3lock = true;
    },
    p4lockm: function () {
      this.p4lock = true;
    },
  };

  let respostaTarde;

  while (tempo.hora < 18 && status.game) {
    console.log(
      `Dia ${tempo.dia} ás ${tempo.hora} horas----------Cash: ${personagem.dinheiro} | Saúde: ${personagem.saude} | Empregabilidade: ${personagem.empregabilidade} | Motivação: ${personagem.motivacao}`
    );
    console.log();
    console.log(
      `${perguntasTarde.p1} ${perguntasTarde.p2} ${perguntasTarde.p3} ${perguntasTarde.p4}`
    );
    respostaTarde = +prompt("Escolha a opção: ");
    gameStatus();

    if (respostaTarde == 1) {
      if (perguntasTarde.p1lock) {
        console.log();
        console.log("Por hoje já foi suficiente.");
        prompt("Enter para continuar");
        console.clear();
      } else {
        perguntasTarde.p1lockm();
        personagem.saudemeth(15);
        personagem.motimeth(4);
        tempo.horameth(3);
        let respostaUser;
        do {
          console.clear();
          console.log("Quadra de futebol do bairro");
          console.log();
          console.log(" (1) Jogar futebol (2) Falar com Mário, seu amigo");
          respostaUser = +prompt();
        } while (respostaUser != 1 && respostaUser != 2);
        if (respostaUser == 1) {
          console.clear();
          let Winner = false;
          let acertoRandom = Math.floor(Math.random() * 5 + 1),
            player;
          // código está funcionando, porém vale tentar melhorar sua visualização.
          for (let i = 0; i < 3; i++) {
            console.log(
              "Você tem três chances para fazer o gol que levará seu time a vitória."
            );
            console.log(`Tentativa ${i + 1}`);
            console.log();
            do {
              player = +prompt(
                "aposte em um número de 1 a 5 para fazer o gol:"
              );
              if (player <= 0 || player > 5 || isNaN(player)) {
                console.clear();
              }
            } while (player <= 0 || player > 5 || isNaN(player));
            if (player == acertoRandom) {
              console.log();
              console.log("Você mandou bem, levou todo mundo a euforia.");
              Winner = true;
              break;
            } else {
              console.log("Continue tentando...");
            }
            prompt("Aperte para continuar");
            console.clear();
          }
          if (Winner) {
            status.entrevistameth();
            console.log("- Mário: Você continua mandando bem no futebol");
            prompt("Enter para continuar");
            console.log();
            console.log("E como vão as coisas, continua naquela empresa?");
            console.log("- Cleitin: Não mais...estou na procura...");
            prompt("Enter para continuar");
            console.log();
            console.log("- Mario: Porque você não falou logo...");
            console.log(
              "- Mario: Vou te conseguir uma entrevista na empresa onde trabalho, esteja preparado!"
            );
            prompt("Enter para continuar");
            console.log();
            console.log(
              "Agora você tem uma chance de conseguir uma entrevista!"
            );
          } else {
            console.log("- Mário: Você já foi melhor nisso...");
            prompt("Enter para continuar");
            console.log();
            console.log("- Mário: E como vão as coisas?");
            console.log(
              "- Cleitin: Estão indo...estou tentando conseguir um novo emprego"
            );
            prompt("Enter para continuar");
            console.log();
            console.log(
              "- Mário: Entendo, as coisas estão um tanto difícil..."
            );
            console.log("- Mário: Mas logo você conseguirá.");
          }
        } else if (respostaUser == 2) {
          console.log(
            "- Mario: E o que anda fazendo da vida, faz tempo que não te vejo por aqui:"
          );
          console.log(
            "- Cleitin: Vou bem..realmente..meu trabalho ocupava bastante tempo."
          );
          console.log(
            "- Mario: Bem, cá estamos de novo, o que você acha de sair hoje à noite?"
          );
          do {
            console.log("(1) Sim (2) Não");
            var respostaConvite = +prompt();
          } while (respostaConvite != 1 && respostaConvite != 2);
          if (respostaConvite == 1) {
            status.convitemeth();
            console.log("Mário:Nos vemos até lá...já preciso ir indo.");
            console.log(
              "Mário:Vamos no lugar de sempre. Pelo menos o que costuma ser. Estarei te aguardando."
            );
          } else {
            console.log("Mário:Bem, você que sabe...vou me indo. Até mais.");
          }
          // a ideia a partir daqui, e colocar a acao do futebol primeiro, assim se o cleitim ganhar no jogo, e depois falar com o mario ele tem uma chande de conseguir uma entrevista
        }
        prompt("Enter para continuar:");
        console.clear();
      }
    } else if (respostaTarde == 2) {
      if (perguntasTarde.p2lock) {
        console.log();
        console.log("Talvez mais amanhã...");
        prompt("Enter para continuar");
        console.clear();
      } else {
        if (personagem.dinheiro >= 190) {
          perguntasTarde.p2lockm();
          personagem.comprar(-190);
          personagem.empregameth(2);
          tempo.horameth(2);
          let cursos = [
            "Como se inserir no mercado de trabalho",
            "Gestão de negócios,",
            "Liderança",
            "Trabalho em equipe",
          ];
          console.log(
            `Você realizou o curso de ${
              cursos[Math.floor(Math.random() * cursos.length)]
            }`
          );
          prompt("Enter para continuar:");
          console.clear();
          gameStatus();
        } else {
          console.log();
          console.log("Você não possui dinheiro suficiente.");
          prompt("Enter para continuar");
          console.clear();
        }
      }
    } else if (respostaTarde == 3) {
      if (perguntasTarde.p3lock) {
        console.log();
        console.log("Já estou cheio.");
        prompt("Enter para continuar");
        console.clear();
      } else {
        if (perguntasManha.p1m) {
          // Verifica se o usuário comprou comida
          console.log("Comida é sempre bom!");
          perguntasTarde.p3lockm();
          personagem.saudemeth(15);
          personagem.motimeth(5);
          tempo.horameth(1);
        } else {
          console.log("Você não realizou compras hoje");
        }
        prompt("Enter para continuar:");
        console.clear();
      }
    } else if (respostaTarde == 4) {
      if (perguntasTarde.p4lock) {
        console.log();
        console.log("Já perdi tempo demais com isso por hoje.");
        prompt("Enter para continuar");
        console.clear();
      } else {
        perguntasTarde.p4lockm();
        let entreList = [
          "dancinha",
          "cachorros fofos",
          "gatinhos fofos",
          "gente se lascando",
          "Teoria da conspiração: Os esquilos estão se preparando para dominar o mundo.",
        ];
        console.log();
        console.log(
          `Você passou um bom tempo consumindo vídeos de ${
            entreList[Math.floor(Math.random() * entreList.length)]
          }`
        );
        tempo.horameth(3);
        prompt("Enter para continuar:");
        console.clear();
      }
    }
  }
  personagem.saudemeth(-15);

  if (status.game) {
    entrevista();
    gameStatus();
  }
  let respostaNoite;

  let perguntasNoite = {
    p1: "(1) Sair para socializar",
    p2: "(2) Aprender algo novo",
    p3: "(3) Comer",
    p4: "(4) Usar redes sociais",

    p1lock: false,
    p2lock: false,
    p3lock: false,
    p4lock: false,

    // Permitirá bloquear as perguntas, para que não seja selecionada mais de uma vez.
    p1lockm: function () {
      this.p1lock = true;
    },
    p2lockm: function () {
      this.p2lock = true;
    },
    p3lockm: function () {
      this.p3lock = true;
    },
    p4lockm: function () {
      this.p4lock = true;
    },
  };

  while (tempo.hora < 23 && status.game) {
    console.log(
      `Dia ${tempo.dia} ás ${tempo.hora} horas----------Cash: ${personagem.dinheiro} | Saúde: ${personagem.saude} | Empregabilidade: ${personagem.empregabilidade} | Motivação: ${personagem.motivacao}`
    );
    console.log();
    console.log(
      `${perguntasNoite.p1} ${perguntasNoite.p2} ${perguntasNoite.p3} ${perguntasNoite.p4}`
    );
    respostaNoite = +prompt("Escolha a opção: ");
    gameStatus();

    if (respostaNoite == 1) {
      if (perguntasNoite.p1lock) {
        console.log();
        console.log("Melhor pegar leve. Amanhã é um novo dia!");
        prompt("Enter para continuar");
        console.clear();
      } else {
        if (status.convite) {
          console.log("Pub do Zé");
          console.log();
          console.log("Mario: Você realmente veio, sente-se ai.");
          prompt("Enter para continuar");
          console.log("Mario: O que acha de um suco diferenciado?");
          prompt("Enter para continuar");
          console.log("Cleitin: Não consigo pensar em outra opção melhor.");
          prompt("Enter para continuar");
          if (status.entrevista == false) {
            //
            status.entrevistameth(); // VAI ALTERAR A PROPRIEDADE ENTREVISTA PARA TRUE QUE SERVIRÁ COMO VALIDAÇÃO PARA A FUNÇAO ENTREVISTA QUE PODERÁ SER CHAMADA A QUALQUER INSTANTE.
            console.log(
              "Mario: Sei que você ta na procura de um emprego, tinha deduzido na verdade, mas depois olhando sua rede social confirmei"
            );
            console.log("Mario: Posso te ajudar com isso, o que acha?");
            console.log("Cleitin: claro!");
            console.log(
              "Você agora pode esperar por uma ligação de uma provável entrevista."
            );
            prompt("Enter para continuar");
          }
        }
        perguntasNoite.p1lockm();
        tempo.horameth(2);
        console.log("A noite foi muito divertida.");
        prompt("Enter para continuar:");
        console.clear();
      }
    } else if (respostaNoite == 2) {
      if (perguntasNoite.p2lock) {
        console.log();
        console.log("Aprender é sempre bom, mas melhor não exagerar.");
        prompt("Enter para continuar");
        console.clear();
      } else {
        perguntasNoite.p2lockm();
        tempo.horameth(1);
        personagem.empregameth(1);
        let aprenList = [
          "tocar violão",
          "cantar",
          "confeitaria",
          "autoconhecimento",
          "como não morrer de tédio",
        ];
        console.log();
        console.log(
          `Você aprendeu algo sobre ${
            aprenList[Math.floor(Math.random() * aprenList.length)]
          }`
        );
        prompt("Enter para continuar:");
        console.clear();
      }
    } else if (respostaNoite == 3) {
      if (perguntasNoite.p3lock) {
        console.log();
        console.log("Já estou cheio.");
        prompt("Enter para continuar");
        console.clear();
      } else {
        if (perguntasManha.p1m) {
          perguntasNoite.p3lockm();
          tempo.horameth(1);
          personagem.saudemeth(15);
          console.log("Melhor assim de barriga cheia");
        } else {
          console.log("Você não realizou compras hoje");
        }
        prompt("Enter para continuar:");
        console.clear();
      }
    } else if (respostaNoite == 4) {
      if (perguntasNoite.p4lock) {
        console.log();
        console.log("Melhor achar outra coisa para fazer.");
        prompt("Enter para continuar");
        console.clear();
      } else {
        tempo.horameth(3);
        personagem.motimeth(5);
        perguntasNoite.p4lockm();
        let entreList = [
          "dancinhas alucinantes",
          "cachorros fofos",
          "gatinhos fofos",
          "gente se lascando",
          "Teoria da conspiração: Os esquilos estão se preparando para dominar o mundo.",
        ];
        console.log(
          `Você passou um bom tempo consumindo vídeos de ${
            entreList[Math.floor(Math.random() * entreList.length)]
          }`
        );
        prompt("Enter para continuar:");
        console.clear();
      }
    }
  }

  tempo.diameth(1); // aumentar os dias
  tempo.hora = 7; // resetar o dia para iniciar as 7h
  personagem.saudemeth(-10);
  personagem.motimeth(-10);
}
