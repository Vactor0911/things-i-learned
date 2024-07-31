const btnRoll = document.getElementById("btn-roll");
const lblNumber = document.getElementById("lbl-number");

const MIN = 1;
const MAX = 6;

btnRoll.onclick = () => {
    let randNumber = Math.floor(Math.random() * MAX) + MIN;
    lblNumber.textContent = randNumber;
};