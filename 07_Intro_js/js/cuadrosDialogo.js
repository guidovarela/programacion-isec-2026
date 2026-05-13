
// Cuadros de dialogo -> alert() / prompt() / confirm()
// funcion -> nombreFuncion(atributos)

let mensaje ="El sitio esta temporalmente inactivo"
// document.write(mensaje)
// alert(mensaje)
let edadIngreso = 18
if(edadIngreso == 18){
    console.log("podes ingresar")
}else{
    console.log("No podes ingresar")
}



// let nombre = prompt("Cual es tu nombre?")
// let edad = prompt("Cual es tu edad")

// Condicional
// if - else

// if(condicion){ verdadera } else { falsa}
    // if(nombre == null || edad==null){
    //     alert("El nombre y la edad no pueden estar vacios. Volve a intentarlo")
    //     nombre = prompt("Cual es tu nombre?")
    //     alert("Hola "+nombre + "y tengo "+edad+" años")
    // }else{
    //     alert("Soy  "+nombre + " y tengo "+edad+" años")
    // }

function salir(){
    let salir = confirm("Estas saliendo del sitio, queres continuar?")
    if(salir==true){
        window.close()
    }
}


