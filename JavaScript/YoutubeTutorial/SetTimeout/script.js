const sayHello = () => {
    console.log("Hello");
}

setTimeout(sayHello, 3000); // 3000 밀리초 후에 sayHello 함수 실행
const timeoutId = setTimeout(() => {console.log("Hello")}, 2000);
clearTimeout(timeoutId); // setTimeout 함수 취소