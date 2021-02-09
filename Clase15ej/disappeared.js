let boton2= document.querySelector("#disappeared")
let parrafo2= document.querySelector("#parrafo2")
boton2.onclick= desaparecer
function desaparecer(){
    if(parrafo2.innerHTML==""){
      parrafo2.innerHTML="El término alma o ánima se refiere a una entidad inmaterial que, según las afirmaciones y creencias de diferentes tradiciones y perspectivas filosóficas y religiosas, poseen los seres vivos."
      
    } else {
        parrafo2.innerHTML= "" 
    } 
}
parrafo2.innerHTML="El término alma o ánima se refiere a una entidad inmaterial que, según las afirmaciones y creencias de diferentes tradiciones y perspectivas filosóficas y religiosas, poseen los seres vivos."