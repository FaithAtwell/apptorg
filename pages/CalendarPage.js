import Navbar from '@/components/navbar';
import CalendarComponent from '../components/Calendar';

const Cal = () => {
  return (
    <div>
      <Navbar />
      <h1>My Calendar</h1>
      {/* Rendering the CalendarComponent */}
      <CalendarComponent />
    </div>
  );
};

export default Cal;

