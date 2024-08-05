// Function Declaration (함수 선언)
function funcDeclaration() {
  console.log("Hello, World!");
}

// Function Expressions (함수 표현)
const funcExpression = function () {
  console.log("Hello, World!");
};

const aryNumber = [1, 2, 3, 4, 5, 6];
const arySquare = aryNumber.map(function (element) {
  return Math.pow(element, 2);
});
