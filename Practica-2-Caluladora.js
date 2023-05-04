// Funcion para cada operacion aritmetica

const sumar = (numA, numB) => {
    const resultadoSuma = numA + numB;
    return resultadoSuma;
}

const restar = (numA, numB) => {
    const resultadoResta = numA - numB;
    return resultadoResta;
}

const multiplicar = (numA, numB) => {
    const resultadoMulti = numA * numB;
    return resultadoMulti;
    
}

const dividir = (numA, numB) => {
    const resultadoDiv = numA / numB;
    return resultadoDiv;
}

const potencia = (numA, numN) => {
    const resultadoPotencia = numA ** numN;
    return resultadoPotencia;
}

// Llamar cada funcion con parametros definidos

console.log("El resultado de la suma es: " + sumar(2,5))
console.log("El resultado de la resta es: " + restar(25,6))
console.log("El resultado de la multiplicación es: " + multiplicar(4,8))
console.log("El resultado de la división es: " + dividir(66,33))
console.log("El resultado de la potencia es: " + potencia(5,2))

// Funcion para sumar los elementos de un array 

let arrayASumar = [2,3,5,6];

const sumarArray = (array) => {
let suma = 0
  for(i = 0; i< array.length; i++) {
    suma += array[i];
  }   
    return suma;
}

let otroArray = [3,5,6,7,9]

console.log("La suma de los elementos del array es: " + sumarArray(arrayASumar))
console.log(sumarArray(otroArray))