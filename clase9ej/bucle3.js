let a=3
let e=5
let suma=0
let multiplicación= a*e

do { 
    suma= suma+multiplicación
    a= a + 3;

    multiplicación= a*e
   }
while(a*e<=10000)

alert(`La suma es: ${suma}`)
