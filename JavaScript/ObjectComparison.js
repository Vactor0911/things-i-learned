// 객체끼리 무작정 비교하면 false가 반환된다.
console.log({} === {}); // false
// {} === {}에서 앞의 {}와 뒤의 {} 모두 새로운 객체를 생성한 것이므로 서로 같지 않다.

// 객체 비교하기
const obj = {data: "Hello World!"};
const array = [1, 2, obj];
console.log(obj === array[2]); // true
// obj 변수에 생성한 객체를 저장하고, array 배열에서 이를 참조했으므로 obj와 array[2]는 같은 객체이다.

//객체 복사
const obj1 = {data: "Hello World!"};
const obj2 = obj1;
console.log(obj1 === obj2); // true
console.log(obj2.data); // Hello World!
// obj1과 obj2는 같은 객체를 참조하고 있으므로 obj1과 obj2는 같은 객체이다.
// 따라서, obj1과 obj2는 같은 값을 가진다.

const obj3 = {data: "Hello World!"};
const obj4 = {data: "Hello World!"};
console.log(obj3 === obj4); // false
// obj3과 obj4는 각자 새로운 객체를 생성하였으므로 서로 다른 객체이다.