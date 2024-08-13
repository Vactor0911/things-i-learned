import PropTypes from "prop-types";

const Student = (props) => {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Employed: {props.isEmployed ? "Yes" : "No"}</p>
    </div>
  );
};

// PropTypes = 컴포넌트에 전달된 props의 타입을 검사하는 데 사용
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isEmployed: PropTypes.bool,
};

// defaultProps = 컴포넌트에 전달된 props의 기본값을 설정
Student.defaultProps = {
  name: "Unknown",
  age: 0,
  isEmployed: false,
};

export default Student;
