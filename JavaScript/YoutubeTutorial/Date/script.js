const date = new Date();
// Date (year, month, day, hours, minutes, seconds, milliseconds)

console.log(date);

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

console.log(`${year}년 ${month+1}월 ${day}일 | ${hour}시 ${minute}분 ${second}초`);