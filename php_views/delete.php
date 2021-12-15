<?php
require_once('./../php_library/database.php');

    $id = $_POST['id'];

    $conexion = openBd();

    $valor = $_POST['valorUsuario'];

    $sentenciaText = "DELETE FROM `daw2b02`.`usuarios` WHERE `usuarios`.`id` = $id";

    $sentencia = $conexion->prepare($sentenciaText);


    $sentencia->execute();

    $resultado = $sentencia->fetchAll();



    if($sentencia)
    {
        $conexion = closeBd();
        header("Location: ./userInfoAdmin"); // redirects to all records page
        exit;	
    }
    else
    {
        echo "Error deleting record"; // display error message if not delete
    }

    //No añade la tabla usuarios_ciclos
    //Como borro una tabla? --> asi?

?>
