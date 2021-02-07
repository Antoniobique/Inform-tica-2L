let boton= document.querySelector("#change")
let parrafo= document.querySelector("#parrafo1")
boton.onclick= cambiarcolor
function cambiarcolor(){

      let a= Math.floor(Math.random()*226)
      let b= Math.floor(Math.random()*226)
      let c= Math.floor(Math.random()*226)
      parrafo.innerHTML="Nunca se es sensible a cualquier cosa y eso no es noticia"
      parrafo.style.color=`rgb(${a},${b},${c})`;
}
