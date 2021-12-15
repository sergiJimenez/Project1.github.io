<?php
require_once('./../../../../php_library/database.php');

$users = selectUsers();

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- BOOTSTRAP -->
    <link rel="stylesheet" href="/Project1.github.io/bootstrap-5.1.3-dist/css/bootstrap.min.css">
</head>

<body>
    <div class="container">
        <table class="table table-striped">
            <tr>
                <th>Id user</th>
                <th>Mail user</th>
                <th>Nombre user</th>
                <th>Contraseña user</th>
            </tr>

            <?php foreach ($users as $user) { ?>
                <tbody>
                    <tr>
                        <td> <?php echo $user['id'] ?> </td>
                        <td> <?php echo $user['Mail_Usuario'] ?> </td>
                        <td> <?php echo $user['Nombre_Usuario'] ?> </td>
                        <td> <?php echo $user['Contrasenya_Usuario'] ?> </td>
                    </tr>
                </tbody>

            <?php } ?>

        </table>
    </div>
    <script src="/Project1.github.io/bootstrap-5.1.3-dist/js/bootstrap.min.js"></script>
</body>

</html>