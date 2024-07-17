console.log(true && true); // true (And == &&)

console.log(true || false); // true (Or == ||)

console.log(!true); // false (Not == !)

console.log(!!true); // true

console.log(!!""); // false (빈 문자열은 false)
console.log(!!0); // false (0은 false)
console.log(!!undefined); // false (undefined는 false)
console.log(!!null); // false (null은 false)
console.log(!!NaN); // false (NaN은 false)

console.log( !(2 < 0) ); // true (2 < 0은 false이므로 !false는 true)
console.log(!2 < 0); // false (!2는 false이지만 0과 비교할 수 없으므로 false)
// ! 연산자가 < 연산자보다 우선순위가 높기 때문에 !2가 먼저 계산된다. 