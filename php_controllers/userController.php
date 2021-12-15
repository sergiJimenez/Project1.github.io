<?php

require_once("../php_library/database.php");

$error = [];

if (isset($_SESSION['usuario'])) {
    $usuario = $_SESSION['usuario'];
}

if (isset($_POST['insert'])) {

    //Nombre usuario
    $userName = isset($_POST['nombreUsuario']) ? $_POST['nombreUsuario'] : "";

    //Mail usuario
    $mailUser = isset($_POST['mailUsuario']) ? $_POST['mailUsuario'] : "";

    //Ciclo usuario
    $cicloUser = isset($_POST['ciclo']) ? $_POST['ciclo'] : "";

    //Contraseña usuario 
    $passUser = isset($_POST['passwordUsuario']) ? $_POST['passwordUsuario'] : "";

    //Contraseña usuario 
    $passConfUser = isset($_POST['confirmarPasswordUsuario']) ? $_POST['confirmarPasswordUsuario'] : "";
}

if (isset($_POST["borrar"])) {
    borrarUsers();
}

if ($passUser == $passConfUser) {
    $usuario = insertUser(
        $userName,
        $mailUser,
        $cicloUser,
        $passUser
    );
}else{
    $_SESSION["error"] = "Ponga correctamente su contraseña";
    header("Location: ../form/registerUsers.php");
    exit();
}

if (isset($_SESSION["correcto"])) {
    $_SESSION["usuario"] = $usuario;
    $_SESSION["correcto"] = "Usuario añadido correctamente";
    header("Location: ../php_views/userInfoAdmin.php");

    exit();
} else {
    $_SESSION["usuario"] = $usuario;
    $_SESSION["error"] = "Usuario no se ha podido añadir";
    header("Location: ../php_views/userInfoAdmin.php");
    exit();
}
