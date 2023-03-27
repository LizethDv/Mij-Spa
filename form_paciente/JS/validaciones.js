
export function valida(input){
    const tipoDeInput = input.dataset.tipo;
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input)
    }

    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = '';
    } else{
        input.parentElement.classList.add("input-container--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeError(tipoDeInput, input);
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
];

const mensajeDeError = {
    nombre: {
        valueMissing: "Necesitaremos tu nombre."
    },
    email: {
        valueMissing: "Olvidaste tu correo.",
        typeMismatch: "Verifica la información."
    },
    password: {
        valueMissing: "No olvides escribir una contraseña.",
        patternMismatch: "Incluye una mayúscula, un número y omite caracteres especiales. Verifica que sean al menos 6 posiciones, máximo 12."
    },
    nacimiento: {
        valueMissing: "Este campo no puede estar vacío.",
        customError: "Debes tener al menos 18 años de edad para registar tu cuenta personal."
    },
    numero:{
        valueMissing: "Este campo no puede estar vacío.",
        patternMismatch: "El formato requerido son 10 números."
    }
}

const validadores = {
    nacimiento: input => validarNacimiento(input)
}


function mostrarMensajeError(tipoDeInput, input){
    let mensaje = "";
    tipoDeErrores.forEach(error =>{
      if(input.validity[error]) {
        mensaje = mensajeDeError[tipoDeInput][error];
      } 
    })
    return mensaje;
}

function validarNacimiento(input){
    const fechaCliente = new Date(input.value);
    let mensaje = ""
    if(!mayorDeEdad(fechaCliente)){
        mensaje = "Debes tener al menos 18 años de edad para registar tu cuenta personal."
    };

    input.setCustomValidity(mensaje)
}

function mayorDeEdad(fecha){
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
        fecha.getUTCFullYear() + 18, 
        fecha.getUTCMonth(), 
        fecha.getUTCDate()
    ); 
    return diferenciaFechas <= fechaActual;
}
