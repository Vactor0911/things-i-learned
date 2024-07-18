// 함수의 return 값은 기본적으로 undefined이다.
// 여러 값을 return하고 싶을 때는 배열로 return한다.

// Method 1
// function {name}() { }
function func1(param) {
  console.log(param);
}

// Method 2
// const {name} = function () { }
const func2 = function (param) {
  console.log(param);
};

// Method 3
// const {name} = () => { }
const func3 = (param) => {
  console.log(param);
};

// 익명 함수
// function() { }
// () => { }
// 함수의 이름이 없음
// 특정 부분에서 한 번만 사용할 때 이용
// 다른 부분의 코드에서는 사용할 수 없음