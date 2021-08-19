let canvas = document.querySelector("#miCanvas")

// escoger el contexto, en este caso el contexto 2d
let ctx = canvas.getContext("2d")

function dibujarPelota(xC, yC, r, color){
    // console.log(color)
    ctx.beginPath();
    ctx.strokeStyle = color
    ctx.fillStyle = color ;
    // console.log(ctx.strokeStyle)
    ctx.arc(xC, yC, r, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
}
let x = 300;
let y = 0;
let r = 20; //px



let vy = 10;// en px/s
let dT = 30;

function moverYDibujar(){
    ctx.clearRect(0,0, 600, 600);
    let dY = dT/1000 *vy
    y = y + dY;
    // console.log(color)
    dibujarPelota(x, y, r, color);
}

function arrancarOParar(){
    if (vy > 0){
        vy = 0;
    }
    else{
        vy = 10;
    }
}
function aumentaRadio(){
    if (r > 0){
        r = r + 1;
    }
    
}
function disminuiRadio(){
    if (r > 0){
        r = r - 1;
    }
}

window.setInterval(moverYDibujar, dT);
// Quiero que arranque o pare cuando presiones la tecla espacio.
// Para hacer esto se debe usar un event listener.

window.onkeyup = function(event){
    // La función que se ejecuta cuando el evento ocurre puede recibir un argumento. Este argumento tiene los detalles del evento.
    // La función arrancarOParar se debe ejecutar únicamente si se levanta la tecla espacio.
    console.log(event.code);
    if (event.code == "Space"){
        arrancarOParar();
    }
    // cómo identificar cuál fue la tecla presionada?
    if (event.code == "BracketRight"){
        aumentaRadio();
    }
    if (event.code =="Slash"){
        disminuiRadio();
    }
}
function cambiarColorPelota(){
    color = "#" + Math.floor(Math.random()*16777215).toString(16);
}

window.onclick = function(event){
    console.log(`Se hizo click en las coordenadas ${event.offsetX}, ${event.offsetY}`);
    console.log(`Las coordenadas de la pelota son ${x}, ${y}, y el radio es ${r}`)
    // Si se hizo click sobre la pelota
    // Cambiar su color a uno aleatorio.
}


window.onclick = function(event){
    let X= event.offsetX
    let Y= event.offsetY
    distance= Math.sqrt (Math.pow (X- x,2) + Math.pow (Y-y,2))
    if(distance <=r){
    cambiarColorPelota()
    } else {
      vy = -vy
    }
}
