// 다음 배열에서 "라" 를 모두 제거하라.
const array = ["가", "라", "다", "라", "마", "라"];

while (array.includes("라")) {
    array.splice(array.indexOf("라"), 1);
}

console.log(array);