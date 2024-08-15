const Button2 = () => {
  const onClick = (e) => (e.target.textContent = "Clicked!");
  const onDoubleClick = (e) => (e.target.textContent = "Double Clicked!");

  return (
    <>
      <button
        onClick={(e) => onClick(e)}
        onDoubleClick={(e) => onDoubleClick(e)}
      >
        Click me
      </button>
    </>
  );
};

export default Button2;
