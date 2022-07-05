let limSup = parseInt(prompt('Ingresar cantidad de números que quiere sumar'))

let suma = 0
for(let  i = 1; i <= limSup; i++){
    let num = parseInt(prompt('Ingrese el numero a sumar'))
    suma += num

}

console.log(suma)
alert('La suma total es: ' + suma)