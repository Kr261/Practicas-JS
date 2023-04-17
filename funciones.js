// Función para convertir una cadena de texto al estilo Capitalized.

let texto = "kristin"

function capitalizarTexto(){
    let textoCapitalizado = texto.charAt(0).toUpperCase();
    let textoNormal = texto.slice(1);

    let textoCompleto = textoCapitalizado + textoNormal
    console.log(textoCompleto)
}
capitalizarTexto(); 

// Funcion  que reciba dos números y calcule la suma. Usa declaracion de funcion.

function sumarNumeros(numA, numB){
    return numA + numB;
}

const resultado = sumarNumeros(2,3);
console.log(resultado)

// Funcion que reciba una palabra y devuelva un array con las letras de esa palabra. Usa funcion flecha.

let otroTexto = "Kristin"

const devolverArray = () => 
texto.split("");

let nuevoArray = devolverArray(otroTexto)
console.log(nuevoArray)


