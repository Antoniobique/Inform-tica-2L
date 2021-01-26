let masa;
let estatura;
let bmi;
do {
    masa = parseFloat(prompt("Ingrese su masa"))
} while (masa <= 0|| isNaN(masa));
do {
    estatura = parseFloat(prompt("Ingrese su estatura"))
} while (isNaN(estatura)|| estatura <= 0 );

bmi= masa/(estatura*estatura)

if(bmi<18.5)
{alert("Usted está bajo el peso común")}
else if(bmi<25) 
{alert("Usted tiene un peso común")}
else if(bmi<30)
{alert("Usted tiene sobrepeso")}
else
{alert("Usted tiene obesidad")}
