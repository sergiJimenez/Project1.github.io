<?php
$dbServerName = "81.88.51.228";
$dbUsername = "daw2b02";
$dbPassword = "Informatica2021";
$dbName = "daw2b02";

$conn = mysqli_connect($dbServerName, $dbUsername, $dbPassword, $dbName, 44334);

if($connectionBD -> connect_error){
    die("Connection Failed: " . $connectionBD -> connect_error);
}
echo "Connection Successfully!";
?>