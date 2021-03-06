<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Centre d'Estudis Politecncis</title>
  <!-- CSS -->
  <link rel="stylesheet" href="style/indexStyle.css">
  <!-- BOOTSTRAP -->
  <link rel="stylesheet" href="bootstrap-5.1.3-dist/css/bootstrap.min.css">
  <script src="bootstrap-5.1.3-dist/js/bootstrap.min.js"></script>
  <!--JS fontawesome-->
  <script src="https://kit.fontawesome.com/1ac3ed1571.js" crossorigin="anonymous"></script>
  <!-- FunctionalJS -->
  <script src="/Project1.github.io/functionalJS/fullscreen.js" crossorigin="anonymous"></script>
</head>

<body>
  <?php include("php_partials/navbar.php"); ?>
  <div class="display-flex">
    <!--CAROUSEL-->
    <div class="alinearWeb">
      <div class="padding-carousel">
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="./media/LandingPage/Carrousel/arcade.jpg" class="d-block w-100" alt="Carousel portal cep">
              <div class="carousel-caption justify-content-start">
                <p class="textGame">Tenim una serie de jocs que potser t'agraden, vols provar?</p> <br>
                <a type="button" id="fullscreenButtonON" class="btn btn-lg btn-dark" href="./form/loginUsers.php">Juga ara!</a>
              </div>
            </div>
            <div class="carousel-item">
              <img src="./media/LandingPage/Carrousel/Entrada_cep.png" class="d-block w-100" alt="Carousel entrada cep">
            </div>
            <div class="carousel-item">
              <img src="./media/LandingPage/Carrousel/cep_carousel.png" class="d-block w-100" alt="Carousel cep">
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
      <br><br>
      <!--Ciclos-->
      <div class="row mx-auto justify-content-center" style="width: auto; margin: auto auto">
        <!--Marketing i comer??-->
        <div class="card text-black mb-3 border-0" style="max-width: 18rem;">
          <div class="card-header border-0" style="background-color: white;">
            <img src="media/LandingPage/Degree/persona1-removebg-preview.png" alt="Comer?? i m??rqueting" width="100%">
          </div>
          <div class="card-body">
            <h3 class="card-title"><b>Comer?? i m??rqueting</b></h3>
            <br>
            <p class="card-text"><b>ACTIVITATS COMERCIALS</b></p>
            <p class="card-text"> <a href="https://sites.google.com/cepnet.net/imt-politecnics/imt21/qui-som-21/qui-som-acom2a-21?authuser=0">ACOM2 [Perfils]</a> </p>
            <p class="card-text"><b>M??RQUETING I PUBLICITAT</b></p>
            <p class="card-text"> <a href="https://sites.google.com/cepnet.net/imt-politecnics/imt21/qui-som-21/qui-som-marp2a-21?authuser=0">MARP 2A [Perfils]</a> </p>
            <p class="card-text"> <a href="https://sites.google.com/cepnet.net/imt-politecnics/imt21/qui-som-21/qui-som-marp2b-21?authuser=0">MARP 2B [Perfils]</a> </p>
            <p class="card-text"> <a href="https://sites.google.com/cepnet.net/imt-politecnics/imt21/qui-som-21/qui-som-marp2s-21?authuser=0">MARP 2S [Perfils]</a> </p>
            <p class="card-text"> <a href="https://sites.google.com/cepnet.net/imt-politecnics/imt21/qui-som-21/qui-som-marp2t-21?authuser=0">MARP 2T [Perfils]</a> </p>
            <p class="card-text"><b>COMER?? INTERNACIONAL</b></p>
            <p class="card-text"> <a href="https://sites.google.com/cepnet.net/imt-politecnics/imt21/qui-som-21/qui-som-cint2t-21?authuser=0">CINT2 [Perfils]</a> </p>
          </div>
        </div>
        <!--Marketing i comer??-->
        <!--Administraci?? i gestio-->
        <div class="card text-black mb-3 border-0" style="max-width: 18rem;">
          <div class="card-header border-0" style="background-color: white;">
            <img src="media/LandingPage/Degree/persona2-removebg-preview.png" alt="Administraci?? i gestio" width="100%">
          </div>
          <div class="card-body">
            <h3 class="card-title"><b>Administraci?? i gestio</b></h3>
            <br>
            <p class="card-text"><b>GESTI?? ADMINISTRATIVA</b></p>
            <p class="card-text"> <a href="https://sites.google.com/cepnet.net/imt-politecnics/imt21/qui-som-21/qui-som-gad2a-21?authuser=0">GAD2A [Perfils]</a> </p>
            <p class="card-text"><b>ASSIST??NCIA A LA DIRECCI??</b></p>
            <p class="card-text"> <a href="https://sites.google.com/cepnet.net/imt-politecnics/imt21/qui-som-21/qui-som-adir2a-21?authuser=0">ADIR2A [Perfils]</a> </p>
            <p class="card-text"><b>ADMINISTRACI?? I FINANCES</b></p>
            <p class="card-text"> <a href="https://sites.google.com/cepnet.net/imt-politecnics/imt21/qui-som-21/qui-som-afi2a-21?authuser=0">AFI2A [Perfils]</a> </p>
          </div>
        </div>
        <!--Administraci?? i gestio-->
        <!--Hosteleria i Turisme-->
        <div class="card text-black mb-3 border-0" style="max-width: 18rem;">
          <div class="card-header border-0" style="background-color: white;">
            <img src="media/LandingPage/Degree/persona3-removebg-preview.png" alt="Hosteleria i Turisme" width="100%">
          </div>
          <div class="card-body">
            <h3 class="card-title"><b>Hosteleria i Turisme</b></h3>
            <br>
            <p class="card-text"><b>AG??NCIES DE VIATGE I GESTI?? D'ESDEVENIMENTS</b></p>
            <p class="card-text"> <a href="https://sites.google.com/cepnet.net/imt-politecnics/imt21/qui-som-21/qui-som-avie2a-21?authuser=0">AVIE2A [Perfils]</a> </p>
          </div>
        </div>
        <!--Hosteleria i Turisme-->
        <!--Inform??tica i Comunicacions-->
        <div class="card text-black mb-3 border-0" style="max-width: 18rem;">
          <div class="card-header border-0" style="background-color: white;">
            <img src="media/LandingPage/Degree/persona4-removebg-preview.png" alt="Inform??tica i Comunicacions" width="100%">
          </div>
          <div class="card-body">
            <h3 class="card-title"><b>Inform??tica i Comunicacions</b></h3>
            <br>
            <p class="card-text"><b>DESENVOLUPAMENT D'APLICACIONS MULTIPLATAFORMA</b></p>
            <p class="card-text"> <a href="https://sites.google.com/cepnet.net/imt-politecnics/imt21/qui-som-21/qui-som-dam2ab-21?authuser=0">DAM2AB [Perfils]</a> </p>
            <p class="card-text"><b>DESENVOLUPAMENT D'APLICACIONS WEB</b></p>
            <p class="card-text"> <a href="https://sites.google.com/cepnet.net/imt-politecnics/imt21/qui-som-21/qui-som-daw2a-21?authuser=0">DAW2A [Perfils]</a> </p>
            <p class="card-text"> <a href="https://sites.google.com/cepnet.net/imt-politecnics/imt21/qui-som-21/qui-som-daw2b-21?authuser=0">DAW2B [Perfils]</a> </p>
          </div>
        </div>
        <!--Inform??tica i Comunicacions-->
        <!--Espacio derecha-->
      </div><br><br>
      <!--EQUIPO CREATIVO-->
      <div class="container-fluid equipo">
        <div class="col-2"></div>
        <div class="col-8 padding-equipo">
          <div class="row">
            <div class="text-black">
              <div class="izquierda"></div>
              <div><br>
                <div class="conatiner-fluid p-4">
                  <div class="row">
                    <div class="offset-md-3">
                      <h3><b>It's my Turn.</b> La fira dels talents profesionals</h3>
                      <br>
                      <p>
                        <b>Presentaci??</b> <br>
                        La formaci?? professional capacita per a l'exercici qualificat de diverses professions i proporciona la formaci?? necess??ria per adquirir les compet??ncies professionals i el coneixement propis de cada sector. <br><br>
                        Al Polit??cnics tractem de proporcionar un entorn que permeti el creixement personal i professional, proporcionant un espai segur on descobrir i practicar les compet??ncies que ens han de permetre gaudir d???una llarga i exitosa traject??ria dins de la fam??lia professional que s'ha escollit desenvolupar. <br><br>
                        Aquest viatge personal com a integrant d'equips d???aprenentatge desemboca en la fira IT???S MY TURN, que posa en contacte a empreses, entitats i professionals, i on tots i cadascun del nostre alumnat disposen de l???oportunitat de presentar-se, mostrar i demostrar les compet??ncies professionals i coneixements adquirits durant la seva estada al Polit??cnics. <br><br>
                        Seguim.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="derecha"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!--FOOTER-->
  <?php include("php_partials/footer.php"); ?>
  <!--FOOTER-->
</body>

</html>