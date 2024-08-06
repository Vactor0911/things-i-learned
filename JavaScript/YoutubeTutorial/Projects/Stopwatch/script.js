const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

let start = () => {
  if (isRunning) {
    return;
  }
  isRunning = true;
  startTime = Date.now() - elapsedTime;
  timer = setInterval(update, 10);
};

let stop = () => {
  if (!isRunning) {
    return;
  }
  isRunning = false;
  clearInterval(timer);
  elapsedTime = Date.now() - startTime;
};

let reset = () => {
  stop();
  elapsedTime = 0;
  display.innerHTML = "00:00:00.<span>00</span>";
};

const TO_MIN = 1 / 1000 / 60;
const TO_HOUR = TO_MIN / 60;
let update = () => {
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  const hours = Math.floor(elapsedTime * TO_HOUR)
    .toString()
    .padStart(2, "0");
  const minutes = Math.floor((elapsedTime * TO_MIN) % 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((elapsedTime * 0.001) % 60)
    .toString()
    .padStart(2, "0");
  const milliseconds = Math.floor((elapsedTime % 1000) * 0.1)
    .toString()
    .padStart(2, "0");

  display.innerHTML = `${hours}:${minutes}:${seconds}.<span>${milliseconds}</span>`;
};
