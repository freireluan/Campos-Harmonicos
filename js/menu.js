var botaoMenu = document.querySelector("#checkbox-menu");
var menu = document.querySelector(".form")
var altura = window. screen. height;
var largura = window. screen. width;
console.log(largura, altura);

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



  

