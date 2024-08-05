const aryPrice = [5, 30, 10, 25, 15, 20];

const sum = (accumulator, element) => {
    // reduce() 함수의 인자로 넘겨지는 함수는 두 개의 인자를 받는다. 첫 번째 인자는 accumulator이며, 두 번째 인자는 element이다.
    // accumulator는 이전 함수 호출에서 반환된 값이다. 이 함수는 배열의 각 요소에 대해 한 번씩 호출된다.
    return accumulator + element;
};

const total = aryPrice.reduce(sum);
console.log(`$${total.toFixed(2)}`); // toFixed() 함수는 소수점 이하 자릿수를 지정한다. 여기서는 소수점 이하 2자리까지 표시한다.

const aryGrade = [75, 50, 90, 80, 65, 95];

const getMax = (accumulator, element) => {
    return Math.max(accumulator, element);
};

const maxGrade = aryGrade.reduce(getMax);
console.log(maxGrade); // 95