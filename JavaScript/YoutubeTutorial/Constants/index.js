const PI = 3.141592; // 숫자 혹은 불리언 값은 대문자로 작성하는 것이 관습임. 문자열은 보통 대문자로 작성하지 않음.
let radius;
let circumference;

document.getElementById("btn-calculate").onclick = () => {
    radius = document.getElementById("txt-radius").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("h3").textContent = circumference + "cm";
};