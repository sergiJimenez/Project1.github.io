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

const gameFinished = false;

document.addEventListener('DOMContentLoaded', () => {

    //Array de los modulos existentes
    var modulos = ["Daw", "Dam"];

    //Crear y agregar la lista
    var selectList = document.createElement("select");
    selectList.id = "modulo";

    //Crear y agregar las opciones a la lista
    for (var i = 0; i < modulos.length; i++) {
        var option = document.createElement("option");
        option.id = modulos[i];
        option.value = modulos[i];
        option.text = modulos[i];
        option.dataset.modulo = modulos[i];
        selectList.appendChild(option);
    }

    //Label
    var etiqueta = document.createElement('label');
    etiqueta.setAttribute = ("for", "modulo");
    etiqueta.appendChild(document.createTextNode("Escoge un modulo: "));
    etiqueta.className = "etiquetaModulo";

    //Formulario
    var formulario = document.createElement('form');
    formulario.id = "modulos";

    //Boton
    var submitBtn = document.createElement("input");
    submitBtn.type = "button";
    submitBtn.className = "boton";
    submitBtn.name = "submit";
    submitBtn.value = "Continuar";
    submitBtn.id = "submit";
    submitBtn.setAttribute("onclick", "juego()");

    formulario.appendChild(etiqueta);
    formulario.appendChild(selectList);
    formulario.appendChild(submitBtn);

    //Titulo
    var titulo = document.createElement("h1");
    titulo.appendChild(document.createTextNode("Bienvenido"));
    titulo.className = "titulo";

    //Div para centrar los objetos
    var divCentrar = document.createElement('div');
    divCentrar.className = "texto";
    divCentrar.id = "centrar"

    //Juntar todo a el div para centrarlo todo
    divCentrar.appendChild(titulo);
    divCentrar.appendChild(formulario);



    //Juntar el div al html
    document.getElementById('memory-game').appendChild(divCentrar);

});

//Juego
function juego() {
    divCentrar = document.getElementById("centrar");

    document.getElementById('memory-game').removeChild(divCentrar);

    for (let i = 0; i < 12; i++) {
        card();
    }

    startFuncionalidades();

    mezclar(iconosDaw);     //Cuando tenga dos sets habra un if

    cronometro();
}


//Funcionalidades
function startFuncionalidades() {
    var resultado = document.createElement("a");
    resultado.className = "resultado";
    resultado.id = "resultado";
    resultado.dataset.resultado = 0;

    var timer = document.createElement("a");
    timer.className = "timer";
    timer.id = "timer";

    document.getElementById('body').appendChild(timer);
    document.getElementById('body').appendChild(resultado);
}

//Carta
function card() {
    var icono = document.createElement('i');
    icono.id = "carta";
    icono.className = "carta";

    let div_content = document.createElement('div');
    div_content.className = 'card-content';

    div_content.appendChild(icono);

    let div_cardback = document.createElement('div');
    div_cardback.className = 'card-face card-face--back';

    div_cardback.appendChild(div_content);


    let div_cardface = document.createElement('div');
    div_cardface.className = 'card-face card-face--front';


    let div_flip = document.createElement('div');
    div_flip.className = "card-flip";
    div_flip.id = "card-flip";
    div_flip.dataset.name;

    div_flip.appendChild(div_cardface);
    div_flip.appendChild(div_cardback);

    let div_card = document.createElement('div');
    div_card.className = "card";
    div_card.id = "card";

    div_card.appendChild(div_flip);

    document.getElementById('memory-game').appendChild(div_card);
}


//Funcion para mezclar el array
function mezclar(iconos) {

    //Llamada a funcion girar
    flipCards();

    iconos.sort(() => Math.random() - 0.5);

    const cards = document.querySelectorAll("#carta");

    let i = 0;
    cards.forEach(element => {
        element.className = "fab " + iconos[i].icon + " fa-5x";
        element.parentNode.parentNode.parentNode.dataset.name = iconos[i].name;
        element.parentNode.parentNode.parentNode.dataset.number = i;
        i++;
    });
}

let cartaVolteada = false;
let primeraCarta, segundaCarta;
let res;
let resultado = 0;


//Funcion seleccion de cartas, solo genera que se puedan dar la vuelta
function flipCards() {
    //querySelector --> marca unicamente la antesa clase y querySelectorAll --> marca todas las clases 
    const cards = document.querySelectorAll(".card-flip");

    //Le pone un event listener a todas las cartas
    for (let carta of cards) {
        carta.addEventListener("click", flip);
    }
}

//LAS CARTAS RESUELTAS
const cartasResueltas = document.querySelectorAll(".resuelto");

