function areaCirc(r)
{
    return Math.pow(r , 2) * Math.PI
}
let r= prompt("Ingrese r")
//
function volEsfera(r)
{
    return 4 * Math.PI * Math.pow (r , 2)
}
// 
function max(a , b)
{
    return Math.max (a , b)
}
let a= prompt("Ingrese a")
let b= prompt("Ingrese b")
//
function maslarga(p1 , p2){
    if(p1.length>p2.length){
        return p1
    }else{
        return p2
    }
}
let p1= prompt("Ingrese p1")
let p2= prompt("Ingres p2")
alert(`La palabra más larga es ${maslarga(p1 , p2)}`)
//
function imprimirmaslarga(palabra1 , palabra2){
    if(palabra1.length>palabra2.length){
        return palabra1
    }else{
        return palabra2
    }
}
let palabra1= prompt("Ingrese la palabra1")
let palabra2= prompt("Ingrese la palabra2")
console.log(`La palabra más larga es${imprimirmaslarga(palabra1 , palabra2)}`)
//
