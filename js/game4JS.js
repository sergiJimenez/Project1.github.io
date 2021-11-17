document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const gurmann = document.createElement("div");
  let isGameOver = false;
  let platformCount = 5;
  let platforms = [];
  let score = 0;
  let gurmannLeftSpace = 50;
  let startPoint = 150;
  let gurmannBottomSpace = startPoint;
  //const gravity = 0.9; //TO SETUP
  let upTimerId;
  let downTimerId;
  let isJumping = true;
  let isGoingLeft = false;
  let isGoingRight = false;
  let leftTimerId;
  let rightTimerId;
  //AIR
  //AIR
  //AIR
  //AIR
  //AIR
  //Platforms
  class Platform {
    constructor(newPlatBottom) {
      this.left = Math.random() * 315;
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
      let platGap = 600 / platformCount;
      let newPlatBottom = 100 + i * platGap;
      let newPlatform = new Platform(newPlatBottom);
      platforms.push(newPlatform);
      console.log(platforms); //Only to check in the console if it's doing well
    }
  }

  function movePlatforms() {
    if (gurmannBottomSpace > 200) {
      platforms.forEach(platform => {
        platform.bottom -= 4;
        let visual = platform.visual;
        visual.style.bottom = platform.bottom + "px";

        if (platform.bottom < 10) {
          let firstPlatform = platforms[0].visual;
          firstPlatform.classList.remove("platform");
          platforms.shift();
          console.log(platforms); //Only to check in the console if it's doing well
          score++;
          let newPlatform = new Platform(600);
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
      gurmannBottomSpace -= 5;
      gurmann.style.bottom = gurmannBottomSpace + "px";
      if (gurmannBottomSpace <= 0) {
        GameOver();
      }
      platforms.forEach(platform => {
        if (
          (gurmannBottomSpace >= platform.bottom) &&
          (gurmannBottomSpace <= (platform.bottom + 15)) &&
          ((gurmannLeftSpace + 60) >= platform.left) &&
          (gurmannLeftSpace <= (platform.left + 85)) &&
          !isJumping
        ) {
          console.log("Landed"); //Only to check in the console if it's doing well
          startPoint = gurmannBottomSpace;
          jump();
          console.log("start", startPoint); //Only to check in the console if it's doing well
          isJumping = true;
        }
      });
    }, 20);
  }

  function jump() {
    clearInterval(downTimerId);
    isJumping = true;
    upTimerId = setInterval(function () {
      console.log(startPoint); //Only to check in the console if it's doing well
      console.log("1", gurmannBottomSpace); //Only to check in the console if it's doing well
      gurmannBottomSpace += 20;
      gurmann.style.bottom = gurmannBottomSpace + "px";
      console.log("2", gurmannBottomSpace); //Only to check in the console if it's doing well
      console.log("s", startPoint); //Only to check in the console if it's doing well
      if (gurmannBottomSpace > (startPoint + 200)) {
        fall();
        isJumping = false;
      }
    }, 30);
  }

  function moveLeft() {
    if (isGoingRight) {
      clearInterval(rightTimerId);
      isGoingRight = false;
    }
    isGoingLeft = true;
    leftTimerId = setInterval(function () {
      if (gurmannLeftSpace >= 0) {
        console.log("LEFT!"); //Only to check in the console if it's doing well
        gurmannLeftSpace -= 5;
        gurmann.style.left = gurmannLeftSpace + "px";
      } else moveRight();
    }, 20);
  }

  function moveRight() {
    if (isGoingLeft) {
      clearInterval(leftTimerId);
      isGoingLeft = false;
    }
    isGoingRight = true;
    rightTimerId = setInterval(function () {
      //POSIBLE HAD TO CHANGE THE gurmannLeftSpace TO FIT .PNG
      if (gurmannLeftSpace <= 340) {
        console.log("RIGHT!"); //Only to check in the console if it's doing well
        gurmannLeftSpace += 5;
        gurmann.style.left = gurmannLeftSpace + "px";
      } else moveLeft();
    }, 20);
  }

  function moveStraight() {
    isGoingLeft = false;
    isGoingRight = false;
    clearInterval(leftTimerId);
    clearInterval(rightTimerId);
  }

  function control(e) {
    gurmann.style.bottom = gurmannBottomSpace + "px";
    if (e.key === "ArrowLeft") {
      moveLeft();
    } else if (e.key === "ArrowRight") {
      moveRight();
    } else if (e.key === "ArrowUp") {
      moveStraight();
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
    console.log("Game Over!"); //Only to check in the console if it's doing well
    while (grid.firstChild) {
      console.log("Again!"); //Only to check in the console if it's doing well
      grid.removeChild(grid.firstChild);
    }
    grid.innerHTML = score;
    clearInterval(upTimerId);
    clearInterval(downTimerId);
    clearInterval(leftTimerId);
    clearInterval(rightTimerId);
  }

  function start() {
    if (!isGameOver) {
      createPlatforms();
      createGurmann();
      setInterval(movePlatforms, 30);
      jump(startPoint);
      document.addEventListener("keyup", control);
    }
  }
  start();
});
