
// Importing the CalendarComponent from the '../components/Calendar' file.
import CalendarComponent from '../components/Calendar';

// Defining a functional component called HomePage.

function LoginPage({ Component, pageProps }) {
    const loggedIn = true; // Replace with your logic to determine if the user is logged in
    const userName = 'John Doe'; // Replace with the user's name when logged in
    return (
      <div>
        <Navbar loggedIn={loggedIn} userName={userName} />
        <Component {...pageProps} />
      </div>
    );
  }

// Exporting the HomePage component so it can be imported and used in other files.
export default LoginPage;