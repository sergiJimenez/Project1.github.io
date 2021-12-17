<?php

if (isset($_SESSION["usuario"])) {
    $usuario = $_SESSION["usuario"];
    unset($_SESSION["usuario"]);
}

if (isset($_SESSION["error"])) {
    $error = $_SESSION["error"];
    unset($_SESSION["error"]);
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
    <title>Register</title>
    <!-- BOOTSTRAP LINKS -->
    <link rel="stylesheet" href="/Project1.github.io/bootstrap-5.1.3-dist/css/bootstrap.min.css">
</head>

<body class="bg-dark">
    <div id="layoutAuthentification">
        <div id="layoutAuthentification_content">
            <main>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-7">
                            <div class="card shadow-lg border-0 rounded-lg mt-5">
                                <div class="card-header">
                                    <h3 class="text-center font-weight-light my-4">Únete</h3>
                                </div>
                                <div class="card-body">
                                    <form action="../php_controllers/userController.php" method="POST">
                                        <div class="form-row">

                                            <!--Nombre del usuario-->
                                            <div class="form-group row" style="margin-top:5px">
                                                <label for="nombreUsuario" class="small mb-1">Nombre</label> <br>
                                                <div class="col-sm-12">
                                                    <input type="text" class="form-control" value="<?php if (isset($usuario)) { echo $usuario['Nombre_Usuario'];} ?>" name="nombreUsuario" placeholder="Nombre" id="nombreUsuario">
                                                </div>
                                            </div>
                                            <br>
                                            <!--Nombre del usuario-->

                                            <!--Mail del usuario-->
                                            <div class="form-group row" style="margin-top:5px">
                                                <label for="mailUsuario" class="small mb-1">Email</label> <br>
                                                <div class="col-sm-12">
                                                    <input type="text" class="form-control" value="<?php if (isset($usuario)) { echo $usuario['Mail_Usuario'];} ?>" name="mailUsuario" placeholder="Email" id="mailUsuario">
                                                </div>
                                            </div>
                                            <br>
                                            <!--Mail del usuario-->

                                            <!--Eleccion de ciclos-->
                                            <div class="form-group row" style="margin-top:5px">
                                                <label class="small mb-1">Formative Grade</label>
                                                <br>
                                                <div class="col-sm-12">
                                                    <select class="form-control" name="ciclo" id="cicloUsuario" required>
                                                        <option class="mb-1" disabled>Formative Grade</option>
                                                        <?php foreach ($ciclos as $ciclo) { ?>
                                                            <option <?php if (isset($usuario)) {
                                                                        if ($usuario['id_Ciclo'] == $ciclo['id']) {
                                                                            echo "selected";
                                                                        }
                                                                    } ?> value=<?php echo $ciclo['id'] ?>> <?php echo $ciclo['Nombre_Ciclos'] ?> </option>
                                                        <?php } ?>
                                                    </select>
                                                </div>
                                            </div>
                                            <br>
                                            <!--Eleccion de ciclos-->
                                          
                                            <!--Password-->
                                            <div class="form-row">
                                                <label class="small mb-1" for="passwordUsuario">Contraseña</label>
                                                <input class="form-control" id="passwordUsuario" type="password" name="passwordUsuario" placeholder="Contraseña" />
                                            </div>
                                            <br>
                                            <!--Password-->

                                            <!--Repetir password-->
                                            <div class="form-row">
                                                <label class="small mb-1" for="confirmarPasswordUsuario">Confirmar contraseña</label>
                                                <input class="form-control" id="confirmarPasswordUsuario" type="password" name="confirmarPasswordUsuario" placeholder="Confirmar contraseña" />
                                            </div>
                                            <br>
                                            <!--Repetir password-->
                                            <?php if ($error != null) {
                                                echo '<div class="alert alert-danger" role="alert">';
                                                    echo $error;
                                                echo '</div>';
                                            }?>
                                        </div>
                                        <div class="form-group text-center justify-content-between mt-4 mb-0">
                                            <button class="btn btn-dark" type="submit" name="insert" value="Enter">
                                                Crear una cuenta
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div class="card-footer text-center">
                                    <div class="small">
                                        <a href="loginUsers.php">
                                            Tengo una cuenta
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
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
    <script src="/Project1.github.io/bootstrap-5.1.3-dist/js/bootstrap.min.js"></script>
</body>

</html>