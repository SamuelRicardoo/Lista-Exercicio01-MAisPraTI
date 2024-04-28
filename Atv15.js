const entrada = require('prompt-sync')({sigint:true});

function calcularMediaPonderada() {
    let somaNotas = 0;
    let somaPesos = 0;
    
    while (true) {
        let nota = parseFloat(entrada("Digite a nota (ou 0 para sair): "));
        
        if (nota === 0) {
            break;
        }
        
        let peso = parseFloat(entrada("Digite o peso correspondente à nota: "));
        
        somaNotas += nota * peso;
        somaPesos += peso;
    }
    
    if (somaPesos === 0) {
        console.log("Nenhum número foi inserido.");
    } else {
        let media = somaNotas / somaPesos;
        console.log("A média ponderada é:", media.toFixed(2));
    }
}

calcularMediaPonderada();
