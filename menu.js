var botaoMenu = document.querySelector("#checkbox-menu");
var menu = document.querySelector(".form")
var altura = window. screen. height;
var largura = window. screen. width;


botaoMenu.addEventListener("click", ()=>{
    if (botaoMenu.checked){
        menu.classList.remove("menuDesativado");
        menu.classList.add("menuAtivo");
        menu.classList.add("form");
        
    }else{
        menu.classList.remove("form");
        menu.classList.remove("menuAtivo")
        menu.classList.add("menuDesativado");
      
    }
    
    
})


setTimeout(() => {
    if (botaoMenu.checked){
        menu.classList.remove("menuDesativado");
        menu.classList.add("menuAtivo");
        menu.classList.add("form");
        
    }else{
        menu.classList.remove("form");
        menu.classList.remove("menuAtivo")
        menu.classList.add("menuDesativado");
      
    }
    
}, 1);
// setTimeout(() => {
//    if(largura > 800) {
//     menu.classList.add("form");
//     menu.classList.remove("menuDesativado");
//    }else{
//     menu.classList.remove("form");
//     menu.classList.add("menuDesativado")
//    }
// },3);




  

