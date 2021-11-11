<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!--Header css-->
    <link rel="stylesheet" href="/style/myStyle.css">

    <!-- Bootstrap css -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Landing page</title>
</head>
<body>


<?php
  include __DIR__. '/partials/navbar.php';
?>

    <!--CAROUSEL-->
  <div class="alinearWeb">
    <div class="padding-carousel">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="./media/cep_portal.png" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="./media/Entrada_cep.png" class="d-block w-100" alt="...">
              </div>
              <div class="carousel-item">
                <img src="./media/cep_carousel.png" class="d-block w-100" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
    </div>

    <br>
    <br>
    <!--EQUIPO CREATIVO-->
    <div class="bg-primary">
      <div class="izquierda"></div>
      <div class="centro">
        <h3>Coneix l'equip</h3>
          <br>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis optio, provident porro, exercitationem, architecto beatae nisi obcaecati voluptatem ipsa deleniti nihil! Magni, vel corrupti beatae nobis debitis nihil voluptatum dolor.        </p>
      </div>
      <div class="derecha"></div>
    </div>
  </div>

  <!--FOOTER-->
  <?php
    include __DIR__. '/partials/footer.php';
  ?>

  <!-- JavaScript Bundle with Popper -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
</body>
</html>
