let a= parseFloat(prompt ("Ingrese a"));
let b= parseFloat(prompt ("Ingrese b"));
console.log (`La suma es: ${ a + b }`);
console.log (`La resta es: ${ a - b }`);
console.log (`La multiplicación es: ${ a * b }`);
console.log (`La división es: ${ a / b }`);
console.log (`El módulo es: ${ a % b }`);

alert(`La suma es: ${ a + b }`)
alert(`La resta es: ${ a - b }`)
alert(`El  producto es: ${ a * b }`)
if(b==0){
    alert("la división y el residuo no son posibles")
}
else{
    alert(`la división es: ${a/b}`)
    alert(`el residuo es: ${a%b}`)
}





