<?php
/*require("database.php");
$error = "";
session_start();
if (isset($_POST["submit"])) {
    $username = $_POST["username"];
    $password = $_POST["password"];
    $sql = "SELECT * FROM admin_user WHERE username='$username' AND password='$password'";
    $res = mysqli_query($con, $sql);
    $count = mysqli_num_rows($res);
    if ($count > 0) {
        $row = mysqli_fetch_assoc($res);
        $_SESSION["ROLE"] = $row["ROLE"];
        $_SESSION["IS_LOGIN"] = "yes";
        if ($row["role"] == 1) {
            header("location:../index.php");
            die();
        }
        if ($row["role"] == 0) {
            header("location:news.php");
            die();
        }
    } else {
        $error = "Unvalid credentials. Please, enter the correct login details.";
    }
}*/
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
    <!-- BOOTSTRAP LINKS -->
    <link href="style/styles.css" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js" crossorigin="anonymous"></script>
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
                                    <form action="" method="post">
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
                                        <div class="form-group">
                                            <div class="custom-control custom-checkbox">
                                                <input class="custom-control-input" id="rememberPasswordCheck" type="checkbox" />
                                                <label class="custom-control-label" for="rememberPasswordCheck">
                                                    Remember password
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                            <a class="small" href="password.html">
                                                Forgot Password?
                                            </a> <!-- JUNTAR REMEMBER PASSWORD CON FORGOT PASSWORD -->
                                        </div><br>
                                        <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                            <input class="btn btn-dark" type="submit" name="submit" value="Enter">
                                        </div>
                                        <center><?php //echo $error 
                                                ?></center>
                                    </form>
                                </div>
                                <div class="card-footer text-center">
                                    <div class="small">
                                        <a href="registerAdmin.php">
                                            Need an account? Sign up!
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