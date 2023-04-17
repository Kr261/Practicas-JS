// Función que reciba un nombre y una edad y responda indicando 
//si tiene permiso para tomar cerveza. Usa expresion de función.

const verificarEdad = function(nombre, edad) {
    if (edad >= 18) {
        alert("Tiene permiso para tomar cerveza.")
    }
    else{
        alert("No tiene permiso para tomar cerveza.")
    }
}
let nombre = prompt("Por favor, ingrese su nombre")
let edad = prompt("Por favor, ingrese su edad.")

verificarEdad(nombre,edad);







