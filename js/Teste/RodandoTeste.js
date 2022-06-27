const butomm = formTeste.querySelector(".play");
const buttomPause = formTeste.querySelector(".pause");
const nivelDoAcorde = document.querySelector("#grauAcorde");
const acordeDoNivel = document.querySelector("#acordeDoGrau");
let nivel;
let textoDoNivel;
let numero;
let ultimoNumeroGerado = 10;

function verificaGrau(i){
    if(i === 0){
        nivel = "I";
       
    }
    if(i === 1){
        nivel = "II";
        
    }
    if(i === 2){
        nivel = "III";
      
    }
    if(i === 3){
        nivel = "IV";
       
    }
    if(i === 4){
        nivel = "V";
      
    }
    if(i === 5){
        nivel = "VI";
         
    }
    if(i === 6){
        nivel = "VII";
        
    }
    return nivel;

}

function rodandoGrau(i){
    verificaGrau(i);
    textoDoNivel = `${nivel} Grau`

    nivelDoAcorde.textContent = textoDoNivel;

}

function rodandoImagem(tom,i){
    acordeDoNivel.setAttribute('src', `./imagens/${tom}/${i}.jpeg`);
}

function rodandoTeste(tom,i){
    rodandoImagem(tom,i);
    rodandoGrau(i);
}


function geraNumeroAleatorio(a,b){
    numero = Math.floor(Math.random() * (b - a + 1 )) + a; 
    if(ultimoNumeroGerado !== numero){
        return numero;

    }else{
        numero = Math.floor(Math.random() * (b - a + 1 )) + a;
    }
    ultimoNumeroGerado = numero;
}
      
