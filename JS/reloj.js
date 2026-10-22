/*
Reloj Interactivo
*/

function reloj_inter() {

    // Declaramos las variables
    let mifecha = new Date();
    let horas = mifecha.getHours();
    let mins = mifecha.getMinutes();
    let secs = mifecha.getSeconds();

    // Añadimos un '0' delante de los números de una cifra
    if(horas<10) horas = "0" + horas;
    if(mins<10) mins = "0" + mins;
    if(secs<10) secs = "0" + secs;

    // Le damos al texto la función
    document.getElementById("reloj").textContent =  horas + ":" + mins + ":" + secs;
}

reloj_inter();
setInterval(reloj_inter, 1000);