import ProfilePicture from "./images/profile-png.png";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-picture-container">
        <img className="profile-picture" src={ProfilePicture} />
      </div>
      <br />
      <div className="profile-description">
        <h2>CHRISEN JOHN ABRAHAM GALANG</h2>
        <h3>SOFTWARE ENGINEER</h3>
      </div>
    </div>
  );
};

export default Profile;
