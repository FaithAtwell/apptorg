import Navbar from '../components/navbar.js';
import Login from '../components/login.js';

const LoginPage = () => {
  const loggedIn = true; 
  const userName = "John Doe"; 
  
  return (
    <div>
      <Navbar loggedIn={loggedIn} userName={userName} />
      <Login />
    </div>
  );
};

export default LoginPage;
