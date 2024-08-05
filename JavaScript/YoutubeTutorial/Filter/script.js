let aryNumber = [1, 2, 3, 4, 5, 6, 7];

const isEven = (element) => {
    return element % 2 === 0;
};

const isOdd = (element) => {
    return element % 2 !== 0;
};

let aryEvenNumber = aryNumber.filter(isEven);
// filter() 함수의 인자로 넘겨지는 함수는 true 또는 false를 반환해야 하며, true를 반환하는 요소만을 모아 새로운 배열을 만든다.
console.log(aryEvenNumber); // [2, 4, 6]

let aryOddNumber = aryNumber.filter(isOdd);
console.log(aryOddNumber); // [1, 3, 5, 7]