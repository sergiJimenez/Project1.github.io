

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
    <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
            <main>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-5">
                            <div class="card shadow-lg border-0 rounded-lg mt-5">
                                <div class="card-header">
                                    <h3 class="text-center font-weight-light my-4">
                                        Log in de administrador
                                    </h3>
                                </div>
                                <div class="card-body">
                                    <form action="/Project1.github.io/php_controllers/userController.php" method="post">
                                        <!--Mail del usuario-->
                                            <div class="form-group row" style="margin-top:5px">
                                                <label for="mailUsuario" class="small mb-1">Email</label> <br>
                                                    <div class="col-sm-12">
                                                        <input type="text" class="form-control" value="<?php if (isset($usuario)) { echo $usuario['Mail_Usuario'];} ?>" name="mailUsuario" placeholder="Email" id="mailUsuario">
                                                    </div>
                                            </div>
                                            <br>
                                            <!--Mail del usuario-->
                                            <!--Password-->
                                            <div class="form-row">
                                                <label class="small mb-1" for="passwordUsuario">Contraseña</label>
                                                    <input class="form-control" id="passwordUsuario" type="password" name="passwordUsuario" placeholder="Contraseña" />
                                            </div>
                                            <br>
                                            <!--Password-->
                                        <div class="form-group text-center justify-content-between mt-4 mb-0">
                                            <button class="btn btn-dark" type="submit" class="btn btn-outline-primary" name="edit">
                                                Log in
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
</body>
</html>