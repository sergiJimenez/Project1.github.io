document.addEventListener("DOMContentLoaded", () => {
    const grid = document.querySelector(".grid");
    const gurmann = document.createElement("div");
    let gurmannLeftSpace = 50;
    let gurmannBottomSpace = 250;
    let isGameOver = false;
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
            platforms.forEach(platform => {
                platform.bottom -= 4;
                let visual = platform.visual;
                visual.style.bottom = platform.bottom + "px";
            });
        }
    }

    function start() {
        if (!isGameOver) {
            createGurmann();
            createPlatforms();
            setInterval(movePlatforms,30);
        }
    }
    //attach to button:
    start()
});