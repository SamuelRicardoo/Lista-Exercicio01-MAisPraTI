const entrada = require('prompt-sync')({ sigint: true });

function verificarTriangulo() {
   
    const ladoA = parseFloat(entrada("Digite o valor do lado A do triângulo: "));
    const ladoB = parseFloat(entrada("Digite o valor do lado B do triângulo: "));
    const ladoC = parseFloat(entrada("Digite o valor do lado C do triângulo: "));

    const formaTriangulo = ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB;

    if (formaTriangulo) {

        if (ladoA === ladoB && ladoB === ladoC) {
            console.log("Os lados fornecidos formam um triângulo equilátero.");
        } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
            console.log("Os lados fornecidos formam um triângulo isósceles.");
        } else {
            console.log("Os lados fornecidos formam um triângulo escaleno.");
        }
    } else {
        console.log("Os lados fornecidos não formam um triângulo.");
    }
}

verificarTriangulo();