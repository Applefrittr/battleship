import "./style.css";
import * as gameMethods from "./game";

const volume = document.querySelector("#mp3");
const newGame = document.querySelector("#new-game");
const title = document.querySelector("#battleship");
const body = document.querySelector("body");

let audio = new Audio("Battlefield 1942.mp3");  // EA's Battlefield 1942 Main Theme.  Downloaded from archive.org
audio.play();
audio.loop = true;

volume.addEventListener("click", () => {
  if (audio.muted === false) {
    audio.muted = true;
    volume.src = "images/mute.png";
  } else {
    audio.muted = false;
    volume.src = "images/volume.png";
  }
});

newGame.addEventListener("click", () => {
  newGame.style.display = "none";
  title.style.top = "2%";
  gameMethods.newGame();
});
