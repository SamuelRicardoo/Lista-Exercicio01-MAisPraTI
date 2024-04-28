function calculoPorcentagem(totalEleitores,votoBranco,votoNulo,votoValido ){

    var porcentagemBranco = (votoBranco / totalEleitores) * 100
    var porcentagemNulo = (votoNulo / totalEleitores) * 100
    var porcentagemValido = (votoValido / totalEleitores) * 100

    return {
        brancos: porcentagemBranco,
        nulos: porcentagemNulo,
        valido: porcentagemValido
    }
}

const totalEleitores = 200;
const totalBranco = 10;
const totalNulo = 20;
const totalValido = 160;

const porcentuais = calculoPorcentagem(totalEleitores, totalBranco, totalNulo, totalValido)
console.log("Porcentual banco :", porcentuais.brancos);
console.log("Porcentual Nulo: ", porcentuais.nulos);
console.log("Porcentual Valido: ",porcentuais.valido);