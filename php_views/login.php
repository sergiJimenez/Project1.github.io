<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <!-- LINKS -->
    <link rel="stylesheet" href="bootstrap-5.1.3-dist/css/bootstrap.min.css">
    <script src="bootstrap-5.1.3-dist/js/bootstrap.min.js"></script>
    <!-- LINKS -->
</head>

<body class="bg-dark">
    <div class="container">
        <div class="card card-login mx-auto mt150">
            <div class="card-header">Login</div>
            <div class="card-body">
                <form method=post>
                    <div class="form-group">
                        <div class="form-label-group">
                            <input type="username" id="username" class="form-control" placeholder="E-mail" required="required" autofocus>
                            <label for="username">Usuario</label>
                        </div>
                    </div>
                    <div class="form-group">
                        <div class="form-label-group">
                            <input type="password" id="inputPassword" class="form-control" placeholder="Contraseña" required="required">
                            <label for="inputPassword">Contraseña</label>
                        </div>
                    </div>
                    <input type="submit" class="btn btn-primary btn-block">
                </form>
            </div>
        </div>
    </div>
</body>

</html>