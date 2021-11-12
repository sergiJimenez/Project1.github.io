<?php
/*session_start();
if (!isset($_SESSION["IS_LOGIN"])) {
    header("location:login.php");
    die();
}*/
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>Header</title>
    <link href="css/styles.css" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js" crossorigin="anonymous"></script>
</head>

<body>
    <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <a class="navbar-brand" href="/Project1.github.io/homeAdmin.php">
            Admin Panel
        </a>
        <button class="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#">
            <i class="fas fa-bars"></i>
        </button>
        <!-- SEARCH-->
        <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
            <div class="input-group">
                <input class="form-control" type="text" placeholder="Search..." aria-label="Search" aria-describedby="basic-addon2" />
                <div class="input-group-append">
                    <button class="btn btn-dark" type="button">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </div>
        </form>
        <!-- NAVBAR-->
        <ul class="navbar-nav ml-auto ml-md-0">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-user fa-fw"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                    <a class="dropdown-item" href="/Project1.github.io/php_views/logoutAdmin.php">
                        Logout
                    </a>
                </div>
            </li>
        </ul>
    </nav>
    <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
            <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div class="sb-sidenav-menu">
                    <div class="nav">
                        <?php //if ($_SESSION["ROLE"] == 1) { 
                        ?>
                        <a class="nav-link" href="/Project1.github.io/homeAdmin.php">
                            <div class="sb-nav-link-icon">
                                <i class="fas fa-home"></i>
                            </div>
                            Home
                        </a>
                        <a class="nav-link" href="/Project1.github.io/php_views/rankingsAdmin.php">
                            <div class="sb-nav-link-icon">
                                <i class="fas fa-trophy"></i>
                            </div>
                            Rankings
                        </a>
                        <?php //} 
                        ?>
                        <a class="nav-link" href="/Project1.github.io/php_views/userInfoAdmin.php">
                            <div class="sb-nav-link-icon">
                                <i class="fas fa-user"></i>
                            </div>
                            Users Information
                        </a>
                    </div>
                </div>
                <div class="sb-sidenav-footer">
                    <div class="small">You are:</div>
                    Admin
                </div>
            </nav>
        </div>
</body>

</html>