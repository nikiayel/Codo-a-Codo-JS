//Selectores para capturar elementos del html
//Variables necesarias para nuestro algoritmo
let boton = document.getElementById("botonEnv")
let categoria = document.getElementById("categoria")
let cantidad = document.getElementById("cantidad")
let valorEntrada = 200
let descEstudiante = 0.8
let descTrainee = 0.5
let descJunior = 0.15
let descuento 
let mensaje = document.getElementById("demo")

//Verifica que en cantidad haya al menos un numero, de lo contrario la cantidad de entradas será 1
cantidad.addEventListener("change", function() {
    if (cantidad !== "") {
        
        return valorEntrada = valorEntrada * Number(cantidad.value)
    }
    
console.log(valorEntrada);
})


//Escuchador de eventos con click en el boton, verificamos cada caso, realizamos descuento, restamos el descuento
//Se muestra en la vista el valor que debe pagar la persona
boton.addEventListener("click", function () {

    switch (categoria.value) {
        case "1":
            //Genera el valor del descuento basandose en la categoria
            descuento = valorEntrada * descEstudiante
            //Realiza descuento al valor normal de la entrada segun categoria
            valorEntrada = valorEntrada - descuento
            //Agrega en la vista el valor de la entrada
            mensaje.innerHTML += valorEntrada
            break;
        case "2":
            descuento = valorEntrada * descTrainee
            valorEntrada = valorEntrada - descuento            
            mensaje.innerHTML += valorEntrada

            break;   
        case "3":
            descuento = valorEntrada * descJunior
            valorEntrada = valorEntrada - descuento
            mensaje.innerHTML += valorEntrada

            break;    

        default:
            //Si no ingresa ninguna categoria se le devuelve por defecto mensaje de error
            mensaje.innerHTML = "Debe ingresar una categoria"
            break;
    
}

})

