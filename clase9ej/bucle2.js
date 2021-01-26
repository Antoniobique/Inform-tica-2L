let numero=0;
let sumando2=5;
while (sumando2<=10000)
{
    numero=sumando2+numero;
    sumando2= sumando2+5;
    
}
console.log(`La suma es: ${numero}`)
alert(numero);