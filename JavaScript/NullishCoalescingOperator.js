// Null 병합 연산자

const obj = {data: 0};
console.log( obj.data || "Error!" ); // Error!
// 왼쪽 피연산자가 false로 간주되는 값이면 오른쪽 피연산자를 반환한다.
// 0은 false로 간주되기 때문에 "Error!"가 출력된다.

// false로 간주되는 값
// " ", 0, false, null, undefined, NaN

// Null 병합 연산자
console.log( obj.data ?? "Error!" ); // 0
// 왼쪽 피연산자가 Null 혹은 undefined일 경우에만 오른쪽 피연산자를 반환한다.