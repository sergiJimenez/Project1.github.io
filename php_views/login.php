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
    <!-- BOOTSTRAP LINKS -->
</head>

<body class="bg-dark">
    <div class=" container w-25">
        <div class="col mt-5">
            <div class="card">
                <div class="card-header" style="text-align: center;">Login</div><br>
                <div class="card-body">
                    <form method=post>
                        <div class="row">
                            <label for="username" class="col-sm-4 col-form-label">Usuario</label>
                            <div class="col-sm">
                                <input type="username" id="username" class="form-control" placeholder="E-mail" required="required" autofocus>
                            </div>
                        </div>
                        <div class="row pt-2">
                            <label for="inputPassword" class="col-sm-4 col-form-label">Contraseña</label>
                            <div class="col-sm">
                                <input type="password" id="inputPassword" class="form-control" placeholder="Contraseña" required="required">
                            </div>
                        </div>
                        <div class="row mt-4 justify-content-center">
                            <input type="submit" class="btn btn-outline-success" href="#" value="Entrar">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>

</html>