let boton2= document.querySelector("#disappeared")
let parrafo2= document.querySelector("#parrafo2")
boton2.onclick= cambiacolor
function cambiacolor(){
    if(boton2.style.color=="black"){
      boton2.style.color="grey"
      parrafo2.innerHTML="El término alma o ánima se refiere a una entidad inmaterial que, según las afirmaciones y creencias de diferentes tradiciones y perspectivas filosóficas y religiosas, poseen los seres vivos."
      parrafo2.style.display= "block"
    } else {
        boton2.style.color="black"
        parrafo2.style.display= "none" 
    } 
}
boton.style.color="black"
console.log(parrafo2.style.color)