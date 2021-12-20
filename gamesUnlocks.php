<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Games Menu</title>
    <link rel="stylesheet" href="../style/gamesMenu.css">
</head>
<body>
<?php
    if(!isset($_SESSION['USER_ID'])){ //Game one default without user login
        echo '<a type="button" class="Games1" href="../games/game1Borja/index.html"></a>';
    } else if(isset($_SESSION['USER_ID'])){ //Game two default
        echo '<a type="button" class="Games2" href="../games/game2Aitor/index.html"></a>';
    }

    if(isset($_SESSION['USER_ID'])){ //Game three default
        echo '<a type="button" class="Games3" href="../games/game3Raul/indexGameRaul.php"></a>';
    }

    if(isset($_SESSION['USER_ID'])){ //Game four default
        echo '<a type="button" class="Games4" href="../games/game4Sergi/game4Sergi.html"></a>';
    }

    if(isset($_SESSION['USER_ID'])){ //Game one default
        echo '<a type="button" class="Games1" href="../games/game1Borja/index.html"></a>';
    }
?>
<a type="button" class="Back" href="mainMenu.html"></a>
</body>
</html>