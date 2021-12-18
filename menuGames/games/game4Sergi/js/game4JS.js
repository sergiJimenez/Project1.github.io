document.addEventListener("DOMContentLoaded", () => {
  //Variables
  const grid = document.querySelector(".grid");
  const gurmann = document.createElement("div");
  const modal = document.getElementById("myModal");
  let isGameOver = false; //GameOver variable
  let platformCount = 4; //How many platforms we have when we start a new game
  let platforms = []; //Platform Array
  let coinsCount = Math.random() * 3; //Defines a random number of coins, between 0 and 4, that'll appear
  let coins = []; //Coins Array
  let redGemCount = Math.random() * 3;
  let redGems = [];
  let letterFs = [];
  let letterFCount = 1;
  let score = 0; //Initial score
  let gurmannLeftSpace = 50;
  let startPoint = 150;
  let gurmannBottomSpace = startPoint;
  let upTimerId;
  let downTimerId;
  let isJumping = true;
  let isGoingLeft = false;
  let isGoingRight = false;
  let leftTimerId;
  let rightTimerId;
  //let seconds = 60;
  //let minute = 1;
  //Variables
  //AIR
  //AIR
  //AIR
  //AIR
  //AIR
  //Platforms
  class Platform {
    constructor(newPlatBottom) {
      this.left = Math.random() * 732; //To know which number is it we have to make this operation (gridWidth - platformWidth). Why? Because we want to create the number of platforms inside of our grid
      this.bottom = newPlatBottom;
      this.visual = document.createElement("div");

      const visual = this.visual;
      visual.classList.add("platform");
      visual.style.left = this.left + "px";
      visual.style.bottom = this.bottom + "px";
      grid.appendChild(visual);
    }
  }

  function createPlatforms() {
    for (let i = 0; i < platformCount; i++) {
      let platGap = 1000 / platformCount; //Distance between each platform. We choose these number 'cause we want to overcome the grid with to make sure that the distance is enough
      let newPlatBottom = 250 + i * platGap; //It'll increase where the new platform bottom distance will be create
      let newPlatform = new Platform(newPlatBottom);
      platforms.push(newPlatform);
    }
  }

  function movePlatforms() {
    if (gurmannBottomSpace > 200) {
      platforms.forEach(platform => {
        platform.bottom -= 5; //Speed of the platforms are falling
        let visual = platform.visual;
        visual.style.bottom = platform.bottom + "px";

        if (platform.bottom < -30) { //To dissapear when it collide to -30
          let firstPlatform = platforms[0].visual;
          firstPlatform.classList.remove("platform");
          platforms.shift();
          let newPlatform = new Platform(1080); //Where the new platform will be appear. We know that because our height is 1080px
          platforms.push(newPlatform);
        }
      });
    }
  }
  //Platforms
  //AIR
  //AIR
  //AIR
  //AIR
  //AIR
  //Coin
  class Coin {
    constructor(newCoinBottom){
      this.left = Math.random() * 732; //To know which number is it we have to make this operation (gridWidth - platformWidth). Why? Because we want to create the number of platforms inside of our grid
      this.bottom = newCoinBottom;
      this.visual = document.createElement("div");

      const visual = this.visual;
      visual.classList.add("coin");
      visual.style.left = this.left + "px";
      visual.style.bottom = this.bottom + "px";
      grid.appendChild(visual);
    }
  }

  function createCoin(){
    for (let i = 0; i < coinsCount; i++) {
      let coinGap = 1000 / coinsCount; //Distance between each platform. We choose these number 'cause we want to overcome the grid with to make sure that the distance is enough
      let newCoinBottom = 250 + i * coinGap; //It'll increase where the new platform bottom distance will be create
      let newItem = new Coin(newCoinBottom);
      coins.push(newItem);
    }
  }

  function moveCoin(){
    if (gurmannBottomSpace > 200){
      coins.forEach(coin => {
        coin.bottom -= 8; //Speed of the coins are falling
        let visual = coin.visual;
        visual.style.bottom = coin.bottom + "px";

        if(coin.bottom < -30){ //To dissapear when it collide to -30
          let firstCoin = coins[0].visual;
          firstCoin.classList.remove("coin");
          coins.shift();
          let newCoin = new Coin(1080);
          coins.push(newCoin);
        }
      });
    }
  }

  function coinTakeIt(){
      coins.forEach(coin => {
        if (
          //Conditional_Left_Down_Gurmann
          (gurmannLeftSpace >= coin.left) &&
          (gurmannLeftSpace <= (coin.left + 64)) &&
          (gurmannBottomSpace >= coin.bottom) &&
          (gurmannBottomSpace <= (coin.bottom + 64)) ||
          //Conditional_Right_Down_Gurmann
          (gurmannLeftSpace >= coin.left) &&
          ((gurmannLeftSpace + 133) <= (coin.left + 64)) &&
          (gurmannBottomSpace >= coin.bottom) &&
          (gurmannBottomSpace + 133 <= (coin.bottom + 64)) ||
          //Conditional_Left_Up_Gurmann
          ((gurmannLeftSpace + 150) >= coin.left) &&
          (gurmannLeftSpace <= (coin.left + 64)) &&
          ((gurmannBottomSpace + 150) >= coin.bottom) &&
          (gurmannBottomSpace <= (coin.bottom + 64)) ||
          //Conditional_Right_Up_Gurmann
          ((gurmannLeftSpace + 150) >= coin.left) &&
          ((gurmannLeftSpace + 133) <= (coin.left + 64)) &&
          ((gurmannBottomSpace + 150) >= coin.bottom) &&
          ((gurmannBottomSpace + 133) <= (coin.bottom + 64))
        ){
          score+=20;
          console.log(score);
          let coinToRemove = coins[0].visual;
          coinToRemove.classList.remove("coin");
          coins.shift();
          let newCoin = new Coin(1080);
          coins.push(newCoin);
          if (score >= 1000){ //SCORE LIMIT
            EndGame();
          }
        }
      });
  }
  //Coin
  //AIR
  //AIR
  //AIR
  //AIR
  //AIR
  //Red Gem
  class RedGem {
    constructor(newRedGemBottom){
      this.left = Math.random() * 732; //To know which number is it we have to make this operation (gridWidth - platformWidth). Why? Because we want to create the number of platforms inside of our grid
      this.bottom = newRedGemBottom;
      this.visual = document.createElement("div");

      const visual = this.visual;
      visual.classList.add("redGem");
      visual.style.left = this.left + "px";
      visual.style.bottom = this.bottom + "px";
      grid.appendChild(visual);
    }
  }

  function createRedGem(){
    for (let i = 0; i < redGemCount; i++) {
      let redGemGap = 1000 / redGemCount; //Distance between each platform. We choose these number 'cause we want to overcome the grid with to make sure that the distance is enough
      let newRedGemBottom = 250 + i * redGemGap; //It'll increase where the new platform bottom distance will be create
      let newRedGem = new RedGem(newRedGemBottom);
      redGems.push(newRedGem);
    }
  }

  function moveRedGem(){
    if (gurmannBottomSpace > 200){
      redGems.forEach(redGem => {
        redGem.bottom -= 8; //Speed of the coins are falling
        let visual = redGem.visual;
        visual.style.bottom = redGem.bottom + "px";

        if(redGem.bottom < 0){
          let firstRedGem = redGems[0].visual;
          firstRedGem.classList.remove("redGem");
          redGems.shift();
          let newRedGem = new RedGem(1080);
          redGems.push(newRedGem);
        }
      });
    }
  }

  function redGemTakeIt(){
      redGems.forEach(redGem => {
        if (
          //Conditional_Left_Down_Gurmann
          (gurmannLeftSpace >= redGem.left) &&
          (gurmannLeftSpace <= (redGem.left + 64)) &&
          (gurmannBottomSpace >= redGem.bottom) &&
          (gurmannBottomSpace <= (redGem.bottom + 64)) ||
          //Conditional_Right_Down_Gurmann
          (gurmannLeftSpace >= redGem.left) &&
          ((gurmannLeftSpace + 133) <= (redGem.left + 64)) &&
          (gurmannBottomSpace >= redGem.bottom) &&
          (gurmannBottomSpace + 133 <= (redGem.bottom + 64)) ||
          //Conditional_Left_Up_Gurmann
          ((gurmannLeftSpace + 150) >= redGem.left) &&
          (gurmannLeftSpace <= (redGem.left + 64)) &&
          ((gurmannBottomSpace + 150) >= redGem.bottom) &&
          (gurmannBottomSpace <= (redGem.bottom + 64)) ||
          //Conditional_Right_Up_Gurmann
          ((gurmannLeftSpace + 150) >= redGem.left) &&
          ((gurmannLeftSpace + 133) <= (redGem.left + 64)) &&
          ((gurmannBottomSpace + 150) >= redGem.bottom) &&
          ((gurmannBottomSpace + 133) <= (redGem.bottom + 64))
        ){
          score+=50;
          console.log(score);
          let redGemToRemove = redGems[0].visual;
          redGemToRemove.classList.remove("redGem");
          redGems.shift();
          let newRedGem = new RedGem(1080);
          redGems.push(newRedGem);
          if (score >= 1000){ //SCORE LIMIT
            EndGame();
          }
        }
      });
  }
  //Red Gem
  //AIR
  //AIR
  //AIR
  //AIR
  //AIR
  //F
  class LetterF {
    constructor(newLetterFBottom) {
      this.left = Math.random() * 732; //To know which number is it we have to make this operation (gridWidth - platformWidth). Why? Because we want to create the number of platforms inside of our grid
      this.bottom = newLetterFBottom;
      this.visual = document.createElement("div");

      const visual = this.visual;
      visual.classList.add("letterF");
      visual.style.left = this.left + "px";
      visual.style.bottom = this.bottom + "px";
      grid.appendChild(visual);
    }
  }

  function createLetterF() {
    for (let i = 0; i < letterFCount; i++) {
      let letterFGap = 1000 / letterFCount; //Distance between each platform. We choose these number 'cause we want to overcome the grid with to make sure that the distance is enough
      let newLetterFBottom = 250 + i * letterFGap; //It'll increase where the new platform bottom distance will be create
      let newLetterF = new LetterF(newLetterFBottom);
      letterFs.push(newLetterF);
    }
  }

  function moveLetterF() {
    if (gurmannBottomSpace > 200) {
      letterFs.forEach(letterF => {
          letterF.bottom -= 5; //Speed of the platforms are falling
          let visual = letterF.visual;
          visual.style.bottom = letterF.bottom + "px";

          if (letterF.bottom < -30) { //To dissapear when it collide to -30
            let firstLetterF = letterFs[0].visual;
            firstLetterF.classList.remove("efe");
            letterFs.shift();
            let newLetterF = new LetterF(1080); //Where the new platform will be appear. We know that because our height is 1080px
            letterFs.push(newLetterF);
        }
      });
    }
  }

  function letterFTakeIt(){
    letterFs.forEach(letterF => {
      if (
        //Conditional_Left_Down_Gurmann
        (gurmannLeftSpace >= letterF.left) &&
        (gurmannLeftSpace <= (letterF.left + 64)) &&
        (gurmannBottomSpace >= letterF.bottom) &&
        (gurmannBottomSpace <= (letterF.bottom + 64)) ||
        //Conditional_Right_Down_Gurmann
        (gurmannLeftSpace >= letterF.left) &&
        ((gurmannLeftSpace + 133) <= (letterF.left + 64)) &&
        (gurmannBottomSpace >= letterF.bottom) &&
        (gurmannBottomSpace + 133 <= (letterF.bottom + 64)) ||
        //Conditional_Left_Up_Gurmann
        ((gurmannLeftSpace + 150) >= letterF.left) &&
        (gurmannLeftSpace <= (letterF.left + 64)) &&
        ((gurmannBottomSpace + 150) >= letterF.bottom) &&
        (gurmannBottomSpace <= (letterF.bottom + 64)) ||
        //Conditional_Right_Up_Gurmann
        ((gurmannLeftSpace + 150) >= letterF.left) &&
        ((gurmannLeftSpace + 133) <= (letterF.left + 64)) &&
        ((gurmannBottomSpace + 150) >= letterF.bottom) &&
        ((gurmannBottomSpace + 133) <= (letterF.bottom + 64))
      ){
        score+=20;
        console.log(score);
        let letterFToRemove = letterFs[0].visual;
        letterFToRemove.classList.remove("letterF");
        letterFs.shift();
        let newLetterF = new LetterF(1080);
        letterFs.push(newLetterF);
        if (score >= 1000){ //SCORE LIMIT
          EndGame();
        }
      }
    });
}
  //AIR
  //AIR
  //AIR
  //AIR
  //AIR
  //Gurmann, the character and his functions
  function createGurmann() {
    grid.appendChild(gurmann);
    gurmann.classList.add("gurmann");
    gurmannLeftSpace = platforms[0].left;
    gurmann.style.left = gurmannLeftSpace + "px";
    gurmann.style.bottom = gurmannBottomSpace + "px";
  }

  function fall() {
    isJumping = false;
    clearInterval(upTimerId);
    downTimerId = setInterval(function () {
      gurmannBottomSpace -= 5; //The speed of our character when it's falling
      gurmann.style.bottom = gurmannBottomSpace + "px";
      gurmann.style.backgroundImage = "url('./media/flipyFlipilyFlop/Character/Gif/Fall.gif')";
      gurmann.style.width = "133px";
      gurmann.style.height = "150px";
      if (gurmannBottomSpace <= -125) { //When Gurmann arrives to -125pxBottom there'll die
        GameOver();
      }
      platforms.forEach(platform => {
        if (
          (gurmannBottomSpace >= platform.bottom) &&
          (gurmannBottomSpace <= (platform.bottom + 72)) && //The pixel of the height collission
          ((gurmannLeftSpace + 60) >= platform.left) && //The pixel of the left space collission
          (gurmannLeftSpace <= (platform.left + 196)) && //The pixel of the width collission
          !isJumping
        ) {
          startPoint = gurmannBottomSpace;
          gurmann.style.backgroundImage = "url('./media/flipyFlipilyFlop/Character/Gif/Jump.gif')";
          gurmann.style.width = "103px";
          gurmann.style.height = "151px";
          jump();
          isJumping = true;
        }
      });
    }, 10); //Miliseconds
  }

  function jump() {
    clearInterval(downTimerId);
    isJumping = true;
    score+=10; //When Gurmann jumps it will increase the score by one
    console.log(score);
    if (score >= 1000){ //SCORE LIMIT
      EndGame();
    }
    upTimerId = setInterval(function () {
      gurmannBottomSpace += 20; //The speed of our character when it's falling
      gurmann.style.bottom = gurmannBottomSpace + "px";
      if (gurmannBottomSpace > (startPoint + 400)) {
        fall();
        isJumping = false;
      }
    }, 20); //Miliseconds
  }

  function moveLeft() {
    if (isGoingRight) {
      clearInterval(rightTimerId);
      isGoingRight = false;
    }
    isGoingLeft = true;
    leftTimerId = setInterval(function () {
      if (gurmannLeftSpace >= 0) { //To avoid throught the screen to the other side
        gurmannLeftSpace -= 10; //The speed of the left movement
        gurmann.style.left = gurmannLeftSpace + "px";
        isGoingLeft = false;
      } else if (gurmannLeftSpace <= 0) { //When Gurmann collide to the pixel 0 in the grid he'll stop
        moveStraight();
      } else moveRight();
    }, 20); //Miliseconds
  }

  function moveRight() {
    if (isGoingLeft) {
      clearInterval(leftTimerId);
      isGoingLeft = false;
    }
    isGoingRight = true;
    rightTimerId = setInterval(function () {
      //POSIBLE HAD TO CHANGE THE gurmannLeftSpace TO FIT .PNG
      if (gurmannLeftSpace <= 780) {
        gurmannLeftSpace += 10; //The speed of the left movement
        gurmann.style.left = gurmannLeftSpace + "px";
      } else if (gurmannLeftSpace <= 928) { //When Gurmann collide to the pixel 928 in the grid he'll stop
        moveStraight();
      } else moveLeft();
    }, 20); //Miliseconds
  }

  function moveStraight(){
    isGoingLeft = false;
    isGoingRight = false;
    clearInterval(leftTimerId);
    clearInterval(rightTimerId);
  }

  function control(e) {
    if (e.repeat){
      return;
    }
    gurmann.style.bottom = gurmannBottomSpace + "px";
    if (e.key === "ArrowLeft") {
      moveLeft();
    } else if (e.key === "ArrowRight") {
      moveRight();
    } else if (e.key === "ArrowUp") {
      moveStraight();
    }
  }

  function stopControl(e) {
    gurmann.style.bottom = gurmannBottomSpace + "px";
    if (e.key === "ArrowLeft") {
      isGoingLeft = false;
      clearInterval(leftTimerId);
    } else if (e.key === "ArrowRight") {
      clearInterval(rightTimerId);
      isGoingRight = false;
    }
  }
  //Gurmann, the character and his functions
  //AIR
  //AIR
  //AIR
  //AIR
  //AIR
  //Game Functions
  /*function timedCount() {
    time = setTimeout(timedCount, 1000);
    if (seconds > 0 && score  != 6){
      seconds -= 1;
    } else if ((seconds == 0 && minute > 0)){
      minute -= 1;
      seconds = 59;
    }

    let formattedMinute = ("0" + minute).slice(-2);
    let formattedSeconds = ("0" + seconds).slice(-2);

    document.getElementById("timer").innerHTML = "TEMPS: " + formattedMinute + ": " + formattedSeconds;
    if ((minute == 0 && seconds == 0) || score == 6){
      GameOver();
    }
  }*/

  function GameOver() {
    isGameOver = true;
    while (grid.firstChild) {
      grid.removeChild(grid.firstChild);
    }
    clearInterval(upTimerId);
    clearInterval(downTimerId);
    clearInterval(leftTimerId);
    clearInterval(rightTimerId);
  }

  function EndGame() {
    isGameOver = true;
    while (grid.firstChild) {
      grid.removeChild(grid.firstChild);
    }
    score.innerHTML = score; //CAMBIAR POR UNA PAGINA DONDE SE MUESTRE EL RESULTADO
    modal.style.display = "block";
    clearInterval(upTimerId);
    clearInterval(downTimerId);
    clearInterval(leftTimerId);
    clearInterval(rightTimerId);
  }

  function start() {
    if (!isGameOver) {
      //timedCount();
      createPlatforms();
      createCoin();
      createRedGem();
      createLetterF();
      setInterval(movePlatforms, 30);
      setInterval(moveCoin, 25);
      setInterval(moveRedGem, 25);
      setInterval(coinTakeIt, 10);
      setInterval(redGemTakeIt, 10);
      setInterval(moveLetterF, 10);
      setInterval(letterFTakeIt, 10);
      createGurmann();
      jump(startPoint);
      document.addEventListener("keydown", control);
      document.addEventListener("keyup", stopControl);
    }
  }
  start();
});