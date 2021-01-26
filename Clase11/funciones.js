fuction saludar(nombre) {
    alert (`Hola ${nombre}, que tenga un bbuen día`)
}
saludar("Antonio");

fuction correo(nombre1,nombre2,apellido1,apellido2) {
    //separar el nombre en sus partes//
    let partes = nombre.split("")
    if(partes.length==4) {
    return(
        partes[0] + partes[1] + "." + partes[2] + partes[3] + "@gimnasiovolta.edu.co";
    )
    }
}