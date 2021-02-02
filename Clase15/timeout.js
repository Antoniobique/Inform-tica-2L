let boton2= document.querySelector("#dislike")
let imagen= document.querySelector("img") 
boton2.onclick= cambiaAzul
function cambiaAzul(){
    //cambio el color a azul
 
    boton2.style.color= "blue"
    imagen.style.display= "none"
    setTimeout(cambiarANegro,3000);
}

function cambiarANegro(){
    boton2.style.color="black"
    imagen.style.display="block"
}

boton.style.color= "black"
console.log(boton.style.color)