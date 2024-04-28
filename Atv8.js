const entrada = require('prompt-sync')({sigint:true});

function ordenarCrescente(n1, n2) {
    if (n1 < n2) {
        console.log("Valores em ordem crescente:", n1, n2);
    } else {
        console.log("Valores em ordem crescente:", n2, n1);
    }
}

var n1 = parseFloat(entrada("Digite o primeiro número: "));
var n2 = parseFloat(entrada("Digite o segundo número: "));

ordenarCrescente(n1, n2);
