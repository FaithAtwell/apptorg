// // Importing necessary modules and components from installed packages and libraries.
// import React, { useEffect, useState } from 'react'; // Importing React, useEffect, and useState hooks from the 'react' package.
// import cheerio from 'cheerio'; // Importing the cheerio library for parsing HTML.
// import moment from 'moment'; // Importing the moment library for date/time manipulation.
// import { Calendar, momentLocalizer } from 'react-big-calendar'; // Importing Calendar and momentLocalizer components from 'react-big-calendar'.
// import 'react-big-calendar/lib/css/react-big-calendar.css'; // Importing the CSS file for the react-big-calendar component.

// // Setting up moment as the localizer for react-big-calendar.
// const localizer = momentLocalizer(moment);

// // Defining the CalendarComponent functional component.
// const CalendarComponent = () => {
//   // Declaring a state variable 'events' and a function 'setEvents' to update it.
//   const [events, setEvents] = useState([]);

//   // useEffect hook to fetch calendar data when the component mounts.
//   useEffect(() => {
//     // Fetching the calendar data from 'your_calendar_data.html' file.
//     fetch('/your_calendar_data.html')
//       .then(response => response.text()) // Converting the response to text format.
//       .then(data => {
//         // Parsing the HTML data and extracting events using the parseCalendarData function.
//         const events = parseCalendarData(data);
//         // Updating the events state variable with the extracted events.
//         setEvents(events);
//       })
//       .catch(error => console.error('Error fetching calendar data:', error)); // Handling any errors that occur during fetching.
//   }, []); // Empty dependency array to ensure the effect runs only once when the component mounts.

//   // Function to parse HTML calendar data and extract events.
//   const parseCalendarData = htmlData => {
//     // Loading the HTML data using cheerio.
//     const $ = cheerio.load(htmlData);
//     const events = []; // Array to store extracted events.

//     // Iterating over each table row and extracting event details.
//     $('table tbody tr').each((index, element) => {
//       const columns = $(element).find('td'); // Finding all table cells within the current row.
//       const subject = $(columns[0]).text().trim(); // Extracting the subject from the first cell.
//       const startTime = moment($(columns[1]).text().trim(), 'MM/DD/YYYY h:mm a').toDate(); // Extracting and parsing the start time from the second cell.
//       const endTime = moment($(columns[2]).text().trim(), 'MM/DD/YYYY h:mm a').toDate(); // Extracting and parsing the end time from the third cell.
//       const location = $(columns[3]).text().trim(); // Extracting the location from the fourth cell.
//       const description = $(columns[4]).text().trim(); // Extracting the description from the fifth cell.

//       // Creating an event object with extracted details and pushing it to the events array.
//       events.push({
//         title: subject,
//         start: startTime,
//         end: endTime,
//         location,
//         description,
//       });
//     });

//     return events; // Returning the array of extracted events.
//   };

//   // Rendering the Calendar component with the extracted events.
//   return (
//     <div style={{ height: 500 }}>
//       <Calendar
//         localizer={localizer}
//         events={events}
//         startAccessor="start"
//         endAccessor="end"
//         style={{ margin: '50px' }}
//       />
//     </div>
//   );
// };

// export default CalendarComponent; // Exporting the CalendarComponent for use in other 


//added tskschedualr


// import React, { useEffect, useState } from 'react';
// import cheerio from 'cheerio';
// import moment from 'moment';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// const localizer = momentLocalizer(moment);

// const CalendarComponent = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedDayEvents, setSelectedDayEvents] = useState([]);

//   useEffect(() => {
//     // Fetch and parse the HTML data
//     fetch('/your_calendar_data.html')
//       .then(response => response.text())
//       .then(data => {
//         // Parse the HTML data and extract events
//         const events = parseCalendarData(data);
//         setEvents(events);
//       })
//       .catch(error => console.error('Error fetching calendar data:', error));
//   }, []);

//   const parseCalendarData = htmlData => {
//     const $ = cheerio.load(htmlData);
//     const events = [];

//     // Iterate over each table row and extract event details
//     $('table tbody tr').each((index, element) => {
//       const columns = $(element).find('td');
//       const subject = $(columns[0]).text().trim();
//       const startTime = moment($(columns[1]).text().trim(), 'MM/DD/YYYY h:mm a').toDate();
//       const endTime = moment($(columns[2]).text().trim(), 'MM/DD/YYYY h:mm a').toDate();
//       const location = $(columns[3]).text().trim();
//       const description = $(columns[4]).text().trim();

//       events.push({
//         title: subject,
//         start: startTime,
//         end: endTime,
//         location,
//         description,
//       });
//     });

//     return events;
//   };

//   const handleDayClick = date => {
//     const selectedDate = moment(date).startOf('day');
//     const filteredEvents = events.filter(event => {
//       const eventDate = moment(event.start).startOf('day');
//       return eventDate.isSame(selectedDate);
//     });
//     setSelectedDayEvents(filteredEvents);
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       <div style={{ flex: 1 }}>
//         <Calendar
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           style={{ margin: '50px' }}
//           onSelectEvent={event => console.log(event)}
//           onSelectSlot={slotInfo => console.log(slotInfo)}
//           onSelectDay={handleDayClick}
//         />
//       </div>
//       <div style={{ flex: 1, marginLeft: 20 }}>
//         <h2>Selected Day's Events</h2>
//         {selectedDayEvents.map((event, index) => (
//           <div key={index}>
//             <h3>{event.title}</h3>
//             <p><strong>Start:</strong> {moment(event.start).format('LLL')}</p>
//             <p><strong>End:</strong> {moment(event.end).format('LLL')}</p>
//             <p><strong>Location:</strong> {event.location}</p>
//             <p><strong>Description:</strong> {event.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CalendarComponent;


