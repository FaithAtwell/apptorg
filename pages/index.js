
import Link from 'next/link';
import Navbar from '../components/navbar';
import HomeComponent from '../components/home'; // Updated import statement


const HomePage = () => {
  return (
    <div>
      <HomeComponent /> {/* Use the renamed component */}
    </div>
  );
};

export default HomePage;
