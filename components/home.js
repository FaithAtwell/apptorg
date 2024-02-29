import Link from 'next/link'; // Import the Link component
import Navbar from '../components/navbar';

const HomeComponent = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1>Welcome to Our Website</h1>
        <p>Explore our amazing features and services.</p>
      </div>
      <div>
        <h2>Get Started</h2>
        <p>If you're new here, create an account or log in to get started.</p>
        <div>
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/signup">sign up</Link></li>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;