// import React, { useEffect, useState } from 'react';
// import cheerio from 'cheerio';
// import moment from 'moment';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// const localizer = momentLocalizer(moment);

// const CalendarComponent = () => {
//   const [events, setEvents] = useState([]);
//   const [selectedDayEvents, setSelectedDayEvents] = useState([]);

//   useEffect(() => {
//     // Fetch and parse the HTML data
//     fetch('/your_calendar_data.html')
//       .then(response => response.text())
//       .then(data => {
//         // Parse the HTML data and extract events
//         const events = parseCalendarData(data);
//         setEvents(events);
//       })
//       .catch(error => console.error('Error fetching calendar data:', error));
//   }, []);

//   const parseCalendarData = htmlData => {
//     const $ = cheerio.load(htmlData);
//     const events = [];

//     // Iterate over each table row and extract event details
//     $('table tbody tr').each((index, element) => {
//       const columns = $(element).find('td');
//       const subject = $(columns[0]).text().trim();
//       const startTime = moment($(columns[1]).text().trim(), 'MM/DD/YYYY h:mm a').toDate();
//       const endTime = moment($(columns[2]).text().trim(), 'MM/DD/YYYY h:mm a').toDate();
//       const location = $(columns[3]).text().trim();
//       const description = $(columns[4]).text().trim();

//       events.push({
//         title: subject,
//         start: startTime,
//         end: endTime,
//         location,
//         description,
//       });
//     });

//     return events;
//   };

//   const handleDayClick = date => {
//     const selectedDate = moment(date).startOf('day');
//     const filteredEvents = events.filter(event => {
//       const eventDate = moment(event.start).startOf('day');
//       return eventDate.isSame(selectedDate);
//     });
//     setSelectedDayEvents(filteredEvents);
//   };

//   const handleEventClick = event => {
//     setSelectedDayEvents([event]);
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       <div style={{ flex: 1 }}>
//         <Calendar
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           style={{ margin: '50px' }}
//           onSelectEvent={handleEventClick}
//           onSelectSlot={slotInfo => console.log(slotInfo)}
//           onSelectDay={handleDayClick}
//         />
//       </div>
//       <div style={{ flex: 1, marginLeft: 20 }}>
//         <h2>Selected Day's Events</h2>
//         {selectedDayEvents.map((event, index) => (
//           <div key={index}>
//             <h3>{event.title}</h3>
//             <p><strong>Start:</strong> {moment(event.start).format('LLL')}</p>
//             <p><strong>End:</strong> {moment(event.end).format('LLL')}</p>
//             <p><strong>Location:</strong> {event.location}</p>
//             <p><strong>Description:</strong> {event.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CalendarComponent;


// added individual clear events buttons

import React, { useEffect, useState } from 'react';
import cheerio from 'cheerio';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvents, setSelectedEvents] = useState([]);

  useEffect(() => {
    // Fetch and parse the HTML data
    fetch('/your_calendar_data.html')
      .then(response => response.text())
      .then(data => {
        // Parse the HTML data and extract events
        const events = parseCalendarData(data);
        setEvents(events);
      })
      .catch(error => console.error('Error fetching calendar data:', error));
  }, []);

  const parseCalendarData = htmlData => {
    const $ = cheerio.load(htmlData);
    const events = [];

    // Iterate over each table row and extract event details
    $('table tbody tr').each((index, element) => {
      const columns = $(element).find('td');
      const subject = $(columns[0]).text().trim();
      const startTime = moment($(columns[1]).text().trim(), 'MM/DD/YYYY h:mm a').toDate();
      const endTime = moment($(columns[2]).text().trim(), 'MM/DD/YYYY h:mm a').toDate();
      const location = $(columns[3]).text().trim();
      const description = $(columns[4]).text().trim();

      events.push({
        id: index,
        title: subject,
        start: startTime,
        end: endTime,
        location,
        description,
      });
    });

    return events;
  };

  const toggleEventSelection = event => {
    const isSelected = selectedEvents.some(selectedEvent => selectedEvent.id === event.id);
    if (isSelected) {
      // Deselect the event
      setSelectedEvents(selectedEvents.filter(selectedEvent => selectedEvent.id !== event.id));
    } else {
      // Select the event
      setSelectedEvents([...selectedEvents, event]);
    }
  };

  const handleClearEvents = () => {
    setSelectedEvents([]);
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ margin: '50px' }}
          onSelectEvent={toggleEventSelection}
        />
      </div>
      <div style={{ flex: 1, marginLeft: 20 }}>
        <h2>Selected Events</h2>
        <button onClick={handleClearEvents}>Clear Events</button>
        {selectedEvents.map(event => (
          <div key={event.id}>
            <h3>{event.title}</h3>
            <p><strong>Start:</strong> {moment(event.start).format('LLL')}</p>
            <p><strong>End:</strong> {moment(event.end).format('LLL')}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Description:</strong> {event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarComponent;