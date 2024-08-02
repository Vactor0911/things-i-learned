const hello = (callback) => {
  setTimeout(() => {
    console.log("Hello, World!");
    callback();
  }, 3000);
};

const goodbye = () => {
  console.log("Goodbye, World!");
};

hello(goodbye);

const sum = (callback, x, y) => {
    let result = x + y;
    callback(result);
};

const printResult = (result) => {
    console.log(result);
};

sum(printResult, 3, 10);

// Callback = 어느 함수의 인자로 넘겨지는 또 다른 함수를 콜백 함수라고 한다.
// 콜백 함수를 이용하여 비동기적 처리를 할 수 있고, 함수의 실행 순서를 보장받을 수 있다.