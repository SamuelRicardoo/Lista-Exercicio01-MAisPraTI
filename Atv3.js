const entrada = require('prompt-sync')({ sigint: true });

function realizarOperacoes() {

    const numero1 = parseInt(entrada("Digite o primeiro número inteiro: "));
    const numero2 = parseInt(entrada("Digite o segundo número inteiro: "));
    const numero3 = parseInt(entrada("Digite o terceiro número inteiro: "));
    const numero4 = parseInt(entrada("Digite o quarto número inteiro: "));

    const resultado1 = numero1 + 25;
    const resultado2 = numero2 * 3;
    const resultado3 = numero3 * 0.12;
    const resultado4 = numero1 + numero2 + numero3; 

    console.log("Resultado da operação 1 (adicionar 25 ao primeiro inteiro):", resultado1);
    console.log("Resultado da operação 2 (triplicar o valor do segundo inteiro):", resultado2);
    console.log("Resultado da operação 3 (12% do valor original do terceiro inteiro):", resultado3);
    console.log("Resultado da operação 4 (soma dos valores originais dos três primeiros inteiros):", resultado4);
}

realizarOperacoes();
