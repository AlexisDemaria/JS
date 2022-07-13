// Inicializo arreglos.
const nombres = []
const edades = []
// Ingresar cantidad de nombres a cargar, si se ingresa 0 o menor, se detiene la carga.
let cantNombres = parseInt(prompt('Ingresar cantidad de nombres que quiera cargar'))
if (cantNombres <= 0){
    alert('No puede ingresar 0 nombres')
    
}else{
    // Ingresar nombres y agregarlos al arreglo nombres.
    do{
        let ingresarNombre = prompt("Ingresar nombre")
        nombres.push(ingresarNombre)

    }while(nombres.length != cantNombres)

    // Ingresar edades y agregarlos al arreglo edad.
    do{
        let ingresarEdad = prompt("Ingresar edad")
        edades.push(ingresarEdad)

    }while(edades.length != cantNombres)

    // Mostrar los nombres y edades ingresados.
    alert('Nombres:' + ("\n") + ("\n") + nombres.join("\n") + ("\n") + ("\n") + 'Edades:' + ("\n") + ("\n") + edades.join("\n"))

}