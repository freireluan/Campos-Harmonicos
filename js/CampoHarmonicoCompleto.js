const imagensCampoHarmonicoCompleto = document.querySelectorAll(".imagemAcorde");


const tituloDoCampo = document.querySelector(".CampoDe")
let localImagem;


function alteraImagnes(tom){
    for (let i = 0; i < imagensCampoHarmonicoCompleto.length; i++) {
    localImagem = `./imagens/${tom}/${i}.png`;
    imagensCampoHarmonicoCompleto[i].setAttribute('src', `./imagens/${tom}/${i}.png`);
    
   
        
    }
  

}


