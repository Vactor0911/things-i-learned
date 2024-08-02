let aryNumber = [1, 2, 3, 4, 5];

console.log(aryNumber);

const display = (element) => {
  console.log(element);
};
aryNumber.forEach(display); // 콜백 함수를 이용한 For Each 반복문

const double = (element, index, array) => {
  array[index] = element * 2;
  console.log(array);
};
aryNumber.forEach(double);
console.log(`배열의 모든 요소가 2배가 된 배열: [${aryNumber}]`);

for (let number of aryNumber) { // For Of 반복문 (다른 언어에서 사용하는 For Each와 유사함)
  console.log(number);
}
