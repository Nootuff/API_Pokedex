var openClose = document.getElementById("openClose");

var under = document.getElementById("under");

var openClose = document.getElementById("openClose");

var img = document.getElementById("img");

var zoomMinus = document.getElementById("zoomOut");

var zoomPlus = document.getElementById("zoomIn");

var inner = document.querySelectorAll(".inner");

var outer = document.querySelectorAll(".outer");

var isOpen = false;

var imgZoomLvl = 2;

function opener() {
  if (isOpen == false) {
    openClose.disabled = true;
    under.classList.add("slide");
    setTimeout(function () {
      under.classList.add("zIndex");
    }, 500);
    isOpen = true;
    setTimeout(function () {
      openClose.disabled = false;
    }, 505);
  } else {
    openClose.disabled = true;
    under.classList.remove("zIndex");
    setTimeout(function () {
      under.classList.remove("slide");
    }, 350);
    isOpen = false;
    setTimeout(function () {
      openClose.disabled = false;
    }, 505);
  }
}

function zoomIn() {
  if (imgZoomLvl == 2) {
    img.classList.add("zoomedIn");
    img.classList.remove("normalSize");
    img.classList.remove("zoomedOut");
    imgZoomLvl = 3;
  } else if (imgZoomLvl == 1) {
    img.classList.add("normalSize");
    img.classList.remove("zoomedOut");
    imgZoomLvl = 2;
  }
}

function zoomOut() {
  if (imgZoomLvl == 2) {
    img.classList.add("zoomedOut");
    img.classList.remove("normalSize");
    imgZoomLvl = 1;
  } else if (imgZoomLvl == 3) {
    img.classList.add("normalSize");
    img.classList.remove("zoomedIn");
    imgZoomLvl = 2;
  }
}

function power() {
  img.classList.toggle("fadeOut"); 
  document.getElementById("screen").classList.toggle("screenOff"); 
  document.getElementById("dataBody").classList.toggle("fadeOut");
  for (var i=0; i < inner.length; i++) {
  inner[i].classList.toggle("lightsOff");
}
  for (var i=0; i < outer.length; i++) {
  outer[i].classList.toggle("lightsOff");
}
}

var clickSound = new Howl({
  src: ['/Audio/ui-clickmp3.mp3']
});

document.querySelectorAll('.button').forEach(item => {
  item.addEventListener('click', event => {
    clickSound.play();
  })
})

