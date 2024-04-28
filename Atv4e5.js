function calculoMedia(nota1, nota2){
    var media = (nota1 + nota2) / 2;
    return media;
}

function isPassou(calculoMedia){
    if(calculoMedia > 6){
       return true;
    }else{
       return false
    }
}

function textoConsole(isPassou){

    if(isPassou){
        console.log("PARABÉNS! Você foi aprovado.")

    }else{
        console.log("Você foi REPROVADO! Estude mais")
    }
}

var nota1 = 7;
var nota2 = 8;
var media = calculoMedia(nota1,nota2);
var aprovado = isPassou(media);
textoConsole(aprovado);
