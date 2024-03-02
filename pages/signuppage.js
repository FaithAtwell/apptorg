import Navbar from '@/components/navbar';
import Signup from '@/components/signup';

// Defining a functional component called HomePage.
const SignupPage = () => {
  // Returning JSX, which represents the structure of the component.
  // This component renders a div containing an h1 element and the CalendarComponent.
  return (
    <div>
      <Navbar />
      <Signup />
    </div>
  );
};

// Exporting the HomePage component so it can be imported and used in other files.
export default SignupPage;