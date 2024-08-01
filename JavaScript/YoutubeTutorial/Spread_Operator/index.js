// ... 연산자는 배열이나 문자열과 같은 이터러블을 개별 요소로 분리한다.

let aryNumber = [1, 2, 3, 4, 5];
console.log(Math.max(aryNumber)); // NaN
console.log(Math.max(...aryNumber)); // 5

console.log(Math.min(...aryNumber)); // 1

let language = "JavaScript";
let aryChar = [...language];
console.log(aryChar); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

console.log(aryChar.join("-")); // J-a-v-a-S-c-r-i-p-t

let array1 = ["item1", "item2", "item3"];
let array2 = ["item4", "item5", "item6"];
let newArray = [...array1, ...array2];
console.log(newArray); // ["item1", "item2", "item3", "item4", "item5", "item6"] 배열 두 개를 복사하여 합친다.