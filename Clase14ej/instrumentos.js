let instrumentos= [
    {nombre:"guitarra",tipo:" Instrumento de cuerda",músico:"Robert Johnson",imagen:"https://guitarrasgarridopozuelo.com/wp-content/uploads/2020/03/tipo-de-guitarra-flamenca.jpg"},
    {nombre:"piano",tipo:" Instrumento de cuerda",músico:"Glenn Gould",imagen:"https://www.superprof.co/blog/wp-content/uploads/2019/10/PIANO-COMPLETO-3-1060x598.jpg"},
    {nombre:"pandereta",tipo:" Instrummento de percusión",músico:"Alba Gutiérrez",imagen:"https://images-na.ssl-images-amazon.com/images/I/41wYwkpqxqL._AC_.jpg"},
    {nombre:"Tambor",tipo:" Instrumento de percusión",músico:"Neil Peart",imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrwjPmdHbCMuTgv7KgzBDtryn6YlKvE2OBmQ&usqp=CAU"},
    {nombre:"Flauta",tipo:" Instrumento de viento",músico:"Marcel Moyse",imagen:"https://yamahamusical.co/tienda/913-tm_thickbox_default/flauta-dulce-alto-27iii.jpg"},
    {nombre:"Trompeta",tipo:" Instrumento de viento",músico:"Lee Morgan",imagen:"https://images-na.ssl-images-amazon.com/images/I/71l6xKqHLCL._AC_SX425_.jpg"}
]
let tabla= document.querySelector(`#instrumentos`)
console.log(tabla)
let contenidotabla=`<tr>Nombre</th><th>Tipo</th><th>músico</th><th>imagen</th></tr>`
for(instrumento of instrumentos) {
contenidotabla+=<tr><td>${instrumento.nombre}</td><td>${instrumento.tipo}</td><td>${instrumento.músico}</td><td><img width="500 px" src="${instrumento.imagen}" alt="foto del instrumento"></img></td></tr>
}
tabla.innerHTML= contenidotabla;





