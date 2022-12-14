import "./style.css";
import * as objects from "./objects.js";
import * as gameMethods from "./game";

const volume = document.querySelector("#mp3");
const newGame = document.querySelector("#new-game");
const title = document.querySelector("#battleship");
const body = document.querySelector("body");

let audio = new Audio("Battlefield 1942.mp3");
audio.play();
audio.loop = true;

volume.addEventListener("click", () => {
  if (audio.muted === false) {
    audio.muted = true;
    volume.src = "mute.png";
  } else {
    audio.muted = false;
    volume.src = "volume.png";
  }
});

newGame.addEventListener("click", () => {
  newGame.style.display = "none";
  title.style.top = "2%";
  gameMethods.newGame();
});
