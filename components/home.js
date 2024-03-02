import Link from 'next/link';

const HomeComponent = () => {
  return (
    <div>
      <div>
        <h1>Welcome to Our Website</h1>
        <p>Explore our amazing features and services.</p>
      </div>
      <div>
        <h2>Get Started</h2>
        <p>If youre new here, create an account or log in to get started.</p>
        <div>
        <li><Link href="/loginpage">Login</Link></li>
        <li><Link href="/signuppage">Sign up</Link></li>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;


