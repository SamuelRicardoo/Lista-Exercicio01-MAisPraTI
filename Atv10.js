
function mult(numero){
    if(Number.isInteger(numero)){
        for (let index = 0; index < 10; index++) {
                console.log(numero);
        };
    }else{
        console.log("Não é um numero inteiro");
    }
}

var numero = 10.5;

mult(numero);