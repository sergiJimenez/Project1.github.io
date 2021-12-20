<?php

require_once("../php_library/database.php");

$error = [];

if (isset($_SESSION['usuario'])) {
    $usuario = $_SESSION['usuario'];
}


// INSERTAR USUARIO
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

    if ($passUser == $passConfUser && strlen($passUser) > 0) {
        $mailUsuario = selectMail($mailUser);
        var_dump($mailUsuario);
            if (count($mailUsuario) != 0) {
                $_SESSION["error"] = "Porfavor indique un mail distinto, ese ya esta en nuestra base de datos";
                header("Location: ../form/registerUsers.php");
                exit();
            }else {
                $usuario = insertUser(
                    $userName,
                    $mailUser,
                    $cicloUser,
                    $passUser
                );

                $_SESSION["usuario"] = $usuario;
                $_SESSION["correcto"] = "Usuario añadido correctamente";
                header("Location: ../menuGames/menus/gameIntro.html");

                exit();
            }
    }else {
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

// BORRAR USUARIO
if (isset($_POST["borrar"])) {
    $id = isset($_POST["valorUsuario"]) ? $_POST['valorUsuario'] : "";
    if ($id > -1) {
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
}

// EDITAR USUARIO
if (isset($_POST["edit"])) {
    $id = isset($_POST["valorUsuario"]) ? $_POST['valorUsuario'] : "";
    if ($id > -1) {
        $_SESSION["id"] = $id;
        header("Location: ../form/editUsers.php");
        exit();
    } else {
        $_SESSION["error"] = "Error al editar el usuario";
        header("Location: ../php_views/userInfoAdmin.php");
        exit();
    }
}

// EDITAR USUARIO
if (isset($_POST["editar"])) {
    $id = isset($_POST["valorUsuario"]) ? $_POST['valorUsuario'] : "";
    if ($id > -1) {
        editarUsuario(
            $id
        );
        header("Location: ../form/editUsers.php");
        exit();
    } else {
        $_SESSION["error"] = "Error al editar el usuario";
        header("Location: ../php_views/userInfoAdmin.php");
        exit();
    }
}

// LOGIN ADMIN
if (isset($_POST["logAdmin"])) {

    //Mail usuario
    $mailUser = isset($_POST['mailUsuario']) ? $_POST['mailUsuario'] : "";

    //Contraseña usuario 
    $passUser = isset($_POST['passwordUsuario']) ? $_POST['passwordUsuario'] : "";
    
    if ($id > -1) {
        editarUsuario(
            $id
        );
        header("Location: ../homeAdmin.php");
        exit();
    } else {
        $_SESSION["error"] = "Error al editar el usuario";
        header("Location: ../php_views/userInfoAdmin.php");
        exit();
    }
}

// LOGIN USER
if (isset($_POST["logUser"])) {

    //Mail usuario
    $mailUser = isset($_POST['mailUsuario']) ? $_POST['mailUsuario'] : "";

    //Contraseña usuario 
    $passUser = isset($_POST['passwordUsuario']) ? $_POST['passwordUsuario'] : "";
    
    $login = loginUsuario($mailUser, $passUser);

    if (count($login) != 0) {
        $_SESSION["idUsuario"] = selectUsers();
        header("Location: ../menuGames/menus/gameIntro.html");
        exit();
    } else {
        $_SESSION["error"] = "Error al hacer un login";
        header("Location: ../form/loginUsers.php");
        exit();
    }
}
?>