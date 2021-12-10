

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

//Fin del juego
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

//Borrar cartas al final del juego
function removeCards() {
    if (document.getElementById("card") != null) {
        card = document.getElementById("card");

        document.getElementById('memory-game').removeChild(card);
        
    }
}



