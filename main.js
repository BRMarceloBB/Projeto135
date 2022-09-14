video = ""; 
status = "";

function preload () {
   video = createVideo("video.mp3");
}

function setup () {
    canvas = createCanvas(480, 380);
    canvas.center();
    video.hide();
}

function draw () {
    image(video, 0, 0, 480, 380);
}

function start () {
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innnerHTML = "Status: detectando objetos";
}

function modelLoaded () {
    console.log("Modelo foi carregado");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}