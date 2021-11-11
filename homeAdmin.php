<?php
/*if (isset($_SESSION["ROLE"]) && $_SESSION["ROLE"] != "1") {
  header("location:.phpto");
  die();
}*/
?>
<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Index</title>
  <link href="style/styles.css" rel="stylesheet" />
  <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js" crossorigin="anonymous"></script>
</head>

<body>
  <?php include "php_views/header.php"; ?>
  <div id="layoutSidenav_content">
    <main>
      <div class="container-fluid">
        <h1 class="mt-4">
          Welcome to the admin page
        </h1>
        <div class="card mb-4">
          <div class="card-body">
            <p class="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
        </div>
      </div>
    </main>
  </div>
  <?php require "php_views/footer.php"; ?>
</body>

</html>