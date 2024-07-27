import "./App.css";
import { Page1 } from "./components/Page1"; /* Page1 컴포넌트를 불러옴 */

function App() {
  return (
    // HTML 코드의 메인 컨테이너
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Hello React!</h1>
      </div>
      <Page1 /> {/* Page1 컴포넌트를 렌더링 */}
    </div>
  );
}

export default App;
