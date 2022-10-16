let box1;
let vel;
let px;
let py;
let dx;
let dy;
let animation;
let playing;
let btnStop;
let btnStart;

function initiate() {
  playing = true;
  vel = 2;
  px = 0;
  py = 0;
  dx = 1;
  dy = 0;
  box1 = document.getElementById("box1");
  btnStop = document.getElementById("btnStop");
  btnStart = document.getElementById("btnStart");
  switchOnOff();
  play();
  stop();
  start();
}

function play() {
  px = px + dx * vel;
  box1.style.left = px + "px";
  if (px > 800) {
    dx = -1;
  } else if (px < 0) {
    dx = 1;
  }
  animation = requestAnimationFrame(play);
}

function switchOnOff() {
  box1.addEventListener("click", function () {
    if (playing) {
      playing = false;
      box1.style.backgroundColor = "red";
      cancelAnimationFrame(animation);
    } else {
      playing = true;
      box1.style.backgroundColor = "rgb(140, 140, 224)";
      animation = requestAnimationFrame(play);
      console.log(animation);
    }
  });
}

function stop() {
  btnStop.addEventListener("click", function () {
    playing = false;
    box1.style.backgroundColor = "red";
    cancelAnimationFrame(animation);
  });
}

function start() {
  btnStart.addEventListener("click", function () {
    playing = true;
    box1.style.backgroundColor = "rgb(140, 140, 224)";
    requestAnimationFrame(play);
  });
}

const ignite = window.addEventListener("load", initiate);
