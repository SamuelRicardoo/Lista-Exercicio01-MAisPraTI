const entrada = require('prompt-sync')({sigint:true});


function origem(codigo){

    if(codigo ==5 || codigo ==6){
        console.log("Nordeste");
    }else if(codigo == 7 || codigo == 8 || codigo == 9){
        console.log("Sudeste");
    }else if(codigo >=10 && codigo <= 20){
        console.log("Leste");
    }else if(codigo >= 25 && codigo <=50){
        console.log("Nordeste");
    }else{
        console.log("Produto importado");
    }
}
  

const codigo = entrada("Digite o codigo: ");

origem(codigo);