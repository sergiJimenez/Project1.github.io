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
                                    <h3 class="text-center font-weight-light my-4">Be A Member</h3>
                                </div>
                                <div class="card-body">
                                    <form>
                                        <div class="form-row">
                                            <div class="form-row">
                                                <label class="small mb-1" for="inputFirstName">First Name</label>
                                                <input class="form-control" id="inputFirstName" type="text" placeholder="First Name" />
                                            </div><br>
                                            <div class="form-row">
                                                <label class="small mb-1" for="inputEmail">Email</label>
                                                <input class="form-control" id="inputEmail" type="email" placeholder="Email" />
                                            </div><br>
                                            <div class="dropdown">
                                                <label class="small mb-1">Formative Grade</label><br>
                                                <a class="btn btn-secondary dropdown-toggle" role="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">Choose One</a>
                                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <!-- Comerç i Màrqueting -->
                                                    <li><a class="dropdown-item" href="#">Grau mitjà activitats comercials</a></li>
                                                    <li><a class="dropdown-item" href="#">Grau superior màrqueting</a></li>
                                                    <li><a class="dropdown-item" href="#">Grau superior gestió de vendes i espais comercials</a></li>
                                                    <li><a class="dropdown-item" href="#">Grau superior comerç internacional</a></li>
                                                    <!-- Hoteleria i Turisme -->
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                    <li><a class="dropdown-item" href="#">Grau superior agències de viatges i gestió d'esdeveniments</a></li>
                                                    <!-- Informàtica i comunicacions -->
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                    <li><a class="dropdown-item" href="#">Grau mitjà sistemes microinformàtics i xarxes</a></li>
                                                    <li><a class="dropdown-item" href="#">Grau superior desenvolupaments aplicacions multiplataforma</a></li>
                                                    <li><a class="dropdown-item" href="#">Grau superior desenvolupaments aplicacions web</a></li>
                                                    <!-- Administració i gestió -->
                                                    <li>
                                                        <hr class="dropdown-divider">
                                                    </li>
                                                    <li><a class="dropdown-item" href="#">Grau mitjà gestió administrativa</a></li>
                                                    <li><a class="dropdown-item" href="#">Grau superior assistència a la direcció</a></li>
                                                    <li><a class="dropdown-item" href="#">Grau superior administració i finances</a></li>
                                                </ul>
                                            </div><br>
                                            <div class="form-row">
                                                <label class="small mb-1" for="inputPassword">Password</label>
                                                <input class="form-control" id="inputPassword" type="password" placeholder="Password" />
                                            </div><br>
                                            <div class="form-row">
                                                <label class="small mb-1" for="inputConfirmPassword">Confirm Password</label>
                                                <input class="form-control" id="inputConfirmPassword" type="password" placeholder="Confirm Password" />
                                            </div><br>
                                        </div>
                                        <div class="form-group text-center justify-content-between mt-4 mb-0">
                                            <a class="btn btn-dark" type="submit" name="submit" value="Enter" href="/Project1.github.io/menuGames/menus/gameIntro.html">
                                                Create an account
                                            </a>
                                        </div>
                                    </form>
                                </div>
                                <div class="card-footer text-center">
                                    <div class="small">
                                        <a href="loginUsers.php">
                                            Have an account? Go to login
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