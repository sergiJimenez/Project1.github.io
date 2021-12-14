<?php

require_once("../php_library/database.php");

if (isset($_POST['insert'])) {
    if ($_POST['inputPassword'] == $_POST['inputConfirmPassword']) {
        insertUser($_POST['inputFirstName'], $_POST['inputEmail'], $_POST['dropdownMenuButton'], $_POST['inputPassword']);

        header("Location: ../menuGames/games/game3Raul/rankingGameRaul/ranking.php");
        exit();
    }
    else{
        echo "las contraseñas no son iguales";
        header("Location: google.es");
        exit();
    }
}
?>