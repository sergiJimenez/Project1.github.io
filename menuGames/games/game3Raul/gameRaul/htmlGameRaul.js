
/////////////////////////////////////////////
/* Funciones de creacion de html del juego */
/////////////////////////////////////////////

// Menu
function menu() {
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
    var btnFacil = document.createElement("input");
    btnFacil.type = "button";
    btnFacil.className = "boton";
    btnFacil.name = "submit";
    btnFacil.value = "Facil";
    btnFacil.id = "submit";
    btnFacil.setAttribute("onclick", "juego()");

    //Boton
    var btnDificil = document.createElement("input");
    btnDificil.type = "button";
    btnDificil.className = "boton";
    btnDificil.name = "submit";
    btnDificil.value = "Dificil";
    btnDificil.id = "submit";
    btnDificil.setAttribute("onclick", "juego()");

    formulario.appendChild(etiqueta);
    formulario.appendChild(selectList);
    formulario.appendChild(btnFacil);
    formulario.appendChild(btnDificil);

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



// Pantalla final del juego
function pantallaFinal() {
    puntuacion = seconds * parseInt(document.getElementById("resultado").dataset.resultado);
    
    //Cojo la primera clase de resultado para el juego
    resultado = document.getElementById("resultado");


    //Formulario
    var formulario = document.createElement('form');
    formulario.id = "salir";

    //Boton
    var exitBtn = document.createElement("a");
    exitBtn.classList = "exitBtn";
    exitBtn.href = '../../../menus/gamesMenu.html';
    exitBtn.innerText = 'Exit';

    formulario.appendChild(exitBtn);

    //Puntuacion
    var titulo = document.createElement("h1");
    titulo.appendChild(document.createTextNode("Has conseguido una puntuacion de " + puntuacion));
    titulo.className = "txtFinal";

    resultado.remove();

    //Div para centrar los objetos
    var divCentrar = document.createElement('div');
    divCentrar.className = "final";
    divCentrar.id = "final"

    //Juntar todo a el div para centrarlo todo
    divCentrar.appendChild(titulo);
    divCentrar.appendChild(formulario);

    //Juntar el div al html
    document.getElementById('memory-game').appendChild(divCentrar);

}

