<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbName = "project1";

//Creeate connection
$connection = new mysqli($servername, $username, $password, $dbName);

//Check connection
if ($connection->connect_error){
    die("Connection failed: " . $connection->connect_error);
}
//Prepare and blind
$stmt = $connection->prepare();
$stmt->bind_param();

//Set parameters and execute

?>