// Construa uma função que receba uma data no formato DD/MM/AAAA e devolva uma string no formato 'D de mesPorExtenso de AAAA'. Valide a data e retorne NULL caso a data seja inválida.
const prompt = require("prompt-sync")();
console.clear();

function data(dia, mes, ano) {
  dia = +prompt("Digite o dia:");
  if (dia > 31 || dia < 1) {
    console.log("NULL");
  }
  mes = +prompt("Digite o mês:");
  if (mes < 1 || mes > 12) {
    console.log("NULL");
  }
  ano = +prompt("Digite a data:");
  if (data > 1900 || data > 2100) {
    console.log("NULL");
  }
  switch (mes) {
    case 1:
      mes = "Janeiro";
      break;
    case 2:
      mes = "Fevereiro";
      break;
    case 3:
      mes = "Março";
      break;
    case 4:
      mes = "Abril";
      break;
    case 5:
      mes = "Maio";
      break;
    case 6:
      mes = "Junho";
      break;
    case 7:
      mes = "Julho";
      break;
    case 8:
      mes = "Agosto";
      break;
    case 9:
      mes = "Setembro";
      break;
    case 10:
      mes = "Outubro";
      break;
    case 11:
      mes = "Novembro";
      break;
    case 12:
      mes = "Dezembro";
      break;
  }
  console.log(`${dia} de ${mes} de ${ano}`);
}

data();
