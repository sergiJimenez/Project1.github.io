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

    //ENTRA AQUI CUANDO LE DIGO QUE BORRE EL USUARIO
    if ($passUser == $passConfUser && strlen($passUser) > 0) {
        $usuario = insertUser(
            $userName,
            $mailUser,
            $cicloUser,
            $passUser
        );

        $_SESSION["usuario"] = $usuario;
        $_SESSION["correcto"] = "Usuario añadido correctamente";
        header("Location: ../php_views/userInfoAdmin.php");

        exit();
    } else {
        if (strlen($passUser) == 0 || $passUser != $passConfUser) {
            $mensajeError = "Indique alguna contraseña o bien ponga la misma en los dos campos";
        } else {
            $mensajeError =  "Rellene los datos";
        }
        $_SESSION["error"] = $mensajeError;
        header("Location: ../form/registerUsers.php");
        exit();
    }
}


if (isset($_POST["borrar"])) {
    $id = isset($_POST["valorUsuario"]) ? $_POST['valorUsuario'] : "";
    borrarUsuario(
        $id
    );
    header("Location: ../php_views/userInfoAdmin.php");
    exit();
} else {
    $_SESSION["error"] = "Error al borrar el usuario";
    header("Location: ../php_views/userInfoAdmin.php");
    exit();
}
