var botaoMenu = document.querySelector("#checkbox-menu");
var menu = document.querySelector(".form")


botaoMenu.addEventListener("click", ()=>{
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


  

