// undefined 는 보통 변수를 선언했지만 값을 할당하지 않았을 때 나타나는 값이다.
// 함수의 반환값이 없을 때도 undefined가 반환된다.
// 기본값으로 많이 사용된다.
// !!undefined 는 false를 반환한다.

// null 은 의도적으로 값이 없음을 나타낼 때 사용한다.
// null은 객체가 아닌 원시 자료형이다.
// !!null 은 false를 반환한다.

console.log(undefined == null); // true
console.log(undefined === null); // false
// undefined와 null은 다른 자료형이지만 값이 같다.

console.log(typeof undefined); // undefined
console.log(typeof null); // object