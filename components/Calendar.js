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
//to adress verticallity issues
  const handleClearEvent = eventId => {
    setSelectedEvents(selectedEvents.filter(event => event.id !== eventId));
  };

  const handleClearAllEvents = () => {
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
          style={{ margin: '50px', height: 800 }} // Increased height
          onSelectEvent={toggleEventSelection}
        />
      </div>
      <div style={{ flex: 1, marginLeft: 20 }}>
        <h2>Selected Events</h2>
        <button onClick={handleClearAllEvents}>Clear All Events</button>
        {selectedEvents.map(event => (
          <div key={event.id} style={{ marginBottom: 20 }}>
            <h3>{event.title}</h3>
            <p><strong>Start:</strong> {moment(event.start).format('LLL')}</p>
            <p><strong>End:</strong> {moment(event.end).format('LLL')}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <p><strong>Description:</strong> {event.description}</p>
            <button onClick={() => handleClearEvent(event.id)}>Clear Event</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarComponent;