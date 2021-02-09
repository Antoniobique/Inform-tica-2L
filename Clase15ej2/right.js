let boton3= document.querySelector("#Right")
let parrafo3= document.querySelector("#parrafo3")
boton3.onclick= cambiacolor
function cambiacolor(){
  if(parrafo3.innerHTML =="Hemos visto que en tiempo de Cervantes la Astronomía estaba en plena revolución, mientras la Química, la Medicina y la Biología tendrían que esperar aún varios siglos hasta que les llegase el turno." )
   {
      parrafo3.innerHTML= ""
      setTimeout(cambiacolor,3000)
    }
  else 
  {
      parrafo3.innerHTML="Hemos visto que en tiempo de Cervantes la Astronomía estaba en plena revolución, mientras la Química, la Medicina y la Biología tendrían que esperar aún varios siglos hasta que les llegase el turno."
  }
}
parrafo3.innerHTML="Hemos visto que en tiempo de Cervantes la Astronomía estaba en plena revolución, mientras la Química, la Medicina y la Biología tendrían que esperar aún varios siglos hasta que les llegase el turno."