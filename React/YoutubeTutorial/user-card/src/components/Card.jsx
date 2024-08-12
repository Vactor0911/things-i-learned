import profileImage from "../assets/profileImage.png";

const Card = () => {
  return (
    <div className="card">
      <img className="card-image" src={profileImage} alt="profile-image"></img>
      <h2 className="card-title">Vactor0911</h2>
      <p className="card-text">🔥 Studying Hard 🔥</p>
    </div>
  );
};

export default Card;
