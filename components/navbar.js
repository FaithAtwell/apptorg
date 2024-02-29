// components/Navbar.js

import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = ({ loggedIn, userName }) => {
  return (
    <nav className={styles.navbar}>
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link href="/">APPTorg</Link></li>
          {loggedIn ? (
            <>
              <li><Link href="/Cal">Calendar</Link></li>
              <h1>Welcome,</h1> 
              <li> {userName}</li>
              <li><Link href="/settings">Settings</Link></li>
            </>
          ) : (
            <>
              <li><Link href="/loginpage">Login</Link></li>
              <li><Link href="/signuppage">Sign Up</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
