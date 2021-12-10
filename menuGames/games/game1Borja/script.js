// casi acabado  24/11/2021
// llamando a los elementos del html

const gridBoard = document.getElementsByClassName('grid-board')[0];
const playButton = document.getElementById("play-btn");
const difiultadMenu = document.getElementById("difiultadMenu");
const goal = document.getElementsByClassName("goal")[0];
const boton_actualizar= document.getElementById("actualizar");

// ----- declaracion de variables 


//    tiene 2 variables, cada vez que el personaje se mueve se elimina del sitio actual y 
//    se crea otro en la posicion indicada por teclado 

let oldPlayer = { x: 18, y: 10 };    // posicion inicial del jugador que se va a borrar 
let jugador = { x: 18, y: 10 };     // posicion inicial jugador
const tamaño = 20;				   // numero de celdas totales, para definir limites del mapa 

let contadorEnemigos;       // nivel dificultat 
let randomx, randomy;      // para generear posicion enimiga aleatoria 
let nivel;				  // para seleccionar el nivel al inicio de cada partida 
let enemigos = [];       // array para contabilizar numero de eneimgos que queremos en cada nivel
let movCount = 0;
// ----- rotaciones del personaje con el teclado  -----
let rotar;
let arrowUp;
let arrowDown;
let arrowLeft;
let arrowRight;
// ------ comprobaciones -------
let puntuacion;
let playable = false;
let legalInput = true;
let llaveEncontrada = false;
let ganar = false;
let perder = false;
// ----- mensaje final ------
const mensajeDerrota = "Oh! Has perdido! ";
const mensajeVictoria = "Felicidades! Has ganado! ";
// ---- creamos mapa array bidimensional creando divs
let fuego = 'F';
let bloqueo = 'B';
let camino = 'C';
let logoCep = 'L';
// ---- variables para crear mapas 
let nivelTablero;
let tablero = [];
// ---- reloj 
let parpadeoContador;
let min = 1;
let sec = 10;
let ejectuarCronometro = setInterval(iniciarCrono, 1000);
//------ ranking
let mejorPuntuacion = [];
// ------------- iniciamos set up -----------------

