<?php

require_once("../php_library/database.php");

if (isset($_POST['insert'])) {
    if ($_POST['inputPassword'] == $_POST['inputConfirmPassword']) {
        insertUser($_POST['inputFirstName'], $_POST['inputEmail'], $_POST['dropdownMenuButton'], $_POST['inputPassword']);      //ESTO DA ERROR 500

        header("Location: ../menuGames/games/game3Raul/rankingGameRaul/ranking.php");
        exit();
    }
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>hol</p>
</body>
</html>