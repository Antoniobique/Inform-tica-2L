let numeronotas;
let nota;
do{
    numeronotas= pasreFloat(prompt("Ingresa el número de tus notas"))
} while (numeronotas<=0||numeronotas%1!=0)

let numeronotasinicial=0
let notas=[0]
do{
    nota=parseFloat(prompt("Ingresa tus notas"))
    numeronotasinicial= numeronotasinicial+1
    notas.push(nota)
} while (nota<0||nota>10||numeronotasinicial!=numeronotas)
console.log (notas)

let N=0
let Suma=0
while (N<=numeronotas){
    Suma=Suma+notas[N]
    N= N+1
}
console.log(suma/numeronotas)