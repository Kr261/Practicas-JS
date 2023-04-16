let numA = prompt("Ingrese el primer numero.")
let numB = prompt("Ingrese el segundo numero.")
let operacion = prompt('Ingrese la operación a realizar: 1-Sumar, 2-Restar, 3-Multiplicar, 4-Dividir')

let resultado;
if (operacion == 1){
    resultado = parseInt(numA, 0) + parseInt(numB, 0)
    alert("El resultado es " + resultado)
}
else if (operacion == 2){
    resultado = parseInt(numA, 0) - parseInt(numB, 0)
    alert("El resultado es " + resultado)
}
else if (operacion == 3){
    resultado = parseInt(numA, 0) * parseInt(numB, 0)
    alert("El resultado es " + resultado)
}
else if (operacion == 4){
    resultado = parseInt(numA, 0) / parseInt(numB, 0)
    alert("El resultado es " + resultado)
}
else {
    alert("Seleccionar una operación válida según los parametros indicados.")
}