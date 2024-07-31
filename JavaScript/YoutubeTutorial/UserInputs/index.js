let input;
input = window.prompt("Enter a number: ");

console.log(input);
console.log(typeof input);

let userName;
document.getElementById("btn-submit").onclick = () => {
    userName = document.getElementById("txt-userName").value;
    document.getElementById("h1").textContent = `Welcome ${userName}!`;
};