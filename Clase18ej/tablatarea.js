let planetas = JSON.parse(localStorage.getItem("planetas"));
if (planetas == null) planetas = [];

let tabla = document.querySelector('#work')
function llenarTabla(){
    let contenidoTabla = '<tr><th>Materia</th><th>Descripción</th><th>Fecha</th></tr>'
    for (tarea of tareas){
        contenidoTabla = contenidoTabla + `<tr><td>${tarea.Materia}</td><td>${tarea.Descripción}</td>
        <td> ${tarea.Fecha}</td></tr>`
    }
    tabla.innerHTML = contenidoTabla;
}
localStorage.setItem("tareas",JSON.stringify(tareas))
let form = document.querySelector("#formularioAdd");

function addTarea(){
    
    let materiaNueva = document.querySelector("input[name=materia]").value

    let descripciónNueva = document.querySelector("input[name=descripción]").value
   
    let fechaNueva = document.querySelector("input[name=fecha]").value
   
    let tareaNueva = {materia:materiaNueva, descripción:descripciónNueva, fecha:fechaNueva}
    console.log("Ahora voy a añadir la siguiente tarea");
    console.log(tareaNueva)

    lista.push(tareaNueva)
    localStorage.setItem("tareas",JSON.stringify(tareas))
    llenarTabla();
    return false;
}

form.onsubmit = addTarea;


let formBorrar = document.querySelector("#formularioDelete");

llenarTabla();

function deleteTarea(){

let nombretareaABorrar = document.querySelector("#formularioDelete input[name=materia]").value

    
    console.log("Ahora voy a borrar la siguiente tarea");
    console.log(nombretareaABorrar)

    
    let aBorrar = tareas.findIndex(tarea => tarea.materia == nombretareaABorrar);
   
    if(aBorrar == -1) alert("Tarea no encontrada");
   
    planetas.splice(aBorrar, 1);
    localStorage.setItem("tareas",JSON.stringify(tareas))
    llenarTabla();
    
    return false;
}
formBorrar.onsubmit = deleteTarea;




