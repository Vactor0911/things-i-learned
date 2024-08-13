// Props = 여러 컴포넌트 사이에서 전달되는 읽기만 가능한 데이터 (부모 -> 자식 구조)
// <Component key={value} /> -> key는 props로 전달됨

import Student from "./components/Student.jsx";

function App() {
  return (
    <>
      <Student name="John" age={30} isEmployed={true} />
      <Student name="James" age={42} isEmployed={false} />
      <Student name="Charles" age={50} isEmployed={true} />
      <Student name="Mike" age={26} isEmployed={false} />
      <Student /> {/* Default props */}
      <Student name="Sam" /> {/* Default props */}
    </>
  );
}

export default App;
