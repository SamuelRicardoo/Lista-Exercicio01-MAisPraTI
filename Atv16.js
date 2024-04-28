function isPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    if (numero <= 3) {
        return true;
    }
    if (numero % 2 === 0 || numero % 3 === 0) {
        return false;
    }
    for (let i = 5; i * i <= numero; i += 6) {
        if (numero % i === 0 || numero % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

function proximoPrimo(inicio, total){
    let i =0;
    let numero = inicio + 1;
    while(i < total){

        if(isPrimo(numero)){
            console.log(numero);
            i++
        }
        numero++;
    }
}

const inicio = 100;
const total = 50;

proximoPrimo(inicio, total);