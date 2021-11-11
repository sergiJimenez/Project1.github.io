<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!--Header css-->
  <link rel="stylesheet" href="style/myStyle.css">

  <!-- Bootstrap css -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

  <title>Landing page</title>
</head>

<body>


  <?php
  include __DIR__ . '/partials/navbar.php';
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

    <div class="row">
      <div class="col-2"> </div>

      <div class="col-8">
        <div class="row">
          <div class="col-2"></div>
          <div class="col-2"></div>
          <div class="col-2"></div>
          <div class="col-2"></div>
        </div>
      </div>

      <div class="col-2"></div>
    </div>

    <!--EQUIPO CREATIVO-->
    <div class="row equipo">
      <div class="col-2"> </div>

      <div class="col-8 padding-equipo">
        <div class="row">
          <div class="text-black">
            <div class="izquierda"></div>
            <div>
              <h3><b>It's my Turn.</b> La fira dels talents profesionals</h3>
              <br>
              <p>
                <b>Presentació</b>  <br>
                La formació professional capacita per a l'exercici qualificat de diverses professions i proporciona la formació necessària per adquirir les competències professionals i el coneixement propis de cada sector. <br><br>
                Al Politècnics tractem de proporcionar un entorn que permeti el creixement personal i professional, proporcionant un espai segur on descobrir i practicar les competències que ens han de permetre gaudir d’una llarga i exitosa trajectòria dins de la família professional que s'ha escollit desenvolupar. <br><br>
                Aquest viatge personal com a integrant d'equips d’aprenentatge desemboca en la fira IT’S MY TURN, que posa en contacte a empreses, entitats i professionals, i on tots i cadascun del nostre alumnat disposen de l’oportunitat de presentar-se, mostrar i demostrar les competències professionals i coneixements adquirits durant la seva estada al Politècnics. <br><br>
                Seguim.
              </p>
            </div>
            <div class="derecha"></div>
          </div>
        </div>
      </div>

      <div class="col-2"></div>
    </div>

  </div>

  <!--FOOTER-->
  <?php
  include __DIR__ . '/partials/footer.php';
  ?>

  <!-- JavaScript Bundle with Popper -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  <!--JS fontawesome-->
  <script src="https://kit.fontawesome.com/1ac3ed1571.js" crossorigin="anonymous"></script>
</body>

</html>