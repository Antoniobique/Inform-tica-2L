let boton= document.querySelector("#change")
let parrafo= document.querySelector("#parrafo1")
boton.onclick= cambiarcolor
function cambiarcolor(){
    //cambio el color a azul
 if(parrafo.style.color == "black")
 {
    parrafo.style.color= "blue"
    parrafo.innerHTML="Nunca se es sensible a cualquier cosa y eso no es noticia"
 } else{
     
 }