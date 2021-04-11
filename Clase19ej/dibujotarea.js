let canvas = document.querySelector("#micanvas")

// escoger el contexto, en este caso el contexto 2d
let ctx= canvas.getContext("2d")

//dibujo lápiz
ctx.fillStyle="orange"
ctx.strokeStyle="black"

//dibujo rectángulo
ctx.lineWidth= 1
ctx.strokeRect(350,198,180,35)
ctx.fillRect(350,198,180,35)

//dibujo punta
ctx.beginPath()
ctx.moveTo(313,217)
ctx.lineTo(349,198)
ctx.lineTo(349,233)
ctx.closePath()

ctx.lineWidth=1;
ctx.strokeStyle="black";
ctx.stroke();
 
ctx.fillStyle= "lightyellow";
ctx.fill()

ctx.beginPath()
ctx.moveTo(313,217)
ctx.lineTo(320,213)
ctx.lineTo(320,220)
ctx.closePath()

ctx.lineWidth=1;
ctx.strokeStyle="black";
ctx.stroke();

ctx.fillStyle="black";
ctx.fill();

ctx.beginPath()
ctx.moveTo(531, 198)// muevo el cursor a esa posicion
ctx.strokeStyle="black"
ctx.fillStyle="pink"
ctx.arc(531, 215.3, 17.9, -Math.PI/2, Math.PI/2)
ctx.stroke()
ctx.fill()

// dibujo teléfono 
ctx.fillStyle="grey"
ctx.strokeStyle="black"
ctx.lineWidth= 1
ctx.strokeRect(5,35,210,340)
ctx.fillRect(5,35,210,340)

ctx.fillStyle= "blue"
ctx.strokeStyle="black"
ctx.lineWidth= 1
ctx.strokeRect(15,50,189,290)
ctx.fillRect(15,50,189,290)

ctx.strokeStyle="black"
ctx.fillStyle="grey"
ctx.lineWidth= 7
ctx.strokeRect(100,348,20,18)
ctx.fillRect(100,348,20,18)
