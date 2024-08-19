// useEffect() = 아래 조건을 만족하는 경우 리액트에게 특정 코드를 실행하도록 지시하는 후크
// 1. 컴포넌트가 다시 렌더링 될 때
// 2. 컴포넌트가 마운트 될 때
// 3. 특정 props가 변경될 때 (값이 변할 때)

// 1. useEffect(() => {}) // 컴포넌트가 렌더링 될 때마다 실행
// 2. useEffect(() => {}, []) // 컴포넌트가 마운트 될 때만 실행
// 3. useEffect(() => {}, [props]) // props가 변경될 때만 실행

import MyComponent from "./components/MyComponent.jsx";

function App() {
  return (
    <>
      <MyComponent />
    </>
  );
}

export default App;
