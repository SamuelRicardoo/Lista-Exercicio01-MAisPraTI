function calcularValor(qtd){
    if(qtd < 12){
        precoUnitario = 0.30;
    }else{
        precoUnitario = 0.25;
    }

    var total = qtd * precoUnitario;

    return total;
}

var macaQtd = 12;
var totalCompra = calcularValor(macaQtd);
console.log("O valor total é R$", totalCompra)