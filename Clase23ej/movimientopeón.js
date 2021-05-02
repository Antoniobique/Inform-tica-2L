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
let x= 0;
let Vx= 40; // px/s
let dT= 20;
function moverydibujar(){
ctx.clearRect(0, 0, 800, 800);
let dx=(dT/1000)*Vx
x= x+dx
dibujarpeón(x, 400, 14, 2.1, "blue")
}

window.setInterval( moverydibujar, dT)

let y=50;
let Vy= 200; //px/s
let dT2=20;
function mover(){
let dy= (dT2/1000)*Vy
y= y+ dy
dibujarpeón(400, y, 14, 2.1, "red")
}
window.setInterval( mover, dT2)

let x2=0;
let Vx2= 100; //px/s
let dT3=20;
function moverydibuja(){
let dx2= (dT3/1000)*Vx2
x2= x2+ dx2
dibujarpeón(x, x, 14, 2.1, "yellow")
}
window.setInterval( moverydibuja, dT3)

