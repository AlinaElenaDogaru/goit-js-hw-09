"use strict";


const startButton = document.querySelector('[data-start]');

const stopButton = document.querySelector('[data-stop]');

const body = document.querySelector('body');

let intervalId;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const startFunction = () => {
    if (!intervalId) {
        intervalId = setInterval(() => {
            body.style.backgroundColor = getRandomHexColor();
            startButton.disabled = true;
        }, 1000);
    }
};

startButton.addEventListener("click", startFunction);

stopButton.addEventListener("click", () => {
   clearInterval(intervalId);
    intervalId = null;
    startButton.disabled = false;
} )




startButton.style.backgroundColor = "#87E990";
stopButton.style.backgroundColor = "#E9383F";

startButton.style.borderStyle = "none";
stopButton.style.borderStyle = "none";

startButton.style.borderRadius = "2px";
stopButton.style.borderRadius = "2px";

startButton.style.width = "80px";
stopButton.style.width = "80px";

startButton.style.height = "30px";
stopButton.style.height = "30px";

startButton.style.marginLeft = "650px";