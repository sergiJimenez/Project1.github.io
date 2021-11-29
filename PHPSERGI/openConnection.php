<?php
$serverName = "localhost";
$userName = "sperezj2021@cepnet.net";
$password = "1234abcd";

//Create Connection
$connection = new mysqli($serverName, $userName, $password);

//Check Connection
if($connection -> connect_error){
    die("Connection Failed: " . $connection -> connect_error);
}
echo "Connection Successfully!";

//In case that we wanna close the connection, the order is:
//$connection -> close();
?>