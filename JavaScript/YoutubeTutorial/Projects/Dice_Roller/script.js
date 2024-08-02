const btnRollDice = document.getElementById("btn-roll-dice");
const inputDice = document.getElementById("input-dices");
const divDiceResult = document.getElementById("dice-result");
const divDiceImages = document.getElementById("dice-images");

btnRollDice.onclick = () => {
  const dices = Number(inputDice.value);

  aryRandInt = [];
  aryDiceImages = [];
  for (let i = 0; i < dices; i++) {
    const randInt = Math.floor(Math.random() * 6) + 1;
    aryRandInt.push(randInt);
    aryDiceImages.push(
      `<img src="./dices/dice-${randInt}.svg" alt="dice-${randInt}">`
    );
  }

  divDiceResult.textContent = `dice: ${aryRandInt.join(", ")}`;
  divDiceImages.innerHTML = aryDiceImages.join("");
};
