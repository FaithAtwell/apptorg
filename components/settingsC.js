import { useState } from 'react';
import styles from '../styles/Settings.module.css';

const SettingsPage = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    // Add other profile fields here
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (formData) => {
    try {
      // Your form submission logic here
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div>
      <h1>Settings</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        handleFormSubmit(userData);
      }}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={userData.username}
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        {/* Add other profile fields here */}
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default SettingsPage;
