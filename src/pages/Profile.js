import { useSelector } from 'react-redux';
import { Car } from '../components/Car.js';
import Heading from '../components/common/Heading';

function Profile() {
  const user = useSelector((state) => state.auth.user);
  
  return (
    <div className="profile-container">
      <h1>Profile</h1>
      <Heading text="Header title 2" />
      {user ? (
        <div className="profile-info">
          <div className="profile-field">
            <label>Name:</label>
            <span>{user.name}</span>
          </div>
          <div className="profile-field">
            <label>Email:</label>
            <span>{user.email}</span>
          </div>
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
}

export default Profile;