<?php

function insertarPuntuacion(){

$sessionActual = obtenerSession();

if ($_COOKIE["puntuacionFinal"] == null) {

} else {
    $conexion = abrirBd();
    $i = 0;
    $sentenciaTexto = "select Puntuacion, IdUsuario from usuario_juego_curso";
    $sentencia = $conexion->prepare($sentenciaTexto);

    $sentencia->execute();
    $resultado = $sentencia->fetchAll();
    $longitudArray = (count($resultado));
    

    while ($i <= $longitudArray) {
        if ($resultado[$i]['IdUsuario'] == $sessionActual && $resultado[$i]['IdJuego'] = 4 && $resultado[$i]['Puntuacion'] > $_COOKIE['puntuacionFinal']) {
            $cambiarPuntuacion = 2;
            $i = $longitudArray + 1;
            
        } else if ($resultado[$i]['IdUsuario'] == $sessionActual && $resultado[$i]['IdJuego'] = 4 && $resultado[$i]['Puntuacion'] <= $_COOKIE['puntuacionFinal']) {
            $cambiarPuntuacion = 1;
            $i = $longitudArray + 1;
                   
        }else{
            if ($_COOKIE['puntuacionFinal'] == null) {
                $cambiarPuntuacion = 2;
                $i = $longitudArray + 1;
            } else {
                $cambiarPuntuacion = 0;
                $i++;
            }
            
        }
        
    }
    
    $conexion = cerrarBd();

    if ($cambiarPuntuacion == 0) {
        $conexion = abrirBd();

        $sentenciaTexto = "insert into usuario_juego_curso values (null, 4, :id_usuario, 3, :puntuacion )";
        $sentencia = $conexion->prepare($sentenciaTexto);


        $sentencia->bindParam(':id_usuario', $sessionActual);
        // $sentencia->bindParam(':id_curso', $cursoUsuario);
        $sentencia->bindParam(':puntuacion', $_COOKIE['puntuacionFinal']);

        $sentencia->execute();
            
        $conexion = cerrarBd();

    } else if ($cambiarPuntuacion == 1) {

        $conexion = abrirBd();

        $sentenciaTexto = "update usuario_juego_curso set Puntuacion = :puntuacion where IdUsuario = :id_usuario and IdJuego = 4";
        $sentencia = $conexion->prepare($sentenciaTexto);


        $sentencia->bindParam(':id_usuario', $sessionActual);
        // $sentencia->bindParam(':id_curso', $cursoUsuario);
        $sentencia->bindParam(':puntuacion', $_COOKIE['puntuacionFinal']);
        

        $sentencia->execute();
        
        $conexion = cerrarBd();
    }else{
        
    }
    
}

}

function abrirBd(){

    $servername = "daw2b02";
    $username = "daw2b02";
    $password = "Informatica2021";
       
    $conexion = new PDO("mysql:host=$servername;dbname=Juego", $username, $password); 
    // set the PDO error mode to exception
    $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $conexion->exec("set names utf8");

    return $conexion;

}

function cerrarBd(){
    return null;
}

function seleccionarUsuarios(){

    $conexion = abrirBd();
    $sentenciaTexto = "select usuario.Nombre, usuario.Apellido ,usuario_juego_curso.Puntuacion from usuario_juego_curso join usuario on usuario.Id = usuario_juego_curso.IdUsuario where usuario_juego_curso.IdJuego = 4 order by usuario_juego_curso.Puntuacion desc limit 10";

    $sentencia = $conexion->prepare($sentenciaTexto);
    $sentencia->execute();

    $resultado = $sentencia->fetchAll();

    $conexion = cerrarBd();

    return $resultado;
}

function posicion(){
    $_SESSION['posicion']++;
    echo $_SESSION['posicion'];
}



?>




