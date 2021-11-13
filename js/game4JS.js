document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const gurmann = document.createElement("div");
  let gurmannLeftSpace = 50;
  let startPoint = 150;
  let gurmannBottomSpace = startPoint;
  let isGameOver = false;
  let platformCount = 5;
  let platforms = [];
  let upTimerId;
  let downTimerId;
  let isJumping = true;
  let isGoingLeft = false;
  let isGoingRight = false;
  let leftTimerId;
  let rightTimerId;
  let score = 0;

  function createGurmann() {
    grid.appendChild(gurmann);
    gurmann.classList.add("gurmann");
    gurmannLeftSpace = platforms[0].left;
    gurmann.style.left = gurmannLeftSpace + "px";
    gurmann.style.bottom = gurmannBottomSpace + "px";
  }
  class Platform {
    constructor(newPlatBottom) {
      this.bottom = newPlatBottom;
      this.left = Math.random() * 315;
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
      console.log(platforms);
    }
  }

  function movePlatforms() {
    if (gurmannBottomSpace > 200) {
      platforms.forEach((platform) => {
        platform.bottom -= 4;
        let visual = platform.visual;
        visual.style.bottom = platform.bottom + "px";

        if (platform.bottom < 10) {
          let firstPlatform = platforms[0].visual;
          firstPlatform.classList.remove("platform");
          platforms.shift();
          console.log(platforms);
          score++;
          let newPlatform = new Platform(600);
          platforms.push(newPlatform);
        }
      });
    }
  }

  function jump() {
    clearInterval(downTimerId);
    isJumping = true;
    upTimerId = setInterval(function () {
      gurmannBottomSpace += 20;
      gurmann.style.bottom = gurmannBottomSpace + "px";
      if (gurmannBottomSpace > startPoint + 200) {
        fall();
      }
    }, 30);
  }

  function fall() {
    clearInterval(upTimerId);
    isJumping = false;
    downTimerId = setInterval(function () {
      gurmannBottomSpace -= 5;
      gurmann.style.bottom = gurmannBottomSpace + "px";
      if (gurmannBottomSpace <= 0) {
        GameOver();
      }
      platforms.forEach((platform) => {
        if (
          gurmannBottomSpace >= platform.bottom &&
          gurmannBottomSpace <= platform.bottom + 15 &&
          gurmannLeftSpace + 60 >= platform.left &&
          gurmannLeftSpace <= platform.left + 85 &&
          !isJumping
        ) {
          console.log("Landed");
          startPoint = gurmannBottomSpace;
          jump();
        }
      });
    }, 30);
  }

  function GameOver() {
    console.log("Game Over!");
    isGameOver = true;
    while (grid.firstChild) {
      grid.removeChild(grid.firstChild);
    }
    grid.innerHTML = score;
    clearInterval(upTimerId);
    clearInterval(downTimerId);
    clearInterval(leftTimerId);
    clearInterval(rightTimerId);
  }

  function control(e) {
    if (e.key === "ArrowLeft") {
      moveLeft();
    } else if (e.key === "ArrowRight") {
      moveRight();
    } else if (e.key === "ArrowUp") {
      moveStraight();
    }
  }

  function moveLeft() {
    if (isGoingRight) {
      clearInterval(rightTimerId);
      isGoingRight = false;
    }
    isGoingLeft = true;
    leftTimerId = setInterval(function () {
      if (gurmannLeftSpace >= 0) {
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
      if (gurmannLeftSpace <= 340) {
        gurmannLeftSpace += 5;
        gurmann.style.left = gurmannLeftSpace + "px";
      } else moveLeft();
    }, 20);
  }

  function moveStraight() {
    isGoingRight = false;
    isGoingLeft = false;
    clearInterval(rightTimerId);
    clearInterval(leftTimerId);
  }

  function start() {
    if (!isGameOver) {
      createPlatforms();
      createGurmann();
      setInterval(movePlatforms, 30);
      jump();
      document.addEventListener("keyup", control);
    }
  }
  //attach to button:
  start();
});
