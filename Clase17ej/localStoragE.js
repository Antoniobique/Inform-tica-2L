let contador=0
if(contador==null){
    contador==contador
    localStorage.setItem("contador", JSON.stringify(contador))
    console.log("no hay contador")
}else{
    contador= JSON.parse(localStorage.getItem("contador"))
contador= contador+1;
localStorage.setItem("contador", JSON.stringify(contador))
console.log("si hay contador")
}
alert(`usted ha ingresado ${contador} veces`)

