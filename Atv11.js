const entrada = require('prompt-sync')({sigint:true});

function parImpar(numero){
    if(numero % 2 == 0){
        console.log("PAR");
    }else{
        console.log("IMPAR");
    }
}

var condicao = true;

while (condicao) {

     var n = entrada("Digite um número:");

    if(n <= 0){
        console.log("A sua entrada foi negativa ou nula!");
        condicao = false;
    }else{
        parImpar(n);
    }
}