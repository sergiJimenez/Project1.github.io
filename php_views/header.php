<?php
session_start();
if (!isset($_SESSION["IS_LOGIN"])) {
    header("location:login.php");
    die();
}
?>
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Header</title>

</head>

<body id="page-top">
    <nav class="navbar navbar-expand navbar-dark bg-dark static-top">
        <a class="navbar-brand mr-1" href="index.php">Start Bootsrap></a>
        <div class="d-none d-md-inline-block ml-auto"></div>
        <!-- NAVBAR -->
        <ul class="navbar-nav ml-auto ml-md-0">
            <li class="nav-item dropwdown no-arrow">
                <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-user-circle fa-fw"></i>
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                    <a class="dropdown-item" href="logout.php">Logout</a>
                </div>
            </li>
        </ul>
        <!-- NAVBAR -->
    </nav>
    <div id="wrapper">
        <!-- SIDEBAR -->
        <ul class="sidebar navbar-nav">
            <?php if ($_SESSION["ROLE"] == 1) { ?>
                <li class="nav-item">
                    <a class="nav-link" href="index.php">
                        <i class="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="student.php">
                        <i class="fas fa-fw fa-user"></i>
                        <span>Student</span>
                    </a>
                </li>
            <?php } ?>
            <li class="nav-item">
                <a class="nav-link" href="news.php">
                    <i class="fa fa-fw fa-newspaper"></i>
                    <span>News</span>
                </a>
            </li>
        </ul>
        <!-- SIDEBAR -->
    </div>
</body>

</html>