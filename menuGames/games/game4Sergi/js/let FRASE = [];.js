let FRASE = [];
FRASE[0] = "../media/FRASE/F_item.png";
FRASE[1] = "../media/FRASE/R_item.png";
FRASE[2] = "../media/FRASE/A_item.png";
FRASE[3] = "../media/FRASE/S_item.png";
FRASE[4] = "../media/FRASE/E_item.png";
let fraseCount = 1;

class FRASE {
    constructor(newFRASEBottom) {
      this.left = Math.random() * 732; //To know which number is it we have to make this operation (gridWidth - platformWidth). Why? Because we want to create the number of platforms inside of our grid
      this.bottom = newFRASEBottom;
      this.visual = document.createElement("div");

      const visual = this.visual;
      visual.classList.add("letter");
      visual.style.left = this.left + "px";
      visual.style.bottom = this.bottom + "px";
      grid.appendChild(visual);
    }
  }

  function createLetter() {
    for (let i = 0; i < fraseCount; i++) {
      let FRASEGap = 1000 / fraseCount; //Distance between each platform. We choose these number 'cause we want to overcome the grid with to make sure that the distance is enough
      let newFRASEBottom = 250 + i * FRASEGap; //It'll increase where the new platform bottom distance will be create
      let newFRASE = new Platform(newFRASEBottom);
      frases.push(newFRASE);
    }
  }

  function moveLetter() {
    if (gurmannBottomSpace > 200) {
        frases.forEach(frase => {
        frase.bottom -= 5; //Speed of the platforms are falling
        let visual = frase.visual;
        visual.style.bottom = frase.bottom + "px";

        if (frase.bottom < -30) { //To dissapear when it collide to -30
          let firstFRASE = frases[0].visual;
          firstFRASE.classList.remove("platform");
          frases.shift();
          let newFRASE = new FRASE(1080); //Where the new platform will be appear. We know that because our height is 1080px
          frases.push(newFRASE);
        }
      });
    }
  }

  function FRASETakeIt(){
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
        scoreCoins++;
        console.log("Score COINS");
        let coinToRemove = coins[0].visual;
        coinToRemove.classList.remove("coin");
        coins.shift();
        let newCoin = new Coin(1080);
        coins.push(newCoin);
      }
    });
}

function checkFRASE (){
    if(FRASETakeIt(FRASE[1]) == 1){
        let checkF = true;
    }
}