let edadCliente = prompt("Por favor, ingrese su edad antes de realizar la compra.")

let decisión;
if(edadCliente < 18) {
    alert("Lo sentimos, no cuenta con la edad suficiente pra realizar esta compra.")
}
else if (edadCliente >= 18) {
    alert("Felicidades, cuenta con la edad para realizar esta compra exitosamente.")
}
else{
    alert("Por favor, indique una edad válida.")
}