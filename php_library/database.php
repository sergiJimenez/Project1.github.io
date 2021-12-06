<?php
$dbServerName = "81.88.51.228:44334	";
$dbUsername = "daw2b02";
$dbPassword = "Informatica2021";
$dbName = "daw2b02";
$connectionBD = mysqli_connect($dbServerName, $dbUsername, $dbPassword, $dbName);

if($connectionBD -> connect_error){
    die("Connection Failed: " . $connectionBD -> connect_error);
}
echo "Connection Successfully!";