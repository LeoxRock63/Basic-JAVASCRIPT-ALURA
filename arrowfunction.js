//metodo classico
function apresentar(nome) {
    return `meu nome é ${nome}`;
}


//metodo moderno Arrow Function
const apresentarArrow = nome =>  `meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;


//Arrow Function com + de uma linha de instrução
//Hoising: arrow function se comporta como expressão
const somaNumP = (num1, num2) => {
    if (num1 || num2 > 10){
        return "somente numero 1 a 9"
    }else {
        return num1 + num2;
    }
}

console.log(somaNumP(1 + 2))
