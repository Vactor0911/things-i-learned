import UserGreeting from "./components/UserGreeting";

function App() {
  return (
    <>
      <UserGreeting isLoggedIn={true} userName="John" />
    </>
  );
}

export default App;
