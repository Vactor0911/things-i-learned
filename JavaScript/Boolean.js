console.log(true);
console.log(false);

console.log(2 > 1); // true
console.log(1 == 2); // false

console.log(NaN == NaN); // false

console.log(true > false); // true (true = 1; false = 0)

console.log('Z' > 'A'); // true (사전순으로 Z가 A보다 뒤에 있음)

console.log("abc" < 5); // false (NaN < 5 -> false)
console.log("3" < 5); // true (3 < 5 -> true; 자료형이 모두 숫자로 변환된 후 비교)

console.log("1" == 1); // true (자료형이 다르지만 값이 같으므로 true; ==는 값만 비교)
console.log("1" === 1); // false (자료형이 다르므로 false; ===는 값과 자료형 모두 비교)