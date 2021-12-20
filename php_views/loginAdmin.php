<?php

if (isset($_SESSION["usuario"])) {
    $usuario = $_SESSION["usuario"];
    unset($_SESSION["usuario"]);
}

if (isset($_SESSION["error"])) {
    $error = $_SESSION["error"];
    unset($_SESSION["error"]);
}
else{
    $error = "";
}

if (isset($_SESSION["correcto"])) {
    unset($_SESSION["correcto"]);
}

require_once('./../php_library/database.php');
$ciclos = selectCiclos();

?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <!-- BOOTSTRAP LINKS -->
    <link rel="stylesheet" href="../bootstrap-5.1.3-dist/css/bootstrap.min.css">
    <script src="../bootstrap-5.1.3-dist/js/bootstrap.min.js"></script>
</head>

<body class="bg-dark">
    <?php include "../php_partials/mensajes.php"; ?>
    <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
            <main>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-5">
                            <div class="card shadow-lg border-0 rounded-lg mt-5">
                                <div class="card-header">
                                    <h3 class="text-center font-weight-light my-4">
                                        Login
                                    </h3>
                                </div>
                                <div class="card-body">
                                    <form action="../php_controllers/userController.php" method="post">
                                        <div class="form-group">
                                            <label class="small mb-1" for="mailUsuario">
                                                Email
                                            </label>
                                            <input name="mailUsuario" class="form-control" id="mailUsuario" type="username" placeholder="Enter your email" autofocus /><br>
                                        </div>
                                        <div class="form-group">
                                            <label class="small mb-1" for="passwordUsuario">
                                                Password
                                            </label>
                                            <input name="passwordUsuario" class="form-control" id="passwordUsuario" type="password" placeholder="Enter password" /><br>
                                        </div>
                                        <div class="form-group text-center justify-content-between mt-4 mb-0">
                                            <button class="btn btn-dark" type="submit" class="btn btn-outline-primary" name="logAdmin">
                                                Log in
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div class="card-footer text-center">
                                    <div class="small">
                                        <a href="registerUsers.php">
                                            Haven't got an account? Register now here
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
    <script src="../functionalJS/fullscreen.js"></script>
</body>
</html>