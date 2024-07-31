let x;
x = 123;

console.log(x); // 123

let y = 456;
console.log(y); // 456

console.log(`x + y = ${x + y}`); //백틱 (`)을 사용하여 문자열과 변수를 결합

document.getElementById("p1").textContent = `x = ${x}`;
document.getElementById("p2").textContent = `y = ${y}`;
document.getElementById("p3").textContent = `x + y = ${x + y}`;