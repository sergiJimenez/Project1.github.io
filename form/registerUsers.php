<?php
session_start();


if (isset($_SESSION["usuario"])) {
    $usuario = $_SESSION["usuario"];
    unset($_SESSION["usuario"]);
}

if (isset($_SESSION["error"])) {   
    unset($_SESSION["error"]);
}

if (isset($_SESSION["correcto"])) {
    unset($_SESSION["correcto"]);
}

require_once('./../php_library/database.php');
$ciclos = selectCiclos();
echo $ciclos;
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
                                    <h3 class="text-center font-weight-light my-4">Be A Member</h3>
                                </div>
                                <div class="card-body">
                                    <form action="../php_controllers/userController.php" method="POST">
                                        <div class="form-row">
                                            <div class="form-row">
                                                <label class="small mb-1" for="inputFirstName">First Name</label>
                                                <input class="form-control" id="inputFirstName" type="text" placeholder="First Name" />
                                            </div><br>
                                            <div class="form-row">
                                                <label class="small mb-1" for="inputEmail">Email</label>
                                                <input class="form-control" id="inputEmail" type="email" placeholder="Email" />
                                            </div><br>
                                            
                                            <div class="form-group row" style="margin-top:5px">
                                            <label class="small mb-1">Formative Grade</label>
                                                <br>
                                                <div class="col-sm-10">
                                                    <select class="form-control" name="ciclo" id="cicloUsuario" required>
                                                        <option value="">Formative Grade</option>
                                                        <!-- Comerç i Màrqueting -->
                                                        <option <?php if(isset($usuario)){if ($usuario['id_Ciclo'] == "1") {echo "selected";}} ?> value="1">Grau mitjà activitats comercials</option>
                                                        <option <?php if(isset($usuario)){if ($usuario['id_Ciclo'] == "2") {echo "selected";}} ?> value="2">Grau superior màrqueting</option>
                                                        <option <?php if(isset($usuario)){if ($usuario['id_Ciclo'] == "3") {echo "selected";}} ?> value="3">Grau superior gestió de vendes i espais comercials</option>
                                                        <option <?php if(isset($usuario)){if ($usuario['id_Ciclo'] == "4") {echo "selected";}} ?> value="4">Grau superior comerç internacional</option>
                                                        <!-- Hoteleria i Turisme -->
                                                        <option <?php if(isset($usuario)){if ($usuario['id_Ciclo'] == "5") {echo "selected";}} ?> value="5">Grau superior agències de viatges i gestió d'esdeveniments</option>
                                                        <!-- Informàtica i comunicacions -->
                                                        <option <?php if(isset($usuario)){if ($usuario['id_Ciclo'] == "6") {echo "selected";}} ?> value="6">Grau mitjà sistemes microinformàtics i xarxes</option>
                                                        <option <?php if(isset($usuario)){if ($usuario['id_Ciclo'] == "7") {echo "selected";}} ?> value="7">Grau superior desenvolupaments aplicacions multiplataforma</option>
                                                        <option <?php if(isset($usuario)){if ($usuario['id_Ciclo'] == "8") {echo "selected";}} ?> value="8">Grau superior desenvolupaments aplicacions web</option>
                                                        <!-- Administració i gestió -->
                                                        <option <?php if(isset($usuario)){if ($usuario['id_Ciclo'] == "9") {echo "selected";}} ?> value="9">Grau mitjà gestió administrativa</option>
                                                        <option <?php if(isset($usuario)){if ($usuario['id_Ciclo'] == "10") {echo "selected";}} ?> value="10">Grau superior assistència a la direcció</option>

                                                        <!--FOREACH-->
                                                        <option <?php if(isset($usuario)){if ($usuario['id_Ciclo'] == "11") {echo "selected";}} ?> value="11">Grau superior administració i finances</option>
                                                    </select>
                                                </div>
                                            </div>
                                                                
                                            <br>
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
                                            <button class="btn btn-dark" type="submit" name="insert" value="Enter">
                                                Create an account
                                            </button>
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