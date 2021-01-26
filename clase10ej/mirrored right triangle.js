let ancho3;
let alto3;
do {
  ancho3 = parseFloat(prompt("Ingrese el ancho"));
} while (isNaN(ancho3)||ancho3 < 1);

do {
  alto3 = parseFloat(prompt("Ingrese el alto"));
} while (isNaN(alto3)||alto3 < 1);

let nLinea3 = 0;
while (nLinea3 < alto3) {
  let linea3 = "";
  let nColumna3 = 0;
  while (nColumna3 <= ancho3) {
    if (nColumna3+nLinea3>ancho3) {
      linea3 = linea3 + "*";
    } else {
      linea3 = linea3 + " ";
    }
    nColumna3 = nColumna3 + 1;
  }
  console.log(linea3);
  nLinea3 = nLinea3 + 1;
}