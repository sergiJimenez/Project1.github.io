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
    <?php include "header.php"; ?>
    <div id="layoutSidenav_content">
        <main>
            <div class="container-fluid">
                <h1 class="mt-4">
                    User's Information
                </h1>
                <ol class="breadcrumb mb-4">
                    <li class="breadcrumb-item"><a href="../homeAdmin.php">Home</a></li>
                    <li class="breadcrumb-item active">Personal Information</li>
                </ol>
                <div class="card mb-4">
                    <div class="card-body">
                        We can find all the users information:
                    </div>
                </div>
                <div class="card mb-4">
                    <div class="card-header">
                        <i class="fas fa-table mr-1"></i>
                        Personal Details
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Password</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Sergi</td>
                                        <td>sperezj2021@cepnet.net</td>
                                        <td>xoxoMoreno666</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>Aitor</td>
                                        <td>acarro2021@cepnet.net</td>
                                        <td>xoxoMoreno667</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>Raül</td>
                                        <td>rlendines2021@cepnet.net</td>
                                        <td>xoxoMoreno668</td>
                                    </tr>
                                </tbody>
                                <tbody>
                                    <tr>
                                        <td>Borja</td>
                                        <td>borjita2021@cepnet.net</td>
                                        <td>loQueTuQuierasPapi</td>
                                    </tr>
                                </tbody>
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
    <?php require "footer.php"; ?>
</body>

</html>