//nessa funcao vamos fazer os codigos funcionar conforme a demanda e nao na sequancia.
// preciamos clriar blocos onde um bloco chama o outro conforme necessidade

//let x = "";
//console.log(x);
//x = "oi";

//Declaração de Funcao

// 1) declara a função
                     //string
function imprimetexto(texto){  //pode utilizar 1 funcao varias vezes
    console.log(texto)
}

// 2) executa a função (1 ou + vezes)

imprimetexto("oi");
//imprimetexto("Chamander o aubatroz");

//ele chama a funcao a baixo dele, com o valor dos resultados para cima
imprimetexto(soma());


//3 Tres formas de escrever funcoes

//funcao de matematica
function soma(){
 return 2 + 2;
}
console.log(soma())
