const aryNumber = [1, 2, 3, 4, 5];

const square = (element) => {
    return Math.pow(element, 2)
};

const arySquare = aryNumber.map(square); // 콜백 함수를 이용한 Map 반복문
console.log(arySquare);

// Map = 배열의 모든 요소에 대해 주어진 콜백 함수를 호출한 결과를 모아 새로운 배열을 반환한다.