setUp();
function setUp() { // click en la primera pantalla para empezar + llamada a teclado (4 arrows)
	playButton.addEventListener("click", () => { empezarJuego() });
	window.addEventListener("keydown", (e) => { if (playable) newTurno(e) });
}
function empezarJuego() { // llamada a la creacion del tablero y funciones basicas del juego para iniciar

	setDificultat();
	document.getElementsByClassName("menu_principal")[0].remove();
	gridBoard.style.display = "grid";
	generarEnemigosRandom(contadorEnemigos);
	if (playable = true) {
		ejectuarCronometro;
	}
}
function editorMapas() {// creo un mapa por cada nivel, definiendo en 3 letras 3 valores diferentes   
	// asignando a cada valor unas restricciones personalizadas queluego al printarse juntas dibujan el mapa 

	switch (nivelTablero) {
		case "Facil":

			tablero = [
				['B', 'B', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', ''],
				['B', 'B', 'C', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'C', 'B', 'B', 'B', 'B', 'C', 'L', 'L', 'L', 'L'],
				['B', 'B', 'C', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'C', 'B', 'B', 'B', 'B', 'C', 'B', 'B', 'B', 'B'],
				['B', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'B'],
				['B', 'C', 'B', 'B', 'F', 'B', 'C', 'B', 'B', 'B', 'B', 'B', 'B', 'C', 'B', 'B', 'B', 'B', 'C', 'B'],
				['B', 'C', 'B', 'B', 'B', 'B', 'C', 'B', 'B', 'B', 'B', 'B', 'B', 'C', 'B', 'B', 'B', 'B', 'C', 'B'],
				['B', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'B'],
				['B', 'B', 'B', 'C', 'B', 'B', 'B', 'B', 'B', 'C', 'B', 'B', 'B', 'B', 'B', 'C', 'B', 'B', 'C', 'B'],
				['B', 'B', 'B', 'C', 'B', 'B', 'B', 'B', 'B', 'C', 'B', 'B', 'B', 'B', 'B', 'C', 'B', 'B', 'C', 'B'],
				['C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'B'],
				['C', 'B', 'B', 'B', 'B', 'C', 'B', 'B', 'B', 'B', 'B', 'B', 'C', 'B', 'B', 'B', 'B', 'B', 'C', 'B'],
				['C', 'B', 'B', 'B', 'B', 'C', 'B', 'B', 'B', 'B', 'B', 'B', 'C', 'B', 'B', 'B', 'B', 'B', 'C', 'B'],
				['C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'B'],
				['B', 'B', 'B', 'C', 'B', 'B', 'B', 'B', 'B', 'B', 'C', 'B', 'B', 'B', 'B', 'B', 'C', 'B', 'B', 'B'],
				['B', 'B', 'B', 'C', 'B', 'B', 'B', 'B', 'B', 'B', 'C', 'B', 'B', 'B', 'B', 'B', 'C', 'B', 'B', 'B'],
				['B', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C'],
				['B', 'C', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'C', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'C', 'B', 'C'],
				['B', 'C', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'C', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'C', 'B', 'C'],
				['B', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C'],
				['B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'F', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
			];
			break;

		case "Medio":
			tablero = [

				['B', 'C', 'C', 'C', 'C', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'C', ''],
				['C', 'C', 'B', 'C', 'C', 'B', 'B', 'B', 'C', 'C', 'F', 'B', 'B', 'B', 'C', 'C', 'C', 'C', 'C', 'L'],
				['C', 'C', 'B', 'B', 'C', 'B', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'B', 'B', 'B'],
				['C', 'B', 'B', 'B', 'C', 'C', 'C', 'C', 'B', 'C', 'C', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
				['C', 'B', 'B', 'B', 'F', 'C', 'C', 'B', 'B', 'B', 'C', 'C', 'C', 'C', 'C', 'C', 'B', 'B', 'B', 'B'],
				['C', 'C', 'B', 'B', 'B', 'C', 'C', 'B', 'B', 'B', 'B', 'B', 'B', 'C', 'B', 'C', 'C', 'C', 'B', 'B'],
				['C', 'C', 'C', 'B', 'B', 'C', 'C', 'B', 'B', 'B', 'B', 'B', 'B', 'C', 'B', 'B', 'B', 'C', 'C', 'B'],
				['B', 'B', 'C', 'B', 'B', 'B', 'C', 'B', 'B', 'B', 'B', 'B', 'B', 'C', 'B', 'B', 'B', 'B', 'C', 'B'],
				['B', 'B', 'C', 'C', 'C', 'C', 'C', 'F', 'B', 'B', 'B', 'C', 'C', 'C', 'B', 'B', 'B', 'B', 'C', 'B'],
				['B', 'B', 'C', 'C', 'B', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'B', 'B', 'B', 'C', 'B'],
				['B', 'C', 'C', 'B', 'B', 'C', 'B', 'B', 'B', 'C', 'B', 'B', 'B', 'B', 'C', 'C', 'B', 'B', 'C', 'B'],
				['B', 'C', 'B', 'B', 'B', 'C', 'B', 'B', 'B', 'C', 'B', 'B', 'C', 'C', 'C', 'C', 'C', 'B', 'C', 'B'],
				['C', 'C', 'B', 'C', 'C', 'C', 'B', 'B', 'B', 'C', 'C', 'C', 'C', 'B', 'B', 'F', 'C', 'C', 'C', 'B'],
				['C', 'F', 'B', 'C', 'C', 'C', 'C', 'C', 'B', 'B', 'B', 'B', 'C', 'B', 'B', 'B', 'C', 'C', 'C', 'B'],
				['C', 'B', 'B', 'C', 'B', 'B', 'C', 'C', 'C', 'B', 'B', 'B', 'C', 'B', 'B', 'B', 'C', 'C', 'B', 'B'],
				['C', 'B', 'B', 'C', 'B', 'B', 'B', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'B', 'B'],
				['C', 'B', 'B', 'C', 'B', 'B', 'B', 'B', 'C', 'C', 'C', 'C', 'C', 'C', 'C', 'F', 'B', 'C', 'B', 'B'],
				['C', 'C', 'B', 'C', 'C', 'B', 'B', 'B', 'B', 'C', 'B', 'B', 'C', 'B', 'B', 'B', 'B', 'C', 'B', 'B'],
				['C', 'C', 'B', 'C', 'C', 'B', 'B', 'B', 'B', 'C', 'B', 'B', 'C', 'C', 'C', 'C', 'C', 'C', 'B', 'B'],
				['B', 'C', 'C', 'C', 'C', 'B', 'B', 'B', 'B', 'F', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
			];
			break;
		case "Dificil":

			// espacio reservado para oscar el contructor 

			tablero = [

				['C', 'C', 'C', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'C', 'C', 'C', 'C', 'C', 'C', 'B', 'B', 'C', ''],
				['C', 'B', 'C', 'C', 'C', 'B', 'C', 'C', 'C', 'C', 'C', 'F', 'C', 'B', 'B', 'B', 'B', 'B', 'C', 'L'],
				['C', 'B', 'B', 'B', 'B', 'B', 'C', 'B', 'B', 'B', 'C', 'C', 'C', 'B', 'C', 'C', 'C', 'B', 'C', 'B'],
				['C', 'C', 'C', 'C', 'B', 'C', 'C', 'C', 'B', 'B', 'B', 'C', 'B', 'B', 'C', 'F', 'C', 'C', 'C', 'B'],
				['B', 'C', 'F', 'C', 'C', 'C', 'F', 'C', 'B', 'C', 'B', 'C', 'B', 'B', 'C', 'C', 'C', 'B', 'B', 'B'],
				['B', 'C', 'C', 'C', 'B', 'C', 'C', 'C', 'B', 'C', 'B', 'C', 'B', 'B', 'B', 'C', 'B', 'C', 'C', 'C'],
				['B', 'B', 'C', 'B', 'B', 'B', 'B', 'B', 'C', 'C', 'B', 'C', 'C', 'C', 'C', 'C', 'B', 'C', 'B', 'B'],
				['C', 'C', 'C', 'B', 'B', 'C', 'C', 'B', 'C', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'C', 'C', 'C'],
				['B', 'B', 'C', 'B', 'B', 'B', 'C', 'B', 'C', 'B', 'C', 'C', 'C', 'B', 'C', 'C', 'C', 'C', 'F', 'C'],
				['C', 'B', 'C', 'C', 'B', 'C', 'C', 'C', 'C', 'C', 'C', 'F', 'C', 'C', 'C', 'B', 'B', 'C', 'C', 'C'],
				['C', 'B', 'B', 'C', 'C', 'C', 'F', 'C', 'B', 'C', 'C', 'C', 'C', 'B', 'B', 'B', 'B', 'B', 'B', 'C'],
				['C', 'C', 'B', 'B', 'B', 'C', 'C', 'C', 'B', 'C', 'B', 'B', 'B', 'B', 'C', 'C', 'C', 'B', 'B', 'B'],
				['F', 'C', 'C', 'C', 'B', 'B', 'C', 'B', 'B', 'C', 'C', 'C', 'C', 'B', 'C', 'B', 'C', 'C', 'C', 'C'],
				['C', 'C', 'B', 'C', 'C', 'C', 'C', 'B', 'B', 'B', 'B', 'B', 'C', 'B', 'B', 'B', 'B', 'C', 'B', 'B'],
				['B', 'B', 'B', 'B', 'B', 'C', 'B', 'B', 'B', 'B', 'B', 'C', 'C', 'C', 'B', 'B', 'C', 'C', 'C', 'B'],
				['C', 'C', 'C', 'B', 'B', 'C', 'B', 'B', 'C', 'C', 'C', 'C', 'F', 'C', 'C', 'C', 'C', 'F', 'C', 'B'],
				['C', 'B', 'B', 'B', 'C', 'C', 'C', 'B', 'C', 'B', 'B', 'C', 'C', 'C', 'B', 'B', 'C', 'C', 'C', 'B'],
				['C', 'B', 'C', 'C', 'C', 'F', 'C', 'C', 'C', 'C', 'B', 'B', 'C', 'B', 'B', 'B', 'B', 'C', 'B', 'B'],
				['C', 'B', 'C', 'B', 'C', 'C', 'C', 'B', 'B', 'C', 'C', 'C', 'C', 'C', 'C', 'B', 'C', 'C', 'B', 'B'],
				['C', 'C', 'C', 'B', 'B', 'B', 'B', 'B', 'B', 'C', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'],
			];

			break;
		default:
			break;
	}
	crearTablero(tablero); // se llama a las normas para definir los limites y choques de cada mapa 
}
function crearTablero() { // defino las condiciones del mapeado creando divs y recorriendo el array bidimensional, 
	// usando el mapa establecido en la funcion anterior 
	for (var i = 0; i < tablero.length; i++) {
		for (var j = 0; j < tablero[i].length; j++) {

			// ----- zona fuego
			if (tablero[i][j] == fuego) { // llamo a las 'F' de cada mapa 

				let div_fuego = document.createElement("div");
				div_fuego.className = "fuego";

				div_fuego.style.gridRowStart = i + 1;
				div_fuego.style.gridColumnStart = j + 1;

				gridBoard.appendChild(div_fuego);
			}

			if (tablero[i][j] == logoCep) { // llamo a las 'F' de cada mapa 

				let div_logoCep = document.createElement("div");
				div_logoCep.className = "logoCep";

				div_logoCep.style.gridRowStart = i + 1;
				div_logoCep.style.gridColumnStart = j + 1;

				gridBoard.appendChild(div_logoCep);
			}
			// zona bloqueo 
			if (tablero[i][j] == bloqueo) {// llamo a las 'B' de cada mapa

				let div_bloqueo = document.createElement("div");
				div_bloqueo.className = "bloqueo";

				div_bloqueo.style.gridRowStart = i + 1;
				div_bloqueo.style.gridColumnStart = j + 1;

				gridBoard.appendChild(div_bloqueo);
			}
			// zona camino 
			if (tablero[i][j] == camino) {// llamo a las 'C' de cada mapa

				let div_camino = document.createElement("div");
				div_camino.className = "camino";

				div_camino.style.gridRowStart = i + 1;
				div_camino.style.gridColumnStart = j + 1;

				gridBoard.appendChild(div_camino);
			}
		}
	}
}
function setDificultat() { // modifica algunas variables para poder personalizar las condiciones del juegos segun la dificultad escogida por el usuario
	nivel = difiultadMenu.value;
	nivelTablero = difiultadMenu.value;

	switch (nivel) {					// 1. se edita la cuenta atras segun nivel 
		case "Dificil":					// 2. se llama a cada mapa creado para cada nivel.
			// 3. se crean el numero de enemigos que quieres en cada nivel
			min = 1; sec = 30;
			editorMapas(tablero);
			contadorEnemigos = 3;
			break;

		case "Medio":
			min = 2; sec = 00;
			editorMapas(tablero);
			contadorEnemigos = 3;
			break;

		case "Facil":
			min = 1; sec = 00;
			editorMapas(tablero);
			contadorEnemigos = 5;
			break;
	}
}
function iniciarCrono() {// creo una cuenta atras, cuando llega a 0 el jugador pierde 

	

	if (min != 0 || sec != 0) {
		sec = sec - 1;
		if (sec == -1) {
			sec = 59;
			min = min - 1;
			if (min <= 9) {
				document.getElementById('mostrarContador').innerHTML = '0' + min + ':' + sec;
			} else {
				document.getElementById('mostrarContador').innerHTML = min + ':' + sec;
			}
		} else if (sec <= 9 && min <= 9) {
			document.getElementById('mostrarContador').innerHTML = '0' + min + ':0' + sec;
		} else if (sec <= 9) {
			document.getElementById('mostrarContador').innerHTML = min + ':0' + sec;
		} else if (min <= 9) {
			document.getElementById('mostrarContador').innerHTML = '0' + min + ':' + sec;
		} else {
			document.getElementById('mostrarContador').innerHTML = min + ':' + sec;
		}
	} else if (min == 0 && sec == 0) {
		if (parpadeoContador == true) {
			document.getElementById('mostrarContador').innerHTML = '0' + min + ':0' + sec;
			parpadeoContador = false;
		} else {
			document.getElementById('mostrarContador').innerHTML = '';
			parpadeoContador = true;
		}
		perder = true;
	}
	if ( playable == false){

		sec=0;
		min=0;
	}

}
function iniciarPuntuacion() {

	const enemiesKilled = contadorEnemigos - enemigos.length;

	
if (  sec > 40 ){
		puntuacion = (movCount *2 ) + 50;
}




	document.getElementById('mostrarPuntuacion').innerHTML = puntuacion + ' Puntuacion';

	document.getElementById('mostrarMovimientos').innerHTML = movCount + ' Movimientos';

	document.getElementById('mostrarEnimigosMuertos').innerHTML = enemiesKilled + ' Kills ';


}
function mostrarRanking() {

		mejorPuntuacion.push(puntuacion);
		
		
		//get yhe modal
		var modal = document.getElementById("myModal");
		// Get the button that opens the modal
		
		var btn = document.getElementById("mostrarRanking");

		// Get the <span> element that closes the modal
		var span = document.getElementsByClassName("close")[0];
		
		// When the user clicks the button, open the modal 
		btn.onclick = function() {
			modal.style.display = "block";
		}
		
		// When the user clicks on <span> (x), close the modal
		span.onclick = function() {
			modal.style.display = "none";
		}
		
		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		}

}
function generarEnemigosRandom(num) {// genera enemigos en posiciones diferentes cada vez que inicia
	for (let i = 0; i < num; i++) {
		do {
			randomx = Math.floor(Math.random() * tamaño) + 1;
			randomy = Math.floor(Math.random() * tamaño) + 1;
		}
		while (posiionIlegalEnemigo());
		enemigos.push({ x: randomx, y: randomy });
	}
	generarEnemigo();
}
function posiionIlegalEnemigo() {// valida la posicion de la araña 
	if (randomx === tamaño && randomy === 1) return true; // posicion araña
	if (randomx === tamaño - 1 && randomy === 2) return true;
	if (randomx === 1 && randomy === tamaño) return true; //objetivo de la posicion
	if (randomx === tamaño / 2 && randomy === tamaño / 2) return true; // posicion llave 
	if (enemigos.some((enemigo) => randomx === enemigo.x && randomy === enemigo.y)) return true;
	return false;
}
function takeInput(e) {// teclado de flechitas y validacion de rotacion 

	rotar = document.getElementsByClassName("player");

	oldPlayer = Object.assign(oldPlayer, jugador);  //save last position in case new move is impossible
	switch (e.key) {  // true para validar la rotacion del gif
		case "ArrowUp":
			arrowUp = true;
			jugador.x--;
			break;

		case "ArrowDown":
			arrowDown = true;
			jugador.x++;
			break;

		case "ArrowRight":
			arrowRight = true;
			jugador.y++;
			break;

		case "ArrowLeft":
			arrowLeft = true;
			jugador.y--;
			break;

		default:
			legalInput = false;
	}
}
function playerTurn() {  // conjunto de funciones que ejecuta alrededor del jugador 

	if (pudeMover(jugador)) {
		clearOldPlayer();
		crearJugador();
		movCount++;
		comprobarLlave();
	}
	else  // revert to old position if new move is impossible 
		jugador = Object.assign(jugador, oldPlayer);
}
function pudeMover(jugador) {// valida si puede moverse o no 

	if (jugador.x <= tamaño && jugador.x > 0 && jugador.y <= tamaño && jugador.y > 0) {

		if (tablero[jugador.x - 1][jugador.y - 1] == bloqueo) { // si toca el bloqueo, se anula el movimiento 
			return false;
		}
		if (tablero[jugador.x - 1][jugador.y - 1] == fuego) {// si toca el fuego ejecuta el gameOver 

			perder = true;
		}
		return true;
	}
}
function clearOldPlayer() { // se elimina el jugador de la posicion antigua cada vez que se mueve un espacio
	document.getElementsByClassName("player")[0].remove();
}
function crearJugador() {  // el jugador se crea cada vez que se mueve 
	
	const newPlayer = document.createElement("div");
	newPlayer.classList.add("player");

	if (llaveEncontrada)
		newPlayer.style.backgroundColor = "";
		newPlayer.style.gridRowStart = `${jugador.x}`;
		newPlayer.style.gridColumnStart = `${jugador.y}`;
		gridBoard.appendChild(newPlayer);


	if ((arrowLeft == true && arrowUp == true) || (arrowLeft == true && arrowDown == true)) {

		rotar[0].style.transform = "scaleX(-1)"; // rota a la izquierda o derecha  y dependiendo de posicionado 
		arrowUp = false;
		arrowDown = false;

	} else if (arrowLeft == true) {
		rotar[0].style.transform = "scaleX(-1)"; // rotacion simple a la izquierda
		arrowLeft = false;


	} else if (arrowRight == true) {
		rotar[0].style.transform = "scaleX(1)"; // rotacion simple a la derecha 
		arrowRight = false;
	}

}
function comprobarLlave() {// personaje tiene o no la llave, una vez ocupan la misma posicion eliminamos la llave
	if (jugador.x === tamaño / 2 && jugador.y === tamaño / 2) {
		llaveEncontrada = true;
		document.getElementsByClassName("key")[0].remove();
	}
}
function turnoEnemigo() {// conjunto de funciones donde se genera, se mueve y elimina el enemigo
	eliminarOldEnemigo();
	updatePosicionEnemiga();
	generarEnemigo();
}
function eliminarOldEnemigo() { // borra al enemigo de la posicion para poder moverlo luego 
	for (let i = 0; i < enemigos.length; i++) {
		document.getElementsByClassName("enemy")[0].remove();
	}
}
function updatePosicionEnemiga() { // acerca el enemigo a la posicion del jugador haciendo el efecto de persecucuion 



	var aleatorio = Math.round(Math.random() * 1);
	var aleatorio2 = Math.round(Math.random() * -1);


	// var aleatorio2 = Math. round(Math. random()* -1);
	for (let i = 0; i < enemigos.length; i++) {


		if (enemigos[i].x === jugador.x) { // cuando en el eje x   se aplique esta condicion se le sumara 1 o -1 a la posicion del enemigo

			enemigos[i].y += jugador.y > enemigos[i].y ? aleatorio : aleatorio2;
			// entonces==?  devuelve valor  
			// sino == : devuelve valor 

		}
		else if (enemigos[i].y === jugador.y) { // // cuando en el eje Y   se aplique esta condicion se le sumara 1 o -1 a la posicion del enemigo

			enemigos[i].x += jugador.x > enemigos[i].x ? aleatorio : aleatorio2;

		} else {

			// enemigos[i].y += jugador.y > enemigos[i].y ? 0 : -1;
			enemigos[i].y += jugador.y > enemigos[i].y ? aleatorio : -1;
		}

	}
	eliminarDuplicado();
}
function eliminarDuplicado() {      // cuando dos enemigos ocupan la misma posicion, desaparecen 
	for (let i = 0; i < enemigos.length; i++) {
		for (let j = 1; j < enemigos.length; j++) {
			if (i !== j && enemigos[i].x === enemigos[j].x && enemigos[i].y === enemigos[j].y) {
				enemigos.splice(j, 1);
				j--;
			}
		}
	}
}
function generarEnemigo() {       // selecciona el div y creamos al enemigo, dandole la posicion inical, que ya era random anteriormente.
	for (let i = 0; i < enemigos.length; i++) {
		const newEnemy = document.createElement("div");
		newEnemy.classList.add("enemy");
		newEnemy.style.gridRowStart = `${enemigos[i].x}`;
		newEnemy.style.gridColumnStart = `${enemigos[i].y}`;
		gridBoard.appendChild(newEnemy);
	}
}
function newTurno(e) { // conjunto de funciones que engloba y lo verifica todo cada vez que pulsas la tecla.
	// mostramos mensaje de victoria y derrota en caso de que verifique que hemso ganado o perdido						

	iniciarPuntuacion()

	takeInput(e);
	if (!legalInput) {
		legalInput = true;
		return;
	}
	playerTurn();

	checkDerrota();
	checkVictoria();


	if (perder) {
		gameOver(mensajeDerrota);

	} else if (ganar) {
		gameOver(mensajeVictoria);
	} else {
		setTimeout(() => {
			turnoEnemigo();
			checkDerrota();
			if (perder)
				gameOver(mensajeDerrota);
		}, 100);
	}
}
function checkVictoria() {       // cuando el jugador tiene la llave y llega a la posicion final ha ganado.
	if (jugador.x === 1 && jugador.y === tamaño && llaveEncontrada)
		ganar = true;
}
function checkDerrota() {      // si el jugador ocupa la misma posicion del enemigo, se acaba el juego 
	for (let i = 0; i < enemigos.length; i++) {
		console.log(enemigos[i]);
		if (jugador.x === enemigos[i].x && jugador.y === enemigos[i].y) {
			perder = true;
			break;
		}
	}
}
function gameOver(msg) {      // muestra las estadisticas cuando pierdes. entra la jugabilidad en falso y llama la funcion mostrar estadisticas.

	playable = false;
	alert(msg);
}


	




