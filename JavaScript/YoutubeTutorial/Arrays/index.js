let array = ["item1", "item2", "item3"];

console.log(array); // ["item1", "item2", "item3"]
console.log(array[0]); // "item1"

array.push("item4"); // 맨 뒤에 새로운 요소 추가
console.log(array);

array.pop(); // 맨 뒤의 요소 제거
console.log(array);

array.unshift("item0"); // 맨 앞에 새로운 요소 추가
console.log(array);

array.shift(); // 맨 앞의 요소 제거
console.log(array);

array.push("item2");
console.log(array.indexOf("item2")); // 1
console.log(array.lastIndexOf("item2")); // 3

console.log(array.sort().reverse()); // ["item3", "item2", "item2", "item1"]