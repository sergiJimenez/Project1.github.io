<?php
require_once('./../php_library/database.php');

$users = selectUsers();

?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- BOOTSTRAP LINKS -->
    <link rel="stylesheet" href="../bootstrap-5.1.3-dist/css/bootstrap.min.css">
    <script src="../bootstrap-5.1.3-dist/js/bootstrap.min.js"></script>
    <!-- BOOTSTRAP LINKS -->
    <link href="style/styles.css" rel="stylesheet" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js" crossorigin="anonymous"></script>
</head>

<body>
    <?php include "../php_partials/navbarAdmin.php"; ?>
    <?php include "../php_partials/mensajes.php"; ?>

    <div id="layoutSidenav_content">
        <main>
            <div class="container-fluid">
                <h1 class="mt-4">
                    Informacion de los usuarios
                </h1>
                <div class="row">
                    <div class="col-11">
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item"><a href="../homeAdmin.php">Inicio</a></li>
                            <li class="breadcrumb-item active">Informacion de los usuarios</li>
                        </ol>
                    </div>
                    <div class="col-1">
                        <button onClick="window.location.reload();"> <i class="fas fa-sync"></i> </button>
                    </div>
                </div>
                <div class="card mb-4">
                    <div class="card-header">
                        <i class="fas fa-table mr-1"></i>
                        Informacion
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>ID del usuario</th>
                                        <th>Mail del usuario</th>
                                        <th>Nombre del usuario</th>
                                        <th>Contraseña del usuario</th>
                                        <th>Administrador</th>
                                        <th>Borrar</th>
                                        <th>Editar</th>
                                    </tr>
                                </thead>
                                <?php foreach ($users as $user) { ?>
                                    <tbody>
                                        <tr>
                                            <td> <?php echo $user['id'] ?> </td>
                                            <td> <?php echo $user['Mail_Usuario'] ?> </td>
                                            <td> <?php echo $user['Nombre_Usuario'] ?> </td>
                                            <td> <?php echo $user['Contrasenya_Usuario'] ?> </td>
                                            <td> <?php echo $user['Rol_Administrador'] ?> </td>
                                            <td>
                                                <?php echo '
                                                    <form action="/Project1.github.io/php_controllers/userController.php" method="post">
                                                            <input type="hidden" name="valorUsuario" value=' . $user['id'] . '>
                                                        <button type="submit" class="btn btn-outline-danger" name="borrar">
                                                            <i class="fas fa-trash"></i>
                                                        </button>
                                                    </form>
                                                ' ?></td>

                                            <td>
                                                <?php echo '
                                                    <form action="/Project1.github.io/php_controllers/userController.php" method="post">
                                                            <input type="hidden" name="valorUsuario" value=' . $user['id'] . '>
                                                        <button type="submit" class="btn btn-outline-primary" name="editar">
                                                            <i class="fas fa-edit"></i>
                                                        </button>
                                                    </form>
                                                '
                                                ?>

                                            </td>
                                        </tr>
                                    </tbody>

                                <?php } ?>
                            </table>
                        </div>
                    </div>
                </div>
                <br>
                <br>
                <br>
            </div>
        </main>
    </div>
</body>

</html>