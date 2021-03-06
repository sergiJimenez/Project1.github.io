<?php

session_start();

function openBd()
{
    $servername = "hostingmysql335.nominalia.com";
    $username = "daw2b02";
    $password = "Informatica2021";
    $dbName = "daw2b02";

    $conexion = new PDO("mysql:host=$servername;dbname=$dbName", $username, $password);
    // set the PDO error mode to exception
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conexion->exec("set names utf8");

    return $conexion;
}

function closeBd()
{
    return null;
}

function selectUsers()
{
    $conexion = openBd();

    $sentenciaText = "SELECT * FROM `usuarios`";

    $sentencia = $conexion->prepare($sentenciaText);


    $sentencia->execute();

    $resultado = $sentencia->fetchAll();

    $conexion = closeBd();


    return $resultado;
}

function selectUsersId($mail){
    try {
        $conexion = openBd();

        $sentenciaText = "SELECT `usuarios`.`Rol_Administrador` FROM `usuarios` WHERE `usuarios`.`Mail_Usuario` = '$mail'";

        $sentencia = $conexion->prepare($sentenciaText);

        $sentencia->execute();

        $resultado = $sentencia->fetchAll();

        $conexion = closeBd();

    return $resultado;
    } catch (PDOException $e) {
        $_SESSION['error'] = "Ha habido un error con " . $e->getMessage();
    }
}

function selectMail($mail){
    try {
        $conexion = openBd();

        $sentenciaText = "SELECT * FROM `usuarios` WHERE `usuarios`.`Mail_Usuario` = '$mail'";

        $sentencia = $conexion->prepare($sentenciaText);

        $sentencia->execute();

        $resultado = $sentencia->fetchAll();

        $conexion = closeBd();

    return $resultado;
    } catch (PDOException $e) {
        $_SESSION['error'] = "Ha habido un error con " . $e->getMessage();
    }
}

function selectCiclos()
{
    try {
        $conexion = openBd();

        $sentenciaText = "SELECT * FROM `ciclos`";

        $sentencia = $conexion->prepare($sentenciaText);

        $sentencia->execute();

        $resultado = $sentencia->fetchAll();

        $conexion = closeBd();

    return $resultado;
    } catch (PDOException $e) {
        $_SESSION['error'] = "Ha habido un error con ". $e->getMessage();
    }
}

function insertUser($nombre, $email, $ciclo, $contrasenya)
{
    try {
        $conexion = openBd();

        $conexion->beginTransaction();

        $sentenciaText = "INSERT INTO usuarios (Mail_Usuario, Nombre_Usuario, Contrasenya_Usuario) VALUES (:email, :nombre, :contrasenya)";

        $sentencia = $conexion->prepare($sentenciaText);

        $sentencia->bindParam(":email", $email);
        $sentencia->bindParam(":nombre", $nombre);
        $sentencia->bindParam(":contrasenya", $contrasenya);

        $sentencia->execute();

        $id_usuario = $conexion->lastInsertId();

        $sentenciaText = "INSERT INTO usuarios_ciclos (id_Ciclo, id_Usuario) VALUES (:id_Ciclo, :id_Usuario)";

        $sentencia = $conexion->prepare($sentenciaText);

        $sentencia->bindParam(":id_Ciclo", $ciclo);
        $sentencia->bindParam(":id_Usuario", $id_usuario);

        $sentencia->execute();

        $conexion->commit();

        $conexion = closeBd();
    } catch (PDOException $e) {
        $_SESSION['error'] = $e->getCode() . ' - ' . $e->getMessage();
    }
}

function borrarUsuario($id)
{
    try {
        $conexion = openBd();

        $conexion->beginTransaction();

        $sentenciaText = "DELETE FROM `daw2b02`.`usuarios_ciclos` WHERE `usuarios_ciclos`.`id_Usuario` = $id";

        $sentencia = $conexion->prepare($sentenciaText);

        $sentencia->execute();

        $id_usuario = $conexion->lastInsertId();

        $sentenciaText = "DELETE FROM `daw2b02`.`usuarios` WHERE `usuarios`.`id` = $id";

        $sentencia = $conexion->prepare($sentenciaText);

        $sentencia->execute();

        $conexion->commit();

        $conexion = closeBd();
    } catch (PDOException $e) {
        $_SESSION['error'] = $e->getCode() . ' - ' . $e->getMessage();
    }
}

function cargarDatos($id){
    
    $conexion = openBd();

    $valor = $_POST['valorUsuario'];

    $sentenciaText = "SELECT * FROM `daw2b02`.`usuarios` WHERE `usuarios`.`id` = $id";

    $sentencia = $conexion->prepare($sentenciaText);


    $sentencia->execute();

    $resultado = $sentencia->fetchAll();
    
    return $resultado;
}

function editarUsuario($id, $nombre, $email, $ciclo, $contrasenya, $adminis){
    try {
        $conexion = openBd();

        $conexion->beginTransaction();

        $sentenciaText = "UPDATE `usuarios` SET Mail_Usuario = :email, Nombre_Usuario = :nombre, Contrasenya_Usuario = :contrasenya, Rol_Administrador = :adminis WHERE `usuarios`.`id` = :id";

        $sentencia = $conexion->prepare($sentenciaText);

        $sentencia->bindParam(":id", $id);
        $sentencia->bindParam(":email", $email);
        $sentencia->bindParam(":nombre", $nombre);
        $sentencia->bindParam(":contrasenya", $contrasenya);
        $sentencia->bindParam(":adminis", $adminis);

        $sentencia->execute();

        $id_usuario = $conexion->lastInsertId();

        $sentenciaText = "UPDATE `usuarios_ciclos` SET id_Ciclo = :id_Ciclo WHERE `usuarios_ciclos`.`id` = :id_Usuario";

        $sentencia = $conexion->prepare($sentenciaText);

        $sentencia->bindParam(":id_Ciclo", $ciclo);
        $sentencia->bindParam(":id_Usuario", $id_usuario);

        $sentencia->execute();

        $conexion->commit();

        $conexion = closeBd();
    } catch (PDOException $e) {
        $_SESSION['error'] = $e->getCode() . ' - ' . $e->getMessage();
    }
}

function loginUsuario($mail, $password){
    try {
        $conexion = openBd();

        $sentenciaText = "SELECT * FROM `usuarios` WHERE `usuarios`.`Mail_Usuario` = :email AND `usuarios`.`Contrasenya_Usuario` = :contrasenya";

        $sentencia = $conexion->prepare($sentenciaText);

        $sentencia->bindParam(":email", $mail);
        $sentencia->bindParam(":contrasenya", $password);

        $sentencia->execute();

        $resultado = $sentencia->fetchAll();

        $conexion = closeBd();

    return $resultado;
    } catch (PDOException $e) {
        $_SESSION['error'] = "Ha habido un error con " . $e->getMessage();
    }
}