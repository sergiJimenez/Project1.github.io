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
                                        Login
                                    </h3>
                                </div>
                                <div class="card-body">
                                    <form action="../php_controllers/userController.php" method="post">
                                        <div class="form-group">
                                            <label class="small mb-1" for="inputEmailAddress">
                                                Username
                                            </label>
                                            <input name="username" class="form-control" id="inputEmailAddress" type="username" placeholder="Enter username" autofocus /><br>
                                        </div>
                                        <div class="form-group">
                                            <label class="small mb-1" for="inputPassword">
                                                Password
                                            </label>
                                            <input name="password" class="form-control" id="inputPassword" type="password" placeholder="Enter password" /><br>
                                        </div>
                                        <div class="form-group text-center justify-content-between mt-4 mb-0">
<<<<<<< HEAD
                                            <button class="btn btn-dark" type="submit" class="btn btn-outline-primary" name="logUser">
                                                Log in
                                            </button>
=======
                                            <a class="btn btn-dark" type="submit" name="submit" value="Enter" href="/Project1.github.io/menuGames/menus/gameIntro.html">Enter</a>
                                            <button onclick="openFullscreen();">Open</button>
                                            <button onclick="closeFullscreen();">Close</button>
>>>>>>> d520ae1aa9601f605742705cd7b3005bb8cf2531
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