//  JS2 Aula 4: Listas.
//  Resolviendo la recursividad cuando se han sorteado todos los números posibles.

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
/*  1.  Creo una variable numeroMaximo() para poder modificar el intervalo de numeros posibles a gusto. */
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    // La condición se cumple.
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `¡Felicitaciones! Has acertado el número secreto en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}.`);   
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'Lo siento, no has acertado. El número secreto es menor.');
        } else {
            asignarTextoElemento('p', 'Lo siento, no has acertado. El número secreto es mayor.');
        }
        intentos++;
        limpiarCampo();
    }
    return;
}

function limpiarCampo() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*10)+1;
  
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si se han sorteado todos los números posibles.
/*  1.  Creo un if-else para comparar el '.length' de la listaNumerosSorteados y el numeroMaximo();. */
    if (listaNumerosSorteados.length == numeroMaximo) {
/*  2.  Arrojo un mensaje en la pantalla con el elemento asignarTextoElemento();*/
        asignarTextoElemento('p', 'Ya se han sorteado todos los números posibles.');
    } else {
    //  Si el número generado está en la lista.
        if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    // Si el número generado no está en la lista.
        } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}.`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    // console.log(numeroSecreto);
}

function reiniciarJuego() {
    limpiarCampo();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();