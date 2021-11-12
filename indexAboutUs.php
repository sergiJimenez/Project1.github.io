<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us</title>
    <!-- <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"> -->
    <link rel="stylesheet" href="bootstrap-5.1.3-dist/css/bootstrap.min.css">
    <script src="bootstrap-5.1.3-dist/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="style/styleAboutUs.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css">
    <script src="https://kit.fontawesome.com/27f55a2a2f.js" crossorigin="anonymous"></script>
</head>

<body>
    <?php include "partials/navbar.php" ?><br><br>
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