//Funcion voltear
function flip() {
    this.classList.add('is-flipped');

    //INTENTO DE QUITAR LA FUNCIONALIDAD DE GIRAR A LAS CARTAS RESULETAS
    for (let carta of cartasResueltas) {
        console.log(cartasResueltas);
        carta.removeEventListener("click", flip); 
    }

    if (!cartaVolteada) {
        //Primer click
        cartaVolteada = true;
        primeraCarta = this;
    }
    else {
        //Segundo click
        cartaVolteada = false;
        segundaCarta = this;

        //Chequear que sean iguales
        checkMatch();
    }
}

//Chequear que las cartas son iguales
function checkMatch() {

    const cards = document.querySelectorAll(".card-flip");

    //Elimina los event listeners de todas las cartas
    for (let carta of cards) {
        carta.removeEventListener('click', flip);
    }

    //console.log(primeraCarta.dataset.number, segundaCarta.dataset.number)
    if (primeraCarta.dataset.name === segundaCarta.dataset.name && primeraCarta.dataset.number !== segundaCarta.dataset.number) {
        resultado++;
        res = "Resultado: " + resultado;
        let div_resultado = document.getElementById("resultado");
        div_resultado.innerHTML = res;
        div_resultado.dataset.resultado = resultado;
        //console.log(div_resultado.dataset.resultado);
    
        primeraCarta.classList.add('resuelto');
        segundaCarta.classList.add('resuelto');

        const cards = document.querySelectorAll(".card-flip");

        //coge la carta dentro del array cartas
        for (let carta of cards) {
            carta.addEventListener('click', flip);
        }
    }
    else {
        voltearCarta();
    }
}

function voltearCarta() {

    setTimeout(() => {
        primeraCarta.classList.remove("is-flipped");
        segundaCarta.classList.remove("is-flipped");

        const cards = document.querySelectorAll(".card-flip");

        //se podra girar la carta despues de 1500ms
        for (let carta of cards) {
            carta.addEventListener('click', flip);
        }
    }, 1500);
}

//Funcion para iniciar el crono
function cronometro() {
    let parpadeoContador;
    let salir;
    let min = 0;        //Declaracion de los minutos
    let sec = 60 ;       //Declaracion de los segundos
    let ejectuarCronometro = setInterval(timer, 1000);      //Iniciar timer cada 1000ms

    function timer() { // creo una cuenta atras, cuando llega a 0 el jugador pierde 
        let resultado = parseInt(document.getElementById("resultado").dataset.resultado);

        if ((min != 0 || sec != 0) && resultado != 1) { //CAMBIAR EL 6 POR EL 1
            sec = sec - 1;
            if (sec == -1) {
                sec = 59;
                min = min - 1;
                if (min <= 9) {
                    document.getElementById('timer').innerHTML = '0' + min + ':' + sec;
                } else {
                    document.getElementById('timer').innerHTML = min + ':' + sec;
                }
            } else if (sec <= 9 && min <= 9) {
                document.getElementById('timer').innerHTML = '0' + min + ':0' + sec;
            } else if (sec <= 9) {
                document.getElementById('timer').innerHTML = min + ':0' + sec;
            } else if (min <= 9) {
                document.getElementById('timer').innerHTML = '0' + min + ':' + sec;
            } else {
                document.getElementById('timer').innerHTML = min + ':' + sec;
            }
        } else if ((min == 0 && sec == 0) || resultado == 1) { //CAMBIAR EL 6 POR EL 1
            if (parpadeoContador == true) {

                gameFinished == true;   //Juego finalizado

                //Recorro 12 veces la funcion de borrar cartas
                for (let i = 0; i < 12; i++) {
                    removeCards();
                }
                //Cojo el timer
                timer = document.getElementById("timer");
                //Elimino el timer del body
                document.getElementById("body").removeChild(timer);

                //Cojo la primera clase de resultado para el juego
                resultado = document.getElementById("resultado");
                //Elimino la clase de resultado para el juego
                resultado.className.remove = "resultado";
                //Añado la segunda clase de resultado para la pantalla final
                resultado.className = "resultado2";
                let ganado =  document.createElement('div');

                div_content.className = 'card-content';
                //Lo meto dentro del div memory-game
                document.getElementById("memory-game").appendChild(resultado);
            } else {
                document.getElementById('timer').innerHTML = '';
                parpadeoContador = true;
            }
        }
    }
}

function removeCards() {
    if (document.getElementById("card") != null) {
        card = document.getElementById("card");

        document.getElementById('memory-game').removeChild(card);
        
       // salir();
    }
}


/* function salir() {
    let botonExit = document.createElement('a');
    let botonExitText = document.createTextNode(theCounter);
    botonExit.setAttribute('href', "../../menus/gamesMenu.html");
    botonExit.appendChild(botonExitText);

    document.getElementById('memory-game').appendChild(botonExit);
} */