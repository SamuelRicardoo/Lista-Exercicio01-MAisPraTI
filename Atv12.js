function resto(numero){
    if(numero % 11 == 5){
        console.log(numero);
    }
}

var inicio = 1000;

for (inicio; inicio < 1999; inicio++) {
    resto(inicio);
}