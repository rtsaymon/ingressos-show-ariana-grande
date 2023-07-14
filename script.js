 var botao = document.querySelector("button")
var estadark = false

 var botaoIngresso = document.querySelector("button#ingresso")
 botaoIngresso.addEventListener("click" ,compraringresso)


 function compraringresso() {

 var h1 = document.querySelector("h1")
 h1.innerText = "O seu número na fila é " + Math.floor(Math.random() * 3000)

 var img = document.querySelector("img")
      img.classList.remove("esconder")
 }

 botao.addEventListener("click" , ativardark)

 
function ativardark(){
    var body = document.querySelector("body")

    if(estadark){
   body.classList.remove("dark")
   botao.innerText = "ativar dark"
    estadark = false
    } else {
     body.classList.add("dark")
     botao.innerText = "removers dark"
      estadark = true }

      
}





