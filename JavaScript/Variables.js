let a; // 변수 a 선언
let b = 2; // 변수 b 선언 및 초기화
// 변수 선언시 값을 할당하지 않으면 undefined가 할당됨
// 변수를 선언할 때 자료형을 명시하지 않음

console.log(a); // undefined
console.log(b); // 2

let c = 3;
c = "Hello, World!";
// 자료형이 동적으로 변할 수 있음
c = null; // 의도적으로 값을 지울 때는 undefined가 아닌 null을 사용 (undefined 사용 시 초기화를 하지 않은 것인지 값을 지운 것인지 구분이 어려움)

const d = 4;
// d = 5; // const로 선언한 변수는 값을 변경할 수 없음
console.log(d); // 4

var e = 5;
// var로 변수를 선언하는 방식은 잘 사용하지 않음