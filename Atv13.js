const entrada = require('prompt-sync')({sigint:true});

function entradaUsuario(){

    var valoresUsuario = []
    while(true){
        
          var numero = parseInt(entrada("Digite um numero (Para sair aperte 0): "));
            if(numero === 0 ){
                   break;
                }
            valoresUsuario.push(numero);
            }

            for (let i = 0; i < valoresUsuario.length; i++) {
                multiplicar(valoresUsuario[i]);
            }
        }
    
function multiplicar(n1){

    console.log("Tabuada de : ",n1);

    for (let i = 1; i <= n1; i++) {
        var multiplo = (i * n1)
        console.log(i + " x " + n1 + " = " + multiplo);
    }
    console.log("")
}

entradaUsuario();