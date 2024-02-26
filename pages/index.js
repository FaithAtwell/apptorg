
// Importing the CalendarComponent from the '../components/Calendar' file.
import CalendarComponent from '../components/Calendar';

// Defining a functional component called HomePage.
const HomePage = () => {
  // Returning JSX, which represents the structure of the component.
  // This component renders a div containing an h1 element and the CalendarComponent.
  return (
    <div>
      <h1>My Calendar</h1>
      {/* Rendering the CalendarComponent */}
      <CalendarComponent />
    </div>
  );
};

// Exporting the HomePage component so it can be imported and used in other files.
export default HomePage;

