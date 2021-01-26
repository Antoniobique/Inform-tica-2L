let ancho;
let alto;
do {
    ancho= parseFloat(prompt("Ingrese el ancho"));
} while (isNaN(ancho)|| ancho<1);

do { 
    alto= parseFloat(prompt("Ingrese el alto"));
} while (isNaN(alto)|| alto<1);

let nlinea= 0;
while (nlinea<alto) {
   let linea="";
   let nColumna= 0;
   while (nColumna < ancho) {
       linea=linea + "*";
       nColumna= nColumna + 1;
   }
   console.log(linea);
   nlinea= nlinea + 1;
}