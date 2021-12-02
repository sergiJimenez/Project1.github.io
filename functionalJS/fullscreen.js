var fullscreenElement = document.documentElement;

function openFullscreen() {
    if (fullscreenElement.requestFullscreen){
        fullscreenElement.requestFullscreen();
    } else if (fullscreenElement.webkitRequestFullscreen){ //Safari
        fullscreenElement.webkitRequestFullscreen();
    } else if (fullscreenElement.msRequestFullscreen){ //Internet Explorer 11
        fullscreenElement.msRequestFullscreen();
    }
}

function closeFullscreen() {
    if (document.exitFullscreen){
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen){
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen){
        document.msExitFullscreen();
    }
}