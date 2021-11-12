const { platform } = require("process");

document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".grid");
    const gurmann = document.createElement("div");
    let gurmannLeftSpace = 50;
    let gurmannBottomSpace = 10;
    let GameOver = false;
    let platformCount = 5;
    let platforms = [];

    function createGurmann() {
        grid.appendChild(gurmann);
        gurmann.classList.add("gurmann");
        gurmann.style.left = gurmannLeftSpace + "px";
        gurmann.style.bottom = gurmannBottomSpace + "px";
    }
    createGurmann();

    class Platform {
        constructor(newPlatBottom) {
            this.bottom = newPlatBottom;
            this.left = Math.random() * 500;
            this.visual = document.createElement("div");

            const visual = this.visual;
            visual.classList.add("platform");
            visual.style.left = this.left + "px";
            visual.style.bottom = this.bottom + "px";
            grid.appendChild(visual);
        }
    }
    
    
    function createPlatforms() {
        for (let i = 0 ; i < platformCount ; i++) {
            let platGap = 600 / platformCount;
            let newPlatBottom = 200 + i * platGap;
            let newPlatform = new Platform(newPlatBottom);
            platforms.push(newPlatform);
            console.log(platforms);
        }
    }
    
    function movePlatforms() {
        if (gurmannBottomSpace > 1) {
            platforms.forEach(platform => {
                platform.bottom -= 4;
                let visual = platform.visual;
                visual.style.bottom = platform.bottom + "px";
            })
        }
    }

    function start() {
        if (!GameOver) {
            createGurmann();
            createPlatforms();
            movePlatforms();
        }
    }
    //attach to button:
    start()
})