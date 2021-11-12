<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
    <!-- BOOTSTRAP LINKS -->
    <link rel="stylesheet" href="../bootstrap-5.1.3-dist/css/bootstrap.min.css">
    <script src="../bootstrap-5.1.3-dist/js/bootstrap.min.js"></script>
    <!-- BOOTSTRAP LINKS -->
    <link href="style/styles.css" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js" crossorigin="anonymous"></script>
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
                                    <h3 class="text-center font-weight-light my-4">Create Account</h3>
                                </div>
                                <div class="card-body">
                                    <form>
                                        <div class="form-row">
                                            <div class="form-row">
                                                <label class="small mb-1" for="inputFirstName">First Name</label>
                                                <input class="form-control" id="inputFirstName" type="text" placeholder="First Name" />
                                            </div><br>
                                            <div class="form-row">
                                                <label class="small mb-1" for="inputLastName">Last Name</label>
                                                <input class="form-control" id="inputLastName" type="text" placeholder="Last Name" />
                                            </div><br>
                                            <div class="form-row">
                                                <label class="small mb-1" for="inputEmail">Email</label>
                                                <input class="form-control" id="inputEmail" type="email" placeholder="Email" />
                                            </div><br>
                                            <div class="form-row">
                                                <label class="small mb-1" for="inputPassword">Password</label>
                                                <input class="form-control" id="inputPassword" type="password" placeholder="Password" />
                                            </div><br>
                                            <div class="form-row">
                                                <label class="small mb-1" for="inputConfirmPassword">Confirm Password</label>
                                                <input class="form-control" id="inputConfirmPassword" type="password" placeholder="Confirm Password" />
                                            </div><br><br>
                                        </div>
                                        <div class="form-group mt-4 mb-0">
                                            <a class="btn btn-dark btn-block" href="check.php">
                                                Create Account
                                            </a><!-- BOTON EN EL CENTRO -->
                                        </div>
                                    </form>
                                </div>
                                <div class="card-footer text-center">
                                    <div class="small">
                                        <a href="login.php">
                                            Have an account? Go to login.
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