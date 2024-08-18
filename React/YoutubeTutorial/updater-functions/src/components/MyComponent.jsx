import { useState } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    // setCount(count + 1);
    // setCount(count + 1); //useState 함수는 "현재 상태"를 반환하므로, setCount 함수를 연속하여 호출해도 count는 1만 증가한다.
    setCount((count) => count + 1); //함수를 인자로 전달하여 해결
    setCount((count) => count + 1);
  };

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increaseCount}>Count</button>
    </>
  );
};

export default MyComponent;
