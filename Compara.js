//comparação implicita

const numero = 5;
const texto = "5"; //aspas para virar string

console.log(numero == texto) //ojava converteu string para numero e comparou = true

console.log(numero === texto) //ele nao faz conversao automatico


//typeof
console.log(typeof numero) //informando o tipo de dado é armazenado
console.log(typeof texto) 

// ( == ) so compara o valor
// ( === ) compara o valor e o tipo de dado
// boas praticas pedem os e iguais ( === ) e usar a conversao
Number()
String()