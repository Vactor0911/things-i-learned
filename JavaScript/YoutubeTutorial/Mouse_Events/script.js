const myBox = document.getElementById("myBox");

myBox.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "tomato";
  event.target.textContent = "OUCH! 🤕";
});

myBox.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Dont Click Me 😲";
});

myBox.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "limegreen";
    event.target.textContent = "Click Me 😀";
});