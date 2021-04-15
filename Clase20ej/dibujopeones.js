let canvas = document.querySelector("#micanvas")

// escoger el contexto, en este caso el contexto 2d
let ctx= canvas.getContext("2d")


// dibujo peón negro
function dibujarpeón( xC, yC, r){
 ctx.beginPath()
 ctx.strokeStyle="black"
 ctx.fillStyle="black"
 ctx.lineWidth=2.5
 ctx.arc(xC, yC-37, r-10, 0.7*Math.PI, Math.PI/2)
 ctx.stroke()
 ctx.fill()
 ctx.closePath()

 ctx.beginPath()
 ctx.arc(xC, yC-28, r-8, 0.7*Math.PI, Math.PI/2)
 ctx.stroke()
 ctx.fill()
 ctx.closePath()

 ctx.beginPath()
 ctx.arc(xC, yC-15, r-4, 1.003*Math.PI, 0.04)
 ctx.stroke()
 ctx.fill()
 ctx.closePath()
 
}

for(let x= 30; x<250; x= x+30){
    dibujarpeón(x, 100, 14)
}


// dibujo peón blanco
function dibujarpeónblanco( xC, yC, r){
 ctx.beginPath()
 ctx.strokeStyle="black"
 ctx.fillStyle="white"
 ctx.lineWidth=5
 ctx.lineTo(xC+12.6,yC-97)
 ctx.arc(xC, yC-97, r-4, 1.003*Math.PI, 0.04)
 ctx.stroke()
 ctx.fill()
    
 ctx.beginPath()
 ctx.arc(xC, yC-111, r-8, 0.7*Math.PI,0.7)
 ctx.stroke()
 ctx.fill()
 
 ctx.beginPath()
 ctx.arc(xC, yC-120, r-10, 0.7*Math.PI, 0.8)
 ctx.stroke()
 ctx.fill()
 
}

for(let x= 30; x<250; x= x+30){
    dibujarpeónblanco(x, 500, 14)
}