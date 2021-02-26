let tareas =[
    {materia:"Matemáticas",descripcion:"Hacer gráficos",fecha:"2021-03-01"},
    {materia:"Música",descripcion:"Hacer canción",fecha:"2021-03-17"},
    {materia:"Historia",descripcion:"Hacer línea del tiempo",fecha:"2021-03-18"}
]

let tabla= document.querySelector('#tareas')
function llenartabla(){
    let contenido= '<tr><th>Materia</th><th>Descripcion</th><th>Fecha</th></tr>'
    for (tarea of tareas){
        contenido= contenido + `<tr><td>${tarea.materia}</td><td>${tarea.descripcion}</td><td>${tarea.fecha}></td></tr>`
    }
  tabla.innerHTML= contenido
}
let form= document.querySelector('#formularioAdd');
function nuevaTarea(){
    let materiaNuevo= document.querySelector("input[name=materia]").value
    let descripcionNuevo= document.querySelector("input[name=descripcion]").value
    let fechaNuevo= document.querySelector("input[name=fecha]").value
    let tareaNueva={materia:materiaNuevo, descripcion:descripcionNuevo, fecha:fechaNuevo}
    console.log(tareaNueva)
    tareas.push(tareaNueva)
    llenartabla();
    return false;
}
form.onsubmit=nuevaTarea
llenartabla();

