<?php include_once 'php_library/database.php'?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Game Card</title>
    <link rel="stylesheet" href="../games_style/styleGameRaul.css" />
    <!--JS fontawesome-->
    <script
      src="https://kit.fontawesome.com/1ac3ed1571.js"
      crossorigin="anonymous"
      defer
    ></script>
  </head>

  <body id="body">
    <!--Tablero-->
    <div id="tablero" class="background">
      <div class="memory-game" id="memory-game">
        <div id="cards">
        <?php
            $select = mysqli_query($db,"SELECT * FROM `ciclos`");
            $result = $conn->query($select);

            while($row = $select->fetch_assoc()) {
              echo "<br> id: ". $row["id"]. " - Name: ". $row["Abr_Ciclos"]. " " . $row["Nombre_Ciclos"] . "<br>";
          }
        ?>
        </div>
      </div>
      <!--Cartas-->
    </div>
    <script src="mainGameRaul.js"></script>
    <script src="variables.js"></script>
    <script src="controllerGameRaul.js"></script>
    <script src="htmlGameRaul.js"></script>
  </body>
</html>
