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

     function select_ciclos()
     {
        $conexion = openBd();

        $sentenciaText = "SELECT * FROM `ciclos`";

        $sentencia = $conexion->prepare($sentenciaText);
        

        $sentencia->execute();

        $resultado = $sentencia->fetchAll();

        $conexion = closeBd();

        return $resultado;
     }
?>