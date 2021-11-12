<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us</title>
    <!-- BOOTSTRAP -->
    <link rel="stylesheet" href="bootstrap-5.1.3-dist/css/bootstrap.min.css">
    <script src="bootstrap-5.1.3-dist/js/bootstrap.min.js"></script>
    <!-- CSS -->
    <link rel="stylesheet" href="style/styleAboutUs.css">
    <!-- CSS & JS fontawesome-->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css">
    <script src="https://kit.fontawesome.com/27f55a2a2f.js" crossorigin="anonymous"></script>
</head>

<body>
    <?php include("php_partials/navbar.php"); ?><br><br>
    <h1 class="titulo">Team</h1><br><br>
    <div class="container">
        <div class="row row-cols-1 row-cols-md-4 g-5 mt-4">
            <div class="col">
                <div class="card">
                    <div class="front">
                        <img src="media/AboutUsPics/borja.jpeg" alt="">
                    </div>
                    <div class="back">
                        <div class="back-content middle">
                            <h2>Borja García</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <div class="front">
                        <img src="media/AboutUsPics/sergi.jpeg" alt="">
                    </div>
                    <div class="back">
                        <div class="back-content middle">
                            <h2>Sergi Perez</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <div class="front">
                        <img src="media/AboutUsPics/raul.jpeg" alt="">
                    </div>
                    <div class="back">
                        <div class="back-content middle">
                            <h2>Raul Lendines</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="card">
                    <div class="front">
                        <img src="media/AboutUsPics/aitor.png" alt="">
                    </div>
                    <div class="back">
                        <div class="back-content middle">
                            <h2>Aitor Carro</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>