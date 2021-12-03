
/////////////////////////
/* Contolador del juego*/
/////////////////////////


// Mostrar resultado y el tiempo
function mostrarEventos() {
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


// Mezclado de cartas 
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

// Girar cartas
function flipCards() {
    //querySelector --> marca unicamente la antesa clase y querySelectorAll --> marca todas las clases 
    const cards = document.querySelectorAll(".card-flip");

    //Le pone un event listener a todas las cartas
    for (let carta of cards) {
        carta.addEventListener("click", flip);
    }
}


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

    if (primeraCarta.dataset.name === segundaCarta.dataset.name && primeraCarta.dataset.number !== segundaCarta.dataset.number) {
        resultado++;
        res = "Resultado: " + resultado;
        let div_resultado = document.getElementById("resultado");
        div_resultado.innerHTML = res;
        div_resultado.dataset.resultado = resultado;

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

//Elimina el volteo de carta cuando se giren las cartas
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

// Tiempo
function timedCount() {
    time = setTimeout(timedCount, 1000);
    if (seconds > 0 && resultado != 6) {
        seconds -= 1;
    } else if ((seconds == 0 && minute > 0)) {
        minute -= 1;
        seconds = 59;
    }

    let formattedMinute = ("0" + minute).slice(-2);
    let formattedSeconds = ("0" + seconds).slice(-2);
    document.getElementById("timer").innerHTML =
        "TEMPS: " + formattedMinute + ":" + formattedSeconds;

    if ((minute == 0 && seconds == 0) || resultado == 6) {
        gameOver();
    }
}

/* function puntuacion(){
    puntuacion = secondsInicial * parseInt(document.getElementById("resultado").dataset.resultado);

} */