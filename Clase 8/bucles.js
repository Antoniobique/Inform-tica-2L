let total= 0;
let sumando= 1;
while (sumando <=100) 
{
    console.log(`Total:${total} . Sumando ${sumando}`);
    total= total + sumando;
    sumando= sumando + 1;
}
console.log(`La suma es: ${total}`)

//DO WHILE
let número;
do {
número= parsefloat(prompt("Ingrese un número"));
} while (isNaN(numero) ||numero < 0);
// Se le pide de nuevo el número al usuario si no es un número o si es menor a cero
console.log(`La raíz cuadrada es: ${Math.sqrt(numero)}`);