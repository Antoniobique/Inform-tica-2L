let boton= document.querySelector("#like")
let parrafo= document.querySelector("#miparrafo")
boton.onclick= cambiarcolor
function cambiarcolor(){
    //cambio el color a azul
 if(boton.style.color == "black"){
    boton.style.color= "blue"
    boton.style.backgroundColor= "pink"
    parrafo.innerHTML="ME GUSTA ESTA IMAGEN"
    }
 else {
    boton.style.color="black"
    console.log("boton clickeado")
    parrafo.innerHTML=""
    }

}

boton.style.color= "black"
console.log(boton.style.color)