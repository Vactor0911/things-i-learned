let min = 1;
let max = 30;
const answer = Math.floor(Math.random() * max) + min;

const spanMin = document.getElementById("min-number");
const spanMax = document.getElementById("max-number");
const spanGuess = document.getElementById("span-guess");
const spanUpOrDown = document.getElementById("span-up-or-down");
const input = document.getElementById("input-number");
const btnSubmit = document.getElementById("btn-submit");
const aryDivAttempts = [
  document.getElementById("attempt1"),
  document.getElementById("attempt2"),
  document.getElementById("attempt3"),
  document.getElementById("attempt4"),
  document.getElementById("attempt5"),
];

spanMin.textContent = min;
spanMax.textContent = max;

let flagGame = true;
let attempts = 5;

const decreaseAttempts = () => {
  attempts--;

  for (let i = 0; i < aryDivAttempts.length; i++) {
    if (i < attempts) {
      aryDivAttempts.at(-i - 1).style.background = "green";
      aryDivAttempts.at(-i - 1).style.border = "1px solid darkgreen";
    } else {
      aryDivAttempts.at(-i - 1).style.background = "red";
      aryDivAttempts.at(-i - 1).style.border = "1px solid darkred";
    }
  }

  if (attempts <= 0) {
    flagGame = false;
    spanGuess.innerHTML = "<strong>Answer was [ " + answer + " ] !</strong>";
    return;
  }
};

const isValid = (number) => {
  return number != NaN && number <= max && number >= min && number != 0;
};

btnSubmit.onclick = () => {
  let number = Number(input.value);
  if (!isValid(number) || !flagGame) {
    return;
  }

  if (number == answer) {
    spanGuess.innerHTML = "<strong>Correct!</strong>";
    spanUpOrDown.textContent = "◆";
    spanUpOrDown.style.color = "black";
    flagGame = false;
    return;
  }
  decreaseAttempts();

  if (number > answer) {
    spanUpOrDown.textContent = "▼";
    spanUpOrDown.style.color = "red";
    max = number - 1;
    spanMax.textContent = max;
  } else {
    spanUpOrDown.textContent = "▲";
    spanUpOrDown.style.color = "green";
    min = number + 1;
    spanMin.textContent = min;
  }
};
