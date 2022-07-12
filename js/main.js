let limSup = parseInt(prompt('Ingrese cuantas personas quiere registrar'))
if (limSup > 0){
    let suma = 0
    let cantPersona = 0
    // let edad = 0
    for(let  i = 1; i <= limSup; i++){
        let edad = parseInt(prompt('Ingrese edad de la persona'))
        suma += edad
        cantPersona += 1

    }
    let prom = suma / cantPersona
    console.log(prom)
    alert('El promedio de edad es:  ' + prom)
}else{
    alert('No se puede calcular el promedio de edad de 0 personas')
}