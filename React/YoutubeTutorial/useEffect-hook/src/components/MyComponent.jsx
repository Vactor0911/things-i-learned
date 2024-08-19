import { useState, useEffect } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");

  useEffect(() => {
    document.title = `Count: ${count} | Color: ${color}`;

    return () => {
      // cleanup 함수
      // 컴포넌트가 마운트 해제될 때 실행
    };
  }, [count, color]); // count, color 값이 변경될 때만 실행
  // useEffect(() => {}) 형식으로 사용하면 다시 렌더링 될 때마다 실행된다 (아무 상관 없는 컴포넌트가 렌더링 될 때마다 실행될 수 있다)
  // useEffect(() => {}, []) 형식으로 사용하면 컴포넌트가 마운트 될 때만 실행되게 때문에 최초 1회만 실행된다

  const addCount = () => {
    setCount((c) => c + 1);
  };

  const subCount = () => {
    setCount((c) => c - 1);
  };

  const changeColor = () => {
    setColor((c) => (c === "green" ? "red" : "green"));
  };

  return (
    <>
      <p style={{ color: color }}>Count: {count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subCount}>Subtract</button>
      <br />
      <button onClick={changeColor}>Change Color</button>
    </>
  );
};

export default MyComponent;
