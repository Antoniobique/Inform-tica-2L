function promedio(arraynotas)
let cantidadnotas;
do{
    cantidadnotas= parseFloat(prompt("Ingrese cantidad de las notas"))
} while (isNaN(cantidadnotas)|| cantidadnotas<1)
let a=0
while(a<cantidadnotas){
    let Notas= parseFloat(prompt("Ingrese las notas"))
    if (Notas>=0 && Notas<=10){
        a=a+1
        arraynotas.push(notas)
    }
}
let long=0
long= arraynotas.length
let i=0
let suma=0
while(i<long){
    suma= suma + arraynotas[i];
    i= i+1
}
let promedio=0;
promedio= suma/long;
return(promedio)

let arraynotas=[]
alert(`El promedio es ${promedio(arraynotas)}`);