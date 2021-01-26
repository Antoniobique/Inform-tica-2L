// este programa tiene un bug
let x= prompt ("Ingrese x");
let y= prompt ("Ingrese y")
let z= x+y;
console.log(z);
// este es el programa corregido
let x= parseFloat(prompt ("Ingrese x"));
let y= parseFloat(prompt ("Ingrese y"));
let z= x+y;
//alert genera un cuadro de diálogo para que el usuario lo vea
alert(z);
// si el ususario no ingresa números válidos el resultado será NaN. Not a Nuber