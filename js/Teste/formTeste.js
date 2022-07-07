const formTeste = document.querySelector(".formTesteHarmonico");

const campoHarmonicoDe= formTeste.querySelector("#campo-Harmonico-de");

const repeticoesEmOrdem = formTeste.querySelector("#Quantas-vezes-repetir");

const TempoEntreAcordes = formTeste.querySelector("#Tempo");

const buttomTom = formTeste.querySelector(".confirmarCampo");

let tom;
let titulo;

function mudaTitulo(tom){
    titulo = `Campo Harmonico de ${tom}`;
    tituloDoCampo.textContent = titulo;
}


buttomTom.addEventListener("click", ()=>{
    tom = campoHarmonicoDe.value;
    mudaTitulo(tom)
    alteraImagnes(tom)
    rodandoImagem(tom,0);
});
