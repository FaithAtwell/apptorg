// components/Navbar.js

import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = ({ loggedIn, userName }) => {
  return (
    <nav className={styles.navbar}>
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link href="/">APPTorg</Link></li>
          <span></span>
          {loggedIn ? (
            <>
              <li>Welcome, {userName}</li>
              <li><Link href="/account">Account</Link></li>
              <li><Link href="/settings">Settings</Link></li>
            </>
          ) : (
            <>
              <li><Link href="/loginPage">Login</Link></li>
              <li><Link href="/signup">Sign Up</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
