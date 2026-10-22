function visualError(id, mensaje){
    document.getElementById(id).textContent = mensaje;
}

function quitError(id){
    document.getElementById(id).textContent=''
}

/* Nombre y apellidos */

function valNom(valor, errorId){
    valor = valor.trim();
    if (valor.length === 0){
        visualError(errorId, 'Por favor, rellena el campo');
        return false;
    }

    if (valor.length < 3){
        visualError(errorId, 'Tu nombre debe de tener al menos 3 caracteres')
        return false;
    }

    quitError(errorId);
    return true;
}

function valNAp1(valor, errorId){
    valor = valor.trim();
    if (valor.length === 0){
        visualError(errorId, 'Por favor, rellena el campo');
        return false;
    }

    if (valor.length < 2){
        visualError(errorId, 'Tu apellido debe de tener al menos 3 caracteres');
        return false;
    }

    quitError(errorId);
    return true;
}

function valNAp1(valor, errorId){

    /*En este caso, hay gente que puede contactar que solo tiene un apellido*/

    if (valor.length < 2){
        visualError(errorId, 'Tu apellido debe de tener al menos 3 caracteres');
        return false;
    }

    quitError(errorId);
    return true;
}

/* Correo y contraseña */

function valEmail(valor){
    valor = valor.trim();

    if (valor.length === 0){
        visualError(errorId, 'El correo no puede estar vacío');
        return false;
    }

    if (valor.length < 6){
        visualError(errorId, 'El correo debe tener al menos 6 caracteres');
        return false;
    }

    if (valor.indexOf('@') === 0 || valor.indexOf('@') === valor.length -1){
        visualError(errorId, 'El correo no puede no contener @, ni tenerla al inicio');
        return false;
    }

    if (valor.indexOf(' ') !== -1){
        visualError(errorId, 'El correo no puede contener espacios')
        return false;
    } 
    
    const dondeArroba = valor.indexOf('@');

    if (valor.indexOf('.', dondeArroba) === -1){
        visualError(errorId, 'El dominio debe de tener un .');
        return false;
    }

    const extension = valor.toLowerCase();

    if (
        extension.indexOf('.com') === -1 &&
        extension.indexOf('.es') === -1
    ){
        visualError(errorId, 'El deominio debe terminar con .com o .es');
        return false;
    }

    quitError(errorId);
    return true;
}

function valPas(valor){
    valor = valor.trim();

    if (valor.length === 0){
        visualError(errorId, 'La contraseña no puede estar vacía');
        return false;
    }

    if (valor.length < 8){
        visualError(errorId, 'La contraseña debe tener al menos 8 caracteres');
        return false;
    }

    let letra = false;
    let numero = false;

    for (let i = 0; i < valor.length; i++) {

        if (valor[i] >= 'a' && valor[i] <= 'z') {
        letra = true;
        }

        if (valor[i] >= '0' && valor[i] <= '9') {
        numero = true;
        }
    }

    if (!letra){
        visualError(errorId, 'La contraseá debe contener al menos una letra');
        return false;
    }

    if (!numero){
        visualError(errorId, 'La contraseña debe contener al menos un número');
        return false;
    }

    quitError(errorId);
    return true;

}

function valEdad(valor){
    valor = valor.trim();

    if(valor.length === 0){
        visualError(errorId, 'Por favor rellena el campo');
        return false;
    }

    if (valor < 18 || valor > 99){
        visualError(errorId, 'La edad debe estar entre 18 y 99 años');
        return false;
    }

    quitError(errorId);
    return true;

}

function valTelef(valor){
    valor = valor.trim();

    if (valor.length === 0){
        visualError(errorId, 'El teléfono es obligatorio');
        return false;
    }

    if (valor.length !== 9){
        visualError(errorId, 'El teléfono debe tener 9 dígitos');
        return false;
    }

    quitError(errorId);
    return true;
}

function valGener(){
    const marcado = document.querySelector('input[name="genero"]:checked');

    if (marcado === null){
        visualError(errorId, 'Debes seleccionar un género');
        return false;
    }

    quitError(errorId);
    return true;
}