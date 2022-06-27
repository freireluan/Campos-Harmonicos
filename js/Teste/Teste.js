let tempo = parseInt(TempoEntreAcordes.value + "000");
let troca = false;
let contador = 1;
let Setintervalo;
let RepeticoesDesejadas;
let contadorDeRepeticoes = 0;
const imagensDoCampoHarmonico = document.querySelectorAll(".imagemAcordeDiv");
const acordeRodandoTeste = document.querySelector(".testeRodando")
 


butomm.addEventListener("click", ()=>{
    troca = true;
    tom = campoHarmonicoDe.value;
    tempo = parseInt(TempoEntreAcordes.value + "000");
    mudaTitulo(tom);
    alteraImagnes(tom);
    if(butomm.textContent ===  "Retomar"){
        butomm.textContent = "Começar Teste";
    
    }


    Setintervalo = setInterval(() => {
        rodaTeste();
       
       

    }, tempo);
    RepeticoesDesejadas = document.querySelector("#Quantas-vezes-repetir").value;

})


buttomPause.addEventListener("click", ()=>{
    troca = false;
    butomm.textContent = "Retomar";
    setTimeout(() => {
        clearInterval(Setintervalo)
        
    }, 10);
})



function rodaTeste (){
    if(troca = true){
        if (contador < 7) {
            if(contador < 7){
                if(contadorDeRepeticoes < RepeticoesDesejadas){
                    rodandoTeste(tom, contador);
                    destacaAcordeAtivo(contador);
                }else{
                    if(contadorDeRepeticoes >= RepeticoesDesejadas){
                        let i = geraNumeroAleatorio(0,6);
                        rodandoTeste(tom, i);
                        destacaAcordeAtivo(i);

                    }
                }
            }
            if(contador == 6){
               contador = contador - 7;
               contadorDeRepeticoes = contadorDeRepeticoes + 1;

            }

            contador = contador + 1;
           
            
        }
    }
}

function destacaAcordeAtivo(i) {
    imagensDoCampoHarmonico[i].classList.add("ativa");
    // acordeRodandoTeste.classList.add("ativa");
     setTimeout(() => {
        imagensDoCampoHarmonico[i].classList.remove("ativa");
        // acordeRodandoTeste.classList.remove("ativa");
        
    }, 700);
    
}



