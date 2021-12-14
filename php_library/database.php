<?php
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

function insertUser($id_usuario, $ciclo, $nombre, $contraseña)
    {
        $conexion = openBd();

        $sentenciaText = "INSERT INTO usuarios (Mail_Usuario, Nombre_Ciudad, Contrasenya_Usuario) VALUES (:id_usuario, :ciclo, :nombre, :contraseña)";

        $sentencia = $conexion->prepare($sentenciaText);

        $sentencia->bindParam(":id_usuario", $id_usuario);
        $sentencia->bindParam(":ciclo", $ciclo);
        $sentencia->bindParam(":nombre", $nombre);
        $sentencia->bindParam(":contraseña", $contraseña);

        $sentencia->execute();

        $conexion = closeBd();
    }
