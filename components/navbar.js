import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const LoggedOutNavbar = () => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>APPTorg</Link>
      <ul className={styles.navLinks}>
        <li><Link href="/loginpage">Login</Link></li>
        <li><Link href="/signuppage">Sign Up</Link></li>
      </ul>
    </nav>
  </header>
);

const LoggedInNavbar = ({ userName, handleLogout }) => (
  <header className={styles.header}>
    <nav className={styles.nav}>
      <Link href="/" className={styles.logo}>APPTorg</Link>
      <ul className={styles.navLinks}>
        <li><Link href="/CalendarPage">Calendar</Link></li>
        <li><span>Welcome, {userName}</span></li>
      </ul>
    </nav>
  </header>
);

const Navbar = ({ loggedIn, userName, handleLogout }) => {
  return (
    <>
      {loggedIn ? (
        <LoggedInNavbar userName={userName} handleLogout={handleLogout} />
      ) : (
        <LoggedOutNavbar />
      )}
    </>
  );
};

export default Navbar;

