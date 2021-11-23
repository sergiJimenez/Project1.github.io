document.addEventListener("DOMContentLoaded", () => {
  //Variables
  const grid = document.querySelector(".grid");
  const gurmann = document.createElement("div");
  let isGameOver = false; //GameOver variable
  let finalMessage = "FINISH"; //Test message to try the ENDGAME option
  let platformCount = 4; //How many platforms we have when we start a new game
  let platforms = []; //Platform Array
  let coinsCount = Math.random() * 4; //Defines a random number of coins, between 0 and 4, that'll appear
  let coins = []; //Coins Array
  let score = 0; //Initial score
  //const scoreCoin = 10;
  //let increase = 0;
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
  //Variables
  //AIR
  //AIR
  //AIR
  //AIR
  //AIR
  //Platforms
  class Platform { //Good One
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

  function createPlatforms() { //Good One
    for (let i = 0; i < platformCount; i++) {
      let platGap = 1000 / platformCount; //Distance between each platform. We choose these number 'cause we want to overcome the grid with to make sure that the distance is enough
      let newPlatBottom = 250 + i * platGap; //It'll increase where the new platform bottom distance will be create
      let newPlatform = new Platform(newPlatBottom);
      platforms.push(newPlatform);
    }
  }

  function movePlatforms() { //Good One Movement
    if (gurmannBottomSpace > 200) {
      platforms.forEach(platform => {
        platform.bottom -= 5; //Speed of the platforms are falling
        let visual = platform.visual;
        visual.style.bottom = platform.bottom + "px";

        if (platform.bottom < 10) {
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
  //Items
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

        if(coin.bottom < 10){
          let firstCoin = coins[0].visual;
          firstCoin.classList.remove("coin");
          coins.shift();
          let newCoin = new Coin (1080);
          coins.push(newCoin);
        }
      });
    }
  }

  function coinTakeIt(){
    console.log("HA ENTRADO");
      coins.forEach(Coin => {
        if (
          (gurmannBottomSpace >= Coin.bottom) &&
          (gurmannBottomSpace <= (Coin.bottom + 64)) && //The pixel of the height collission
          ((gurmannLeftSpace) >= Coin.left) && //The pixel of the left space collission
          (gurmannLeftSpace <= (Coin.left + 64)) //The pixel of the width collission
        ) {
          console.log("Collission");
          //scoreCoin++;
          let coinToRemove = coins[0].visual;
          coinToRemove.classList.remove("coin");
          coins.shift();
        }
      });
    }
  //AIR
  //AIR
  //AIR
  //AIR
  //AIR
  //Items
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
      gurmann.style.backgroundImage = "url('../media/flipyFlipilyFlop/Character/Gif/Fall.gif')";
      gurmann.style.width = "133px";
      gurmann.style.height = "150px";
      if (gurmannBottomSpace <= 0) { //When Gurmann arrives to 0pxBottom there'll die
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
          gurmann.style.backgroundImage = "url('../media/flipyFlipilyFlop/Character/Gif/Jump.gif')";
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
    score++; //When Gurmann jumps it will increase the score by one
    console.log("MAKING A JUMP POINT WHEN GURMANN'S JUMP");
    if (score == 50){
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
  function GameOver() {
    isGameOver = true;
    while (grid.firstChild) {
      grid.removeChild(grid.firstChild);
    }
    grid.innerHTML = score; //Score when you are jumping on a platform + Score coin
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
    grid.innerHTML = finalMessage + "<br>" + score; //CAMBIAR POR UNA PAGINA DONDE SE MUESTRE EL RESULTADO
    clearInterval(upTimerId);
    clearInterval(downTimerId);
    clearInterval(leftTimerId);
    clearInterval(rightTimerId);
    console.log("UNTIL HERE");
  }

  function start() {
    if (!isGameOver) {
      createPlatforms();
      createCoin();
      createGurmann();
      setInterval(coinTakeIt);
      setInterval(movePlatforms, 30);
      setInterval(moveCoin, 30);
      jump(startPoint);
      document.addEventListener("keydown", control);
      document.addEventListener("keyup", stopControl);
    }
  }
  start();
});