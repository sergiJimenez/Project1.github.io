<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <!-- BOOTSTRAP LINKS -->
    <link rel="stylesheet" href="/Project1.github.io/bootstrap-5.1.3-dist/css/bootstrap.min.css">
    <script src="/Project1.github.io//bootstrap-5.1.3-dist/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
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
                                            <div class="dropdown show">
                                                <label class="small mb-1" for="dropdownMenuButton">Formative Grade</label><br>
                                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Choose One</button>
                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <!-- Comerç i Màrqueting -->
                                                    <a class="dropdown-item">Grau mitjà activitats comercials</a>
                                                    <a class="dropdown-item">Grau superior màrqueting</a>
                                                    <a class="dropdown-item">Grau superior gestió de vendes i espais comercials</a>
                                                    <a class="dropdown-item">Grau superior comerç internacional</a>
                                                    <!-- Hoteleria i Turisme -->
                                                    <a class="dropdown-item">Grau superior agències de viatges i gestió d'esdeveniments</a>
                                                    <!-- Informàtica i comunicacions -->
                                                    <a class="dropdown-item">Grau mitjà sistemes microinformàtics i xarxes</a>
                                                    <a class="dropdown-item">Grau superior desenvolupaments aplicacions multiplataforma</a>
                                                    <a class="dropdown-item">Grau superior desenvolupaments aplicacions web</a>
                                                    <!-- Administració i gestió -->
                                                    <a class="dropdown-item">Grau mitjà gestió administrativa</a>
                                                    <a class="dropdown-item">Grau superior assistència a la direcció</a>
                                                    <a class="dropdown-item">Grau superior administració i finances</a>
                                                </div>
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
                                        <div class="form-group mt-4 mb-0">
                                            <a class="btn btn-dark btn-block" href="/Project1.github.io/menuGames/menus/gameIntro.html">
                                                Create an Account
                                            </a><!-- BOTON EN EL CENTRO -->
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
</body>

</html>