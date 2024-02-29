// pages/loginpage.js

import Navbar from '../components/navbar';
import Login from '../components/login';

const LoginPage = () => {
  const loggedIn = false; // Replace with your logic to determine if the user is logged in
  const userName = ''; // Replace with the user's name when logged in

  return (
    <div>
      <Navbar loggedIn={loggedIn} userName={userName} />
      <Login />
    </div>
  );
};

export default LoginPage;