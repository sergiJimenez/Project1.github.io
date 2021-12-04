<?php
$dbServerName = "localhost";
$dbUsername = "root";
$dbPassword = "";
$dbName = "project1";
$connectionBD = mysqli_connect($dbServerName, $dbUsername, $dbPassword, $dbName);

if($connectionBD -> connect_error){
    die("Connection Failed: " . $connectionBD -> connect_error);
}
echo "Connection Successfully!";