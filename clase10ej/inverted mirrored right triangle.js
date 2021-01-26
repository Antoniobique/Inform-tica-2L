let ancho1;
let alto1;
do {
  ancho1 = parseFloat(prompt("Ingrese el ancho"));
} while (isNaN(ancho1)||ancho1 < 1);

do {
  alto1 = parseFloat(prompt("Ingrese el alto"));
} while (isNaN(alto1)||alto1 < 1);

let nLinea1 = 0;
while (nLinea1 < alto1) {
  let linea1 = "";
  let nColumna1 = 0;
  while (nColumna1 < ancho1) {
    if (nColumna1>=nLinea1) {
      linea1 = linea1 + "*";
    } else {
      linea1 = linea1 + " ";
    }
    nColumna1 = nColumna1 + 1;
  }
  console.log(linea1);
  nLinea1 = nLinea1 + 1;
}