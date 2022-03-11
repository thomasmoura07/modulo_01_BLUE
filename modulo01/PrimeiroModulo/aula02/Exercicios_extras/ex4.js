//4) Tabela de notas - Você foi contratado ou contratada por uma escola pra fazer o sistema de boletim dos alunos. Como primeiro passo, escreva um programa que produza a seguinte saída:
const prompt = require('prompt-sync')()
const alunos = ["ALINE","MÁRIO","SÉRGIO","SHIRLEY","ANTONIO","ANA","WHINDERSON","CARLOS WESLEY"]
const nota = [9.0,10,4.5,7.0,8.0,5.0,6.8,9]

console.clear();

console.log("ALUNO(A)         NOTA")
for (let i = 0; i < alunos.length; i++) {
    if (alunos[i].length <= 6){ 
    console.log(alunos[i],'\t\t|',(nota[i]).toFixed(1));

    } else {console.log(alunos[i],'\t|',(nota[i]).toFixed(1));
   
}
}

