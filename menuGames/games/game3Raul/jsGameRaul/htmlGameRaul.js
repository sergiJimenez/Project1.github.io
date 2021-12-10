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
  var etiqueta = document.createElement("label");
  etiqueta.setAttribute = ("for", "modulo");
  etiqueta.appendChild(document.createTextNode("Escull un modul"));
  etiqueta.className = "etiquetaModulo";

  //Formulario
  var formulario = document.createElement("form");
  formulario.id = "modulos";

  //Boton facil
  var btnFacil = document.createElement("input");
  btnFacil.type = "button";
  btnFacil.className = "boton";
  btnFacil.name = "submit";
  btnFacil.value = "Fàcil";
  btnFacil.id = "submit";
  btnFacil.setAttribute("onclick", "juegoFacil()");

  //Boton dificil
  var btnDificil = document.createElement("input");
  btnDificil.type = "button";
  btnDificil.className = "boton";
  btnDificil.name = "submit";
  btnDificil.value = "Difícil";
  btnDificil.id = "submit";
  btnDificil.setAttribute("onclick", "juegoDificil()");

  //Boton instrucciones
  var btnInstrucciones = document.createElement("input");
  btnInstrucciones.type = "button";
  btnInstrucciones.className = "boton";
  btnInstrucciones.name = "submit";
  btnInstrucciones.value = "Instruccions";
  btnInstrucciones.id = "submit";
  btnInstrucciones.setAttribute("onclick", "instrucciones()");

  formulario.appendChild(etiqueta);
  formulario.appendChild(selectList);
  formulario.appendChild(btnFacil);
  formulario.appendChild(btnDificil);
  formulario.appendChild(btnInstrucciones);

  //Titulo
  var titulo = document.createElement("h1");
  titulo.appendChild(document.createTextNode("Memory game"));
  titulo.className = "titulo";

  //Div para centrar los objetos
  var divCentrar = document.createElement("div");
  divCentrar.className = "texto";
  divCentrar.id = "centrar";

  //Juntar todo a el div para centrarlo todo
  divCentrar.appendChild(titulo);
  divCentrar.appendChild(formulario);

  //Juntar el div al html
  document.getElementById("memory-game").appendChild(divCentrar);
}

//Instrucciones
function instrucciones() {
  let removeCentrar = document.getElementById("centrar");
  document.getElementById("memory-game").removeChild(removeCentrar);

  //Titulo instucciones
  var tituloIns = document.createElement("h1");
  tituloIns.appendChild(document.createTextNode("Instruccions del joc"));
  tituloIns.className = "tituloIns";

  var textIns = document.createElement("p");
  textIns.appendChild(
    document.createTextNode(
      "En aquesta emtrepidant aventura hauras de trobar les sis parelles amagades a les cataconves de Gurman, per tal d'assolir-ne el joc hauras d'estar concentrat."
    )
  );
  textIns.className = "textIns";

  var textIns2 = document.createElement("p");
  textIns2.appendChild(
    document.createTextNode(
      "Per tu es molt senzill el nivell fàcil? Prova el nivell dificil!"
    )
  );
  textIns2.className = "textIns";

  //Div para centrar los objetos
  var divCentrar = document.createElement("div");
  divCentrar.className = "texto2";
  divCentrar.id = "centrarIns";

  //Boton volver
  var btnVolver = document.createElement("input");
  btnVolver.type = "button";
  btnVolver.className = "btnVolver";
  btnVolver.name = "submit";
  btnVolver.value = "Volver";
  btnVolver.id = "submit";
  btnVolver.setAttribute("onclick", "menu()");
  btnVolver.setAttribute("onclick", "delInstrucciones()");

  //Juntar todo a el div para centrarlo todo
  divCentrar.appendChild(tituloIns);
  divCentrar.appendChild(textIns);
  divCentrar.appendChild(textIns2);
  divCentrar.appendChild(btnVolver);

  document.getElementById("memory-game").appendChild(divCentrar);
}

function delInstrucciones() {
  let removeCentrar = document.getElementById("centrarIns");
  document.getElementById("memory-game").removeChild(removeCentrar);

  menu();
}

//Carta
function card() {
  var icono = document.createElement("i");
  icono.id = "carta";
  icono.className = "carta";

  let div_content = document.createElement("div");
  div_content.className = "card-content";

  div_content.appendChild(icono);

  let div_cardback = document.createElement("div");
  div_cardback.className = "card-face card-face--back";

  div_cardback.appendChild(div_content);

  let div_cardface = document.createElement("div");
  div_cardface.className = "card-face card-face--front";

  let div_flip = document.createElement("div");
  div_flip.className = "card-flip";
  div_flip.id = "card-flip";
  div_flip.dataset.name;

  div_flip.appendChild(div_cardface);
  div_flip.appendChild(div_cardback);

  let div_card = document.createElement("div");
  div_card.className = "card";
  div_card.id = "card";

  div_card.appendChild(div_flip);

  document.getElementById("memory-game").appendChild(div_card);
}

