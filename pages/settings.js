import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '@/components/navbar'; // Update the path as needed
import SettingsForm from '@/components/settingsC'; // Update the path as needed

const SettingsPage = () => {
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    // Add other profile fields here
  });

  useEffect(() => {
    // Fetch user data from the database when the component mounts
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get('/api/user'); // Endpoint to fetch user data
      setUserData(response.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleFormSubmit = async (formData) => {
    try {
      const response = await axios.put('/api/user', formData); // Endpoint to update user data
      console.log('Profile updated:', response.data);
      // Optionally, show a success message to the user
    } catch (error) {
      console.error('Error updating profile:', error);
      // Optionally, show an error message to the user
    }
  };

  return (
    <div>
      <Navbar loggedIn={true} userName={userData.username} /> {/* Assuming the user is logged in */}
      <div>
        <h1>Settings</h1>
        <SettingsForm userData={userData} onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
};

export default SettingsPage;
