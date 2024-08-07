const myBox = document.getElementById("myBox");
const MOVE_AMOUNT = 10;
let x = 0;
let y = 0;

let clamp = (n, min, max) => {
    return Math.max(min, Math.min(n, max));
}

document.addEventListener("keydown", (event) => {
  if (event.key.startsWith("Arrow")) {
    switch (event.key) {
      case "ArrowUp":
        y -= MOVE_AMOUNT;
        myBox.textContent = "👆";
        break;
      case "ArrowDown":
        y += MOVE_AMOUNT;
        myBox.textContent = "👇";
        break;
      case "ArrowLeft":
        x -= MOVE_AMOUNT;
        myBox.textContent = "👈";
        break;
      case "ArrowRight":
        x += MOVE_AMOUNT;
        myBox.textContent = "👉";
        break;
    }

    x = clamp(x, 0, window.innerWidth - myBox.clientWidth);
    y = clamp(y, 0, window.innerHeight - myBox.clientHeight);

    myBox.style.top = `${y}px`;
    myBox.style.left = `${x}px`;
  }
});

document.addEventListener("keyup", (event) => {
  myBox.textContent = "😀";
});
