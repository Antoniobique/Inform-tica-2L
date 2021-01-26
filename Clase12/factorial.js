//versión con bucles
fuction factorialbucles(n)
{
    let resultado=1
    let factor=2
    while(factor<=n)
{
    resultado=resultado*factor;
    factor=factor+1
}
return resultado;
}

//versión recursivo

fuction factorial(n)}
//Si n es menor o igual a 1 el resultado es inmediato
{
    if(n<=1)
    return 1
    else{
       console.log(`Calculando %(n * factorial(${n-1}))`)
        return n*factorial(n-1);
    }
}