function cartasDificil() {
  var icono = document.createElement("i");
  icono.id = "carta";
  icono.className = "carta";

  let div_content = document.createElement("div");
  div_content.className = "card-content";

  div_content.appendChild(icono);

  let div_cardback = document.createElement("div");
  div_cardback.className = "card-face card-face--back";

  div_cardback.appendChild(div_content);

  let div_cardface = document.createElement("div");
  div_cardface.className = "card-face card-face--front";

  let div_flip = document.createElement("div");
  div_flip.className = "card-flip";
  div_flip.id = "card-flip";
  div_flip.dataset.name;

  div_flip.appendChild(div_cardface);
  div_flip.appendChild(div_cardback);

  let div_card = document.createElement("div");
  div_card.className = "card";
  div_card.id = "card";
  div_card.style.position = "relative";
  div_card.dataset.speedX = 3;
  div_card.dataset.speedY = 3;
  div_card.dataset.directionX = -1;
  div_card.dataset.directionY = -1;
  div_card.dataset.left = 0; //NO TOCAR
  div_card.dataset.top = 0; //NO TOCAR
  div_card.dataset.id_interval = setInterval(() => {
    div_card.dataset.left =
      Number.parseInt(div_card.dataset.left) +
      Number.parseInt(div_card.dataset.speedX) *
        Number.parseInt(div_card.dataset.directionX);
    div_card.dataset.top =
      Number.parseInt(div_card.dataset.top) +
      Number.parseInt(div_card.dataset.speedY) *
        Number.parseInt(div_card.dataset.directionY);

    div_card.style.left = `${div_card.dataset.left}px`;
    div_card.style.top = `${div_card.dataset.top}px`;

    let tablero_rect = tablero.getBoundingClientRect();
    let card_rect = div_card.getBoundingClientRect();

    console.log(tablero.rect);
    console.log(card.rect);

    if (Number.parseInt(card_rect.left) < tablero_rect.left) {
      div_card.dataset.directionX *= -1;
    }

    if (Number.parseInt(card_rect.top) < tablero_rect.top) {
      div_card.dataset.directionY *= -1;
    }

    if (Number.parseInt(card_rect.right) > tablero_rect.right) {
      div_card.dataset.directionX *= -1;
    }

    if (Number.parseInt(card_rect.bottom) > tablero_rect.bottom) {
      div_card.dataset.directionY *= -1;
    }
  }, 1000 / 60);

  div_card.appendChild(div_flip);

  document.getElementById("memory-game").appendChild(div_card);
}

// Pantalla final del juego
function pantallaFinal() {
  puntuacion =
    seconds * parseInt(document.getElementById("resultado").dataset.resultado);

  //Cojo la primera clase de resultado para el juego
  resultado = document.getElementById("resultado");

  //Formulario
  var formularioSalir = document.createElement("form");
  formularioSalir.id = "salir";
  formularioSalir.className = "salir";

  //Boton volver al juego
  var returnBtn = document.createElement("a");
  returnBtn.classList = "btnVolver";
  returnBtn.href = "../../menus/gamesMenu.html";
  returnBtn.innerText = "Torna a l'inici";

  //Boton exit
  var exitBtn = document.createElement("a");
  exitBtn.classList = "btnExit";
  exitBtn.href = "../../menus/gamesMenu.html";
  exitBtn.innerText = "Torna al menu";

  //Boton ranking
  var rankingBtn = document.createElement("a");
  rankingBtn.classList = "boton";
  rankingBtn.href = "../ranking/ranking.php";
  rankingBtn.innerText = "Ranking";

  formularioSalir.appendChild(returnBtn);
  formularioSalir.appendChild(exitBtn);
  formularioSalir.appendChild(rankingBtn);

  //Titulo
  var tituloFinal = document.createElement("h1");
  tituloFinal.appendChild(
    document.createTextNode("Has aconseguit una puntuacio de " + puntuacion)
  );
  tituloFinal.className = "titulo";

  resultado.remove();

  //Div para centrar los objetos
  var divCentrar = document.createElement("div");
  divCentrar.className = "texto";
  divCentrar.id = "centrar";

  //Juntar todo a el div para centrarlo todo
  divCentrar.appendChild(tituloFinal);
  divCentrar.appendChild(formularioSalir);

  //Juntar el div al html
  document.getElementById("memory-game").appendChild(divCentrar);
}
