const Button = () => {
  let count = 0;

  const handleClick = (message) => {
    count++;
    console.log(`Message: ${message}\nCount: ${count}`);
  };

  return (
    <>
      <button onClick={() => handleClick("Hello World!")}>Click me</button>
    </>
  );
};

export default Button;
