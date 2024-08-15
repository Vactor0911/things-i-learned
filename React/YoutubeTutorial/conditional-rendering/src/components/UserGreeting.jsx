import PropTypes from "prop-types";

const UserGreeting = (props) => {
  if (props.isLoggedIn) {
    return <h2 className="welcome-message">Welcome {props.userName}!</h2>;
  }
  return <h2 className="login-prompt">Please log in to continue!</h2>;
};

UserGreeting.propTypes = {
  isLoggedIn: PropTypes.bool,
  userName: PropTypes.string,
};

UserGreeting.defaultProps = {
  isLoggedIn: false,
  userName: "Guest",
};

export default UserGreeting;
