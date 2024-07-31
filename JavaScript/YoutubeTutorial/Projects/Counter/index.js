const btnDecrease = document.getElementById("btn-decrease");
const btnReset = document.getElementById("btn-reset");
const btnIncrease = document.getElementById("btn-increase");
const lblCount = document.getElementById("lbl-count");

let count = 0;

btnReset.onclick = () => {
    count = 0;
    lblCount.textContent = count;
};

btnIncrease.onclick = () => {
    count++;
    lblCount.textContent = count;
};

btnDecrease.onclick = () => {
    count--;
    lblCount.textContent = count;
};