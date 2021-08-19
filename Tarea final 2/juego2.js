let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

let radio = 7.5;
let x = canvas.width/2;
let y = canvas.height-35;
let dx = 3;
let dy = -3;
let hpala = 9;
let anchopala = 65;
let X = (canvas.width-anchopala)/2;
let rightPressed = false;
let leftPressed = false;
let desplazamientotapa = 35;
let desplazamientoladrilloizquierda = 35;
let puntaje = 0;
let vidas = 3;
let cuentaladrillos = 6;
let cuentacolumnaladrillos= 4;
let ancholadrillo = 76;
let hladrillo = 25;
let rellenoladrillo = 10;


let ladrillos = [];
for(i=0; i<cuentacolumnaladrillos; i++) {
    ladrillos[i] = [];
    for(r=0; r<cuentaladrillos; r++) {
        ladrillos[i][r] = { x: 0, y: 0, status: 1 };
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}
function mouseMoveHandler(e) {
    var relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 && relativeX < canvas.width) {
        X = relativeX - anchopala/2;
    }
}
function detecciónchoque() {
    for(i=0; i<cuentacolumnaladrillos; i++) {
        for(r=0; r<cuentaladrillos; r++) {
            let a = ladrillos[i][r];
            if(a.status == 1) {
                if(x > a.x && x < a.x+ancholadrillo && y > a.y && y < a.y+hladrillo) {
                    dy = -dy;
                    a.status = 0;
                    puntaje++;
                    if(puntaje == cuentaladrillos*cuentacolumnaladrillos) {
                        alert("GANASTE, FELICIDADES ;)");
                        document.location.reload();
                    }
                }
            }
        }
    }
}

function dibujarpelota() {
    ctx.beginPath();
    ctx.arc(x, y, radio, 0, Math.PI*2);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();
}
function dibujarpala() {
    ctx.beginPath();
    ctx.rect(X, canvas.height-hpala, anchopala, hpala);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function dibujarladrillos() {
    for(i=0; i<cuentacolumnaladrillos; i++) {
        for(r=0; r<cuentaladrillos; r++) {
            if(ladrillos[i][r].status == 1) {
                let ladrilloX = (r*(ancholadrillo+rellenoladrillo))+desplazamientoladrilloizquierda;
                let ladrilloY = (i*(hladrillo+rellenoladrillo))+desplazamientotapa;
                ladrillos[i][r].x = ladrilloX;
                ladrillos[i][r].y = ladrilloY;
                ctx.beginPath();
                ctx.rect(ladrilloX, ladrilloY, ancholadrillo, hladrillo);
                ctx.fillStyle = "orange";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}
function dibujarpuntaje() {
    ctx.font = "14px Confortaa";
    ctx.fillStyle = "grey";
    ctx.fillText("Puntaje: "+puntaje, 8, 20);
}
function dibujarvidas() {
    ctx.font = "14px Confortaa";
    ctx.fillStyle = "grey";
    ctx.fillText("Vidas: "+vidas, canvas.width-65, 20);
}

function dibujar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dibujarladrillos();
    dibujarpelota();
    dibujarpala();
    dibujarpuntaje();
    dibujarvidas();
    detecciónchoque();
    
    if(x + dx > canvas.width-radio || x + dx < radio) {
        dx = -dx;
    }
    if(y + dy < radio) {
        dy = -dy;
    }
    else if(y + dy > canvas.height-radio) {
        if(x > X && x < X + anchopala) {
            dy = -dy;
        }
        else {
            vidas--;
            if(!vidas) {
                alert("FIN DEL JUEGO :(");
                document.location.reload();
            }
            else {
                x = canvas.width/2;
                y = canvas.height-30;
                dx = 3;
                dy = -3;
                X = (canvas.width-anchopala)/2;
            }
        }
    }
    
    if(rightPressed && X < canvas.width-anchopala) {
        X += 7;
    }
    else if(leftPressed && X > 0) {
        X -= 7;
    }
    
    x += dx;
    y += dy;
    requestAnimationFrame(dibujar);
}

dibujar();