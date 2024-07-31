let userName = "Vactor0911";

console.log(userName.charAt(0)); // V
console.log(userName.indexOf("1")); // 8
console.log(userName.lastIndexOf("1")); // 9
console.log(userName.length); // 10
console.log(userName.toUpperCase()); // VACTOR0911
console.log(userName.toLowerCase()); // vactor0911
console.log(userName.repeat(2)); // Vactor0911Vactor0911

let phoneNumber = "123-456-7890";
console.log(phoneNumber.slice(4)); // 456-7890
console.log(phoneNumber.replace("-", "")); // 123456-7890
console.log(phoneNumber.replaceAll("-", "")); // 1234567890
console.log(phoneNumber.padStart(20, "*")); // ********123-456-7890

let email = "testemail@gamil.com";
console.log(email.includes("@")); // true
console.log(email.slice(0, 2)); // te
console.log(email.slice(-2)); // om

console.log(email.slice(0, email.indexOf("@"))); // testemail
console.log(email.slice(email.indexOf("@") + 1)); // gamil.com

console.log(email.split("@")); // [ 'testemail', 'gamil.com' ]