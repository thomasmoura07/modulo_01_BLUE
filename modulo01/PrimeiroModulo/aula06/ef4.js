// Faça um programa que simule um lançamento de dados. Lance o dado 100 vezes e armazene os resultados em um array. Depois, mostre quantas vezes cada valor foi conseguido.
console.clear();


const diceList = [numb1=[],numb2 = [], numb3 = [], numb4 = [], numb5 = [], numb6 = [], dicetotal = []]


let i = 0;

while(i < 100) {
    let dice = Math.floor(Math.random() * 6 + 1)
    dicetotal.push(dice);
// GUARDAR CADA OCORRÊNCIA DE UM NÚMERO EM SEU RESPECTIVO ARRAY.  
    switch(dice) {
        case 1: diceList[0].push(dice);
        break;
        case 2: diceList[1].push(dice);
        break;
        case 3: diceList[2].push(dice);
        break;
        case 4: diceList[3].push(dice);
        break;
        case 5: diceList[4].push(dice);
        break;
        case 6: diceList[5].push(dice);
        
    }   
    i++
}
console.log('DADOS LANÇADOS:')
console.log(diceList[6]);
console.log();

for(let i = 0; i < 6; i++)
console.log(`Ocorrências do número ${i+1}: ${diceList[i].length}`);
// Por não possuir nenhum código abaixo, não precisou de delimitação de chaves para funcionar.
