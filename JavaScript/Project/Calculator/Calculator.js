// inputs
const inTemp = document.getElementById("input-temp");
const inResult = document.getElementById("input-result");
let flagReset = false;

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case "+":
      return number1 + number2;
    case "-":
      return number1 - number2;
    case "×":
      return number1 * number2;
    case "÷":
      return number1 / number2;
    default:
      return;
  }
};

const addNumber = (number) => () => {
  if (inResult.value === "0") {
    inResult.value = number;
    flagReset = false;
  } else if (flagReset) {
    inResult.value = number;
    inTemp.value = "";
    flagReset = false;
  } else {
    inResult.value += number;
  }
};

const addOperator = (operator) => () => {
  if (inResult.value === "0") {
    if (operator === "-") {
      inTemp.value = "0 -";
    }
    return;
  } else {
    flagReset = false;
    const temp = inTemp.value;
    switch (temp[temp.length - 1]) {
      case "+":
      case "-":
      case "×":
      case "÷":
        inTemp.value = calculate() + " " + operator;
        inResult.value = "0";
        return;
      default:
        inTemp.value = inResult.value + " " + operator;
        inResult.value = "0";
        break;
    }
  }
};

// numbers
document.getElementById("btn-one").addEventListener("click", addNumber("1"));
document.getElementById("btn-two").addEventListener("click", addNumber("2"));
document.getElementById("btn-three").addEventListener("click", addNumber("3"));
document.getElementById("btn-four").addEventListener("click", addNumber("4"));
document.getElementById("btn-five").addEventListener("click", addNumber("5"));
document.getElementById("btn-six").addEventListener("click", addNumber("6"));
document.getElementById("btn-seven").addEventListener("click", addNumber("7"));
document.getElementById("btn-eight").addEventListener("click", addNumber("8"));
document.getElementById("btn-nine").addEventListener("click", addNumber("9"));
document.getElementById("btn-zero").addEventListener("click", addNumber("0"));

// operators
document.getElementById("btn-sum").addEventListener("click", addOperator("+"));
document.getElementById("btn-sub").addEventListener("click", addOperator("-"));
document.getElementById("btn-mul").addEventListener("click", addOperator("×"));
document.getElementById("btn-div").addEventListener("click", addOperator("÷"));

// clear
document.getElementById("btn-clear").addEventListener("click", () => {
  inTemp.value = "";
  inResult.value = "0";
});

// result
document.getElementById("btn-result").addEventListener("click", () => {
  let number1 = Number(inTemp.value.split(" ")[0]);
  let number2;
  const operator = inTemp.value.split(" ")[1];
  if (inTemp.value.split(" ").length > 2) {
    number1 = Number(inResult.value);
    number2 = Number(inTemp.value.split(" ")[2]);
  } else {
    number2 = Number(inResult.value);
  }
  const reuslt = calculate(number1, number2, operator);

  inTemp.value = number1 + " " + operator + " " + number2 + " =";
  inResult.value = reuslt;
  flagReset = true;
});
