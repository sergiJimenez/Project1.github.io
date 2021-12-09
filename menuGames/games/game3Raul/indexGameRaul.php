<!-- 
include_once('Project1.github.io/php_library/database.php');

$ciclos = select_ciclos();
 -->

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Game Card</title>
  <link rel="stylesheet" href="./styleGameRaul/styleGameRaul.css" />
  <!--JS fontawesome-->
  <script src="https://kit.fontawesome.com/1ac3ed1571.js" crossorigin="anonymous" defer></script>
</head>

<body id="body">

  <!--Tablero-->
  <div id="tablero" class="background">
    <div class="memory-game" id="memory-game">
      <div id="cards">

        <!-- <div class="container">
          <table>
            <tr>
              <th>Id ciclo</th>
              <th>Nombre ciclo</th>
            </tr>

            <?php foreach ($ciclos as $ciclo) { ?>
              <tr>
                <td> <?php echo $ciclo['id']; ?></td>
                <td> <?php echo $ciclo['Nombre_Ciclos']; ?></td>
              </tr>
            <?php } ?>
          </table>
        </div> -->
      </div>
    </div>
    <!--Cartas-->
  </div>
  <script src="./jsGameRaul/mainGameRaul.js"></script>
  <script src="./jsGameRaul/variablesGameRaul.js"></script>
  <script src="./jsGameRaul/controllerGameRaul.js"></script>
  <script src="./jsGameRaul/htmlGameRaul.js"></script>
</body>

</html>