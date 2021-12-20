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

const iconosMarqueting = [
    { name: 'mail', icon: 'fa-mail-bulk' },
    { name: 'poll', icon: 'fa-poll' },
    { name: 'money', icon: 'fa-comment-dollar' },
    { name: 'bullhorn', icon: 'fa-bullhornr' },
    { name: 'bullseye', icon: 'fa-bullseye' },
    { name: 'lightbulb', icon: 'fa-lightbulb' },
    { name: 'mail', icon: 'fa-mail-bulk' },
    { name: 'poll', icon: 'fa-poll' },
    { name: 'money', icon: 'fa-comment-dollar' },
    { name: 'bullhorn', icon: 'fa-bullhornr' },
    { name: 'bullseye', icon: 'fa-bullseye' },
    { name: 'lightbulb', icon: 'fa-lightbulb' }
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
let seconds = 1;       //Declaracion de los segundos
let secondsInicial = seconds;
let time;
let tiempoFinal;