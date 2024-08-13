//import styles from "./Button.module.css"; | Module CSS styles

const Button = () => {
  // External CSS styles
  //return <button className="button">Click me</button>;

  // Module CSS styles
  //return <button className={styles.button}>Click me</button>;

  // Inline CSS styles
  const style = {
    background: "hsl(200, 100%, 50%)",
    color: "white",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  };

  return <button style={style}>Click me</button>;
};

export default Button;
