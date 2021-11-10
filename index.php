<?php
include("php_views/header.php");
if (isset($_SESSION["ROLE"]) && $_SESSION["ROLE"] != "1") {
  header("location:news.php");
  die();
}
?>
<div class="container-fluid">
  <ol class="breadcrumb">
    <li class="breadcrumb-item">
      <a href="">Dashboard</a>
    </li>
  </ol>
  <!-- Page Content -->
  <h1>Blank Page</h1>
  <hr>
  <p>This is a great starting point</p>
</div>
<!-- <//?php include("php_views/footer.php") ?> -->