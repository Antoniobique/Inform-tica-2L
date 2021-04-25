let canvas = document.querySelector("#micanvas")

// escoger el contexto, en este caso el contexto 2d
let ctx= canvas.getContext("2d")


// dibujo peón negro
function dibujarpeón( xC, yC, r,size, color){
 ctx.beginPath()
 ctx.strokeStyle= color
 ctx.fillStyle= color
 ctx.lineWidth=1
 ctx.arc(xC, yC-42, (r*size)-(10*size), 0.7*Math.PI, Math.PI/2)
 ctx.stroke()
 ctx.fill()
 ctx.closePath()
    

 ctx.beginPath()
 ctx.arc(xC, yC-28, (r*size)-(8*size), 0.7*Math.PI, Math.PI/2)
 ctx.stroke()
 ctx.fill()
 ctx.closePath()

 ctx.beginPath()
 ctx.lineTo(xC+((14*size)-(5*size)),yC-15)
 ctx.arc(xC, yC-15,(r*size)-(5*size) , 1.003*Math.PI, 0.04)
 ctx.stroke()
 ctx.fill()
 ctx.closePath()
 
}

for(let x= 50; x<450; x= x+50){
    dibujarpeón(x, 100, 14, 2.1, "blue")
}


// dibujo peón blanco
function dibujarotropeón( xC, yC, r,size, color){
 ctx.beginPath()
 ctx.strokeStyle="black"
 ctx.fillStyle=color
 ctx.lineWidth=2
 ctx.lineTo(xC+((14*size)-(5*size)),yC-97)
 ctx.arc(xC, yC-97,(r*size)-(5*size) , 1.003*Math.PI, 0.04)
 ctx.stroke()
 ctx.fill()
    
 ctx.beginPath()
 ctx.arc(xC, yC-111, (r*size)-(8*size), 0.8*Math.PI,0.6)
 ctx.stroke()
 ctx.fill()
 
 ctx.beginPath()
 ctx.arc(xC, yC-125, (r*size)-(10*size), 0.75*Math.PI, 0.8)
 ctx.stroke()
 ctx.fill()
 
}

for(let x= 50; x<450; x= x+50){
    dibujarotropeón(x, 500, 14, 2.1, "red")
}