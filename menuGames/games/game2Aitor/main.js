(() => {
  window.addEventListener("load", () => {
    "use strict";

    let player = document.getElementById("player");
    let llave1 = document.getElementById("llave1");
    let llave2 = document.getElementById("llave2");
    let llave3 = document.getElementById("llave3");
    let llave4 = document.getElementById("llave4");
    let llave5 = document.getElementById("llave5");
    let araña1 = document.getElementById("araña1");
    let araña2 = document.getElementById("araña2");
    let araña3 = document.getElementById("araña3");
    let araña4 = document.getElementById("araña4");
    let araña5 = document.getElementById("araña5");
    let array_collisiones = document.querySelectorAll("div[class^='colision']");

    let velocidad = 7;
    let mTop = 0;
    let mLeft = 400;
    player.style.left = "400px";
    player.style.bottom = "-875px";
    let segundoInicio = 100;
    let score = 0;
    let numLlaves = 0;

    //Cuenta Atrás

    function actualizar() {
      document.getElementById("cuentAtras").innerHTML = segundoInicio;

      if (segundoInicio == 0 || numLlaves == 5) {
        alert(
          "Juego Finalizado" + "\nTu puntuación es de: " + score + " puntos" + "\nHas conseguido: " + numLlaves + " llaves."
        );
        velocidad = 0;
      } else {
        segundoInicio -= 1; /* o segundoInicio = segundoInicio -1; */

        setTimeout(actualizar, 1e3);
      }
    }

    actualizar();

    //Damos valor por teclado para mover personaje
    document.addEventListener("keydown", function (e) {
      if (e.key == "ArrowRight") {
        moverDerecha();
      }
      if (e.key == "ArrowLeft") {
        moverIzquierda();
      }
      if (e.key == "ArrowUp") {
        moverArriba();
      }
      if (e.key == "ArrowDown") {
        moverAbajo();
      }
    });

    //Funciones para mover al jugador
    function moverIzquierda() {
      mLeft -= velocidad;
      player.style.left = mLeft + "px";
      if (!intersect(array_collisiones, player, "left")) {
        mLeft += velocidad;
        player.style.left = mLeft + "px";
      }
      colisionLlave1(llave1, player);
      colisionLlave2(llave2, player);
      colisionLlave3(llave3, player);
      colisionLlave4(llave4, player);
      colisionLlave5(llave5, player);
      colisionAraña1(araña1, player);
      colisionAraña2(araña2, player);
      colisionAraña3(araña3, player);
      colisionAraña4(araña4, player);
      colisionAraña5(araña5, player);
    }

    function moverDerecha() {
      mLeft += velocidad;
      player.style.left = mLeft + "px";
      if (!intersect(array_collisiones, player, "right")) {
        mLeft -= velocidad;
        player.style.left = mLeft + "px";
      }
      colisionLlave1(llave1, player);
      colisionLlave2(llave2, player);
      colisionLlave3(llave3, player);
      colisionLlave4(llave4, player);
      colisionLlave5(llave5, player);
      colisionAraña1(araña1, player);
      colisionAraña2(araña2, player);
      colisionAraña3(araña3, player);
      colisionAraña4(araña4, player);
      colisionAraña5(araña5, player);
    }

    function moverArriba() {
      mTop -= velocidad;
      player.style.marginTop = mTop + "px";

      if (!intersect(array_collisiones, player, "top")) {
        mTop += velocidad;
        player.style.marginTop = mTop + "px";
      }
      colisionLlave1(llave1, player);
      colisionLlave2(llave2, player);
      colisionLlave3(llave3, player);
      colisionLlave4(llave4, player);
      colisionLlave5(llave5, player);
      colisionAraña1(araña1, player);
      colisionAraña2(araña2, player);
      colisionAraña3(araña3, player);
      colisionAraña4(araña4, player);
      colisionAraña5(araña5, player);

    }

    function moverAbajo() {
      mTop += velocidad;
      player.style.marginTop = mTop + "px";
      if (!intersect(array_collisiones, player, "bottom")) {
        mTop -= velocidad;
        player.style.marginTop = mTop + "px";
      }
      colisionLlave1(llave1, player);
      colisionLlave2(llave2, player);
      colisionLlave3(llave3, player);
      colisionLlave4(llave4, player);
      colisionLlave5(llave5, player);
      colisionAraña1(araña1, player);
      colisionAraña2(araña2, player);
      colisionAraña3(araña3, player);
      colisionAraña4(araña4, player);
      colisionAraña5(araña5, player);

    }

    //Funcion colisiones
    function intersect(array_collisiones, player, direccion) {
      for (let i = 0; i < array_collisiones.length; i++) {
        let isIntersect = true;

        const collision_rect = array_collisiones[i].getBoundingClientRect();
        const player_rect = player.getBoundingClientRect();

        if (
          collision_rect.x > player_rect.x + player_rect.width ||
          player_rect.x > collision_rect.x + collision_rect.width
        ) {
          isIntersect = false;
        }
        if (
          collision_rect.y > player_rect.y + player_rect.height ||
          player_rect.y > collision_rect.y + collision_rect.height
        ) {
          isIntersect = false;
        }

        if (!isIntersect) {
          array_collisiones[i].dataset.esta = 0;
        } else {
          array_collisiones[i].dataset.esta = 1;
        }
      }

      let esta = false;
      let indice = 0;

      while (!esta && indice < array_collisiones.length) {
        if (array_collisiones[indice].dataset.esta == 1) {
          esta = true;
        }

        indice++;
      }

      return esta;
    }

    console.log(player);

    //Funcion llaves

    function colisionLlave1(llave1, player) {
      const llave = llave1.getBoundingClientRect();
      const player1 = player.getBoundingClientRect();
      let encontrado = false;

      if (
        llave.x < player1.x + player1.width &&
        player1.x < llave.x + llave.width &&
        llave.y < player1.y + player1.height &&
        player1.y < llave.y + llave.height
      ) {
        console.log("COLISION CON LLAVE 1");
        encontrado = true;
        score = score + 20;
        numLlaves = numLlaves + 1;
        llave1.style.display = "none";
        console.log(numLlaves);
        console.log(score);
      }

      return encontrado;
    }

    function colisionLlave2(llave2, player) {
      const llave = llave2.getBoundingClientRect();
      const player1 = player.getBoundingClientRect();
      let encontrado = false;

      if (
        llave.x < player1.x + player1.width &&
        player1.x < llave.x + llave.width &&
        llave.y < player1.y + player1.height &&
        player1.y < llave.y + llave.height
      ) {
        console.log("COLISION CON LLAVE 2");
        encontrado = true;
        score = score + 20;
        numLlaves = numLlaves + 1;
        llave2.style.display = "none";
        console.log(numLlaves);
        console.log(score);
      }

      return encontrado;
    }

    function colisionLlave3(llave3, player) {
      const llave = llave3.getBoundingClientRect();
      const player1 = player.getBoundingClientRect();
      let encontrado = false;

      if (
        llave.x < player1.x + player1.width &&
        player1.x < llave.x + llave.width &&
        llave.y < player1.y + player1.height &&
        player1.y < llave.y + llave.height
      ) {
        console.log("COLISION CON LLAVE 3");
        encontrado = true;
        score = score + 20;
        numLlaves = numLlaves + 1;
        llave3.style.display = "none";
        console.log(numLlaves);
        console.log(score);
      }

      return encontrado;
    }

    function colisionLlave4(llave4, player) {
      const llave = llave4.getBoundingClientRect();
      const player1 = player.getBoundingClientRect();
      let encontrado = false;

      if (
        llave.x < player1.x + player1.width &&
        player1.x < llave.x + llave.width &&
        llave.y < player1.y + player1.height &&
        player1.y < llave.y + llave.height
      ) {
        console.log("COLISION CON LLAVE 4");
        encontrado = true;
        score = score + 20;
        numLlaves = numLlaves + 1;
        llave4.style.display = "none";
        console.log(numLlaves);
        console.log(score);
      }

      return encontrado;
    }

    function colisionLlave5(llave5, player) {
      const llave = llave5.getBoundingClientRect();
      const player1 = player.getBoundingClientRect();
      let encontrado = false;

      if (
        llave.x < player1.x + player1.width &&
        player1.x < llave.x + llave.width &&
        llave.y < player1.y + player1.height &&
        player1.y < llave.y + llave.height
      ) {
        console.log("COLISION CON LLAVE 5");
        encontrado = true;
        score = score + 20;
        numLlaves = numLlaves + 1;
        llave5.style.display = "none";
        console.log(numLlaves);
        console.log(score);
      }

      return encontrado;
    }

    //Colision Arañas

    function colisionAraña1(araña1, player) {
      const araña = araña1.getBoundingClientRect();
      const player1 = player.getBoundingClientRect();
      let encontrado = false;

      if (
        araña.x < player1.x + player1.width &&
        player1.x < araña.x + araña.width &&
        araña.y < player1.y + player1.height &&
        player1.y < araña.y + araña.height
      ) {
        console.log("COLISION CON ARAÑA1");
        encontrado = true;
        score = score - 10;
        araña1.style.display = "none";
        console.log(score);
      }

      return encontrado;
    }

    function colisionAraña2(araña2, player) {
      const araña = araña2.getBoundingClientRect();
      const player1 = player.getBoundingClientRect();
      let encontrado = false;

      if (
        araña.x < player1.x + player1.width &&
        player1.x < araña.x + araña.width &&
        araña.y < player1.y + player1.height &&
        player1.y < araña.y + araña.height
      ) {
        console.log("COLISION CON ARAÑA2");
        encontrado = true;
        score = score - 10;
        araña2.style.display = "none";
        console.log(score);
      }

      return encontrado;
    }

    function colisionAraña3(araña3, player) {
      const araña = araña3.getBoundingClientRect();
      const player1 = player.getBoundingClientRect();
      let encontrado = false;

      if (
        araña.x < player1.x + player1.width &&
        player1.x < araña.x + araña.width &&
        araña.y < player1.y + player1.height &&
        player1.y < araña.y + araña.height
      ) {
        console.log("COLISION CON ARAÑA 3");
        encontrado = true;
        score = score - 10;
        araña3.style.display = "none";
        console.log(score);
      }

      return encontrado;
    }

    function colisionAraña4(araña4, player) {
      const araña = araña4.getBoundingClientRect();
      const player1 = player.getBoundingClientRect();
      let encontrado = false;

      if (
        araña.x < player1.x + player1.width &&
        player1.x < araña.x + araña.width &&
        araña.y < player1.y + player1.height &&
        player1.y < araña.y + araña.height
      ) {
        console.log("COLISION CON ARAÑA 4");
        encontrado = true;
        score = score - 10;
        araña4.style.display = "none";
        console.log(score);
      }

      return encontrado;
    }

    function colisionAraña5(araña5, player) {
      const araña = araña5.getBoundingClientRect();
      const player1 = player.getBoundingClientRect();
      let encontrado = false;

      if (
        araña.x < player1.x + player1.width &&
        player1.x < araña.x + araña.width &&
        araña.y < player1.y + player1.height &&
        player1.y < araña.y + araña.height
      ) {
        console.log("COLISION CON ARAÑA 5");
        encontrado = true;
        score = score - 10;
        araña5.style.display = "none";
        console.log(score);
      }

      return encontrado;
    }

    //Funcion Arañas
    let araña1x=1240;
    setInterval(() => {
      let araña1style = araña1.getBoundingClientRect();
      if (araña1x <= 400){
        araña1x = 1240;
      }
      araña1x -= 10;
      araña1.style.left = `${araña1x}px`;
      /*console.log(araña1style.x);*/
    }, 100);;

    let araña2x=1488;
    setInterval(() => {
      let araña2style = araña2.getBoundingClientRect();
      if (araña2x <= 1000){
        araña2x = 1488;
      }
      araña2x -= 10;
      araña2.style.left = `${araña2x}px`;
    }, 100);;

    let araña3x=1230;
    setInterval(() => {
      let araña3style = araña3.getBoundingClientRect();
      /*console.log(araña3style.x);*/
      if (araña3x <= 650){
        araña3x = 1230;
      }
      araña3x -= 10;
      araña3.style.left = `${araña3x}px`;
     
    }, 100);;

    let araña4x=1400;
    setInterval(() => {
      let araña4style = araña4.getBoundingClientRect();
      /*console.log(araña3style.x);*/
      if (araña4x <= 650){
        araña4x = 1400;
      }
      araña4x -= 10;
      araña4.style.left = `${araña4x}px`;
     
    }, 100);;

    let araña5x=1400;
    setInterval(() => {
      let araña5style = araña5.getBoundingClientRect();
      /*console.log(araña3style.x);*/
      if (araña5x <= 550){
        araña5x = 1400;
      }
      araña5x -= 10;
      araña5.style.left = `${araña5x}px`;
     
    }, 100);;
    



  });
})();
