let cantidad;
do {
    cantidad = parseFloat(prompt("Ingrese el cantidad"));
} while (isNaN(cantidad)||cantidad < 1);



let nLinea = 0;
while (nLinea < cantidad) {
    let linea = "";
    let nColumna = nLinea

    while (nColumna < cantidad-1) {

        linea = linea + " ";
        nColumna=nColumna+1;

    }
    nColumna=0
    while (nColumna <= nLinea){
        if(nLinea==cantidad-1||nColumna==0||nColumna==nLinea){
            linea = linea + "*";
        }
        else{
           linea = linea + " ";

        }
        nColumna=nColumna+1

    }

    linea=linea+" ";
    console.log(linea);
    nLinea = nLinea + 1;
 }