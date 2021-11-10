<?php
include("header.php");
if (isset($_SESSION["ROLE"]) && $_SESSION["ROLE"] != "1") {
    header("location:news.php");
    die();
}
?>
<div class="container-fluid">
    <!-- DATATABLE EXAMPLE -->
    <div class="card mb-3">
        <div class="card-header">
            <i class="fa fa-fw fa-user"></i>
            Student Table
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="studentTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    </div>
</div>