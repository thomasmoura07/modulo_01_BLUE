// 7) E os 10% do garçom? - Defina uma variável para o valor de uma refeição que custou R$ 42,54. Na sequência, defina uma variável para o valor da taxa de serviço que é de 10%. Por fim defina uma variável que será responsável pelo cálculo do valor total da conta e exiba-o no console com a seguinte formatação: R$99.99 (valor com duas casas decimais).
console.clear()
const valorRef = 42.54
const taxa = (valorRef * 0.1)
const total = (valorRef + taxa)

console.log(`O valor da gorjeta foi de ${taxa.toFixed(2)}\nTotal da refeição:${total.toFixed(2)}`);