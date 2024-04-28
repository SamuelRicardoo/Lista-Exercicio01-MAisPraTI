const entrada = require('prompt-sync')({sigint:true});

function calculoMedaPonderada(){
    
    let somaDigi = 0;
    let vezesDigi = 0;


    while(true){

        let n = parseFloat(entrada("Digite um numero: "));

        if(n == 0){
            break;
        }

        somaDigi += n;
        vezesDigi++;
    }

    if(vezesDigi == 0){
        console.log("Nenhum número foi inserido")
    }else{
        let media = somaDigi / vezesDigi;
        console.log("A media deu: "+ media);
    }
}

calculoMedaPonderada();