import * as sounds from './focusTimer/sounds.js'

const buttonNature = document.querySelector(".ph-tree");
const buttonRain = document.querySelector(".ph-cloud-rain");
const buttonCafeteria = document.querySelector(".ph-storefront");
const buttonFire = document.querySelector(".ph-fire");
let defaultTheme

buttonNature.addEventListener('click', function() {
  if (defaultTheme != "nature"){
    sounds.natureSound.play()
    document.documentElement.classList.add("nature");
    document.documentElement.classList.remove("rain");
    document.documentElement.classList.remove("cafeteria");
    document.documentElement.classList.remove("fire");
    sounds.rainSound.pause();
    sounds.rainSound.currentTime = 0;
    sounds.cafeteriaSound.pause();
    sounds.cafeteriaSound.currentTime = 0;
    sounds.fireSound.pause();
    sounds.fireSound.currentTime = 0;
    defaultTheme = "nature";
  } else {
    sounds.natureSound.pause();
    sounds.natureSound.currentTime = 0;
    document.documentElement.classList.remove("nature");
    defaultTheme = "";
  }
});

buttonRain.addEventListener('click', function() {
  if(defaultTheme != "rain"){
    sounds.rainSound.play()
    document.documentElement.classList.add("rain");
    document.documentElement.classList.remove("nature");
    document.documentElement.classList.remove("cafeteria");
    document.documentElement.classList.remove("fire");
    sounds.natureSound.pause();
    sounds.natureSound.currentTime = 0;
    sounds.cafeteriaSound.pause();
    sounds.cafeteriaSound.currentTime = 0;
    sounds.fireSound.pause();
    sounds.fireSound.currentTime = 0;
    defaultTheme = "rain";
  } else {
    sounds.rainSound.pause();
    sounds.rainSound.currentTime = 0;
    document.documentElement.classList.remove("rain");
    defaultTheme = "";
  }
});

buttonCafeteria.addEventListener('click', function() {
  if(defaultTheme != "cafeteria"){
    sounds.cafeteriaSound.play()
    document.documentElement.classList.add("cafeteria");
    document.documentElement.classList.remove("rain");
    document.documentElement.classList.remove("nature");
    document.documentElement.classList.remove("fire");
    sounds.natureSound.pause();
    sounds.natureSound.currentTime = 0;
    sounds.rainSound.pause();
    sounds.rainSound.currentTime = 0;
    sounds.fireSound.pause();
    sounds.fireSound.currentTime = 0;
    defaultTheme = "cafeteria";
  } else {
    sounds.cafeteriaSound.pause();
    sounds.cafeteriaSound.currentTime = 0;
    document.documentElement.classList.remove("cafeteria");
    defaultTheme = "";
  }
});

buttonFire.addEventListener('click', function() {
  if(defaultTheme != "fire"){
    sounds.fireSound.play()
    document.documentElement.classList.add("fire");
    document.documentElement.classList.remove("rain");
    document.documentElement.classList.remove("cafeteria");
    document.documentElement.classList.remove("nature");
    sounds.natureSound.pause();
    sounds.natureSound.currentTime = 0;
    sounds.cafeteriaSound.pause();
    sounds.cafeteriaSound.currentTime = 0;
    sounds.rainSound.pause();
    sounds.rainSound.currentTime = 0;
    defaultTheme = "fire";
  } else {
    sounds.fireSound.pause();
    sounds.fireSound.currentTime = 0;
    document.documentElement.classList.remove("fire");
    defaultTheme = "";
  }
});