//Iconos de daw
const iconosDaw = [
    { name: 'js', icon: 'fa-js-square' },
    { name: 'css', icon: 'fa-css3-alt' },
    { name: 'html', icon: 'fa-html5' },
    { name: 'php', icon: 'fa-php' },
    { name: 'fiddle', icon: 'fa-jsfiddle' },
    { name: 'bootstrap', icon: 'fa-bootstrap' },
    { name: 'js', icon: 'fa-js-square' },
    { name: 'css', icon: 'fa-css3-alt' },
    { name: 'html', icon: 'fa-html5' },
    { name: 'php', icon: 'fa-php' },
    { name: 'fiddle', icon: 'fa-jsfiddle' },
    { name: 'bootstrap', icon: 'fa-bootstrap' },
]

const iconosDam = [
    { name: 'android', icon: 'fa-android' },
    { name: 'java', icon: 'fa-java' },
]

const tablero = document.querySelector("#tablero");

//LAS CARTAS RESUELTAS
const cartasResueltas = document.querySelectorAll(".resuelto");

let cartaVolteada = false;
let primeraCarta, segundaCarta;
let res;
let resultado = 0;
let puntuacion = 0;

let minute = 0;        //Declaracion de los minutos
let seconds = 20;       //Declaracion de los segundos
let secondsInicial = seconds;
let time;
let tiempoFinal;

document.addEventListener('DOMContentLoaded', () => {
    menu();
});

//Juego modo facil
function juegoFacil() {
    divCentrar = document.getElementById("centrar");

    document.getElementById('memory-game').removeChild(divCentrar);

    for (let i = 0; i < 12; i++) {
        card();
    }

    mostrarEventos();

    mezclar(iconosDaw);     //Cuando tenga dos sets habra un if

    timedCount();
}

//Juego modo dificil
function juegoDificil() {
    divCentrar = document.getElementById("centrar");

    document.getElementById('memory-game').removeChild(divCentrar);

    for (let i = 0; i < 12; i++) {
        cartasDificil();
    }

    mostrarEventos();

    mezclar(iconosDaw);     //Cuando tenga dos sets habra un if

    timedCount();
}


// 
function gameOver() {
    //Recorro 12 veces la funcion de borrar cartas
    for (let i = 0; i < 12; i++) {
        removeCards();
    }

    tiempoFinal = secondsInicial - seconds;

    clearTimeout(time);
    document.getElementById("timer").innerHTML = " ";

    pantallaFinal();

}

// Borrar cartas al final del juego
function removeCards() {
    if (document.getElementById("card") != null) {
        card = document.getElementById("card");

        document.getElementById('memory-game').removeChild(card);
        
    }
}



