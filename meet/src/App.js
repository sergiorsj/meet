import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import mockData from './mock-data';
import NumberOfEvent from './NumberOfEvent';

function App() {
  const [eventNumber, seteventNumber] = useState("");
  return (
    <div className="App">
      <NumberOfEvent seteventNumber={seteventNumber} eventNumber={eventNumber} />
 <CitySearch />
 <EventList events={mockData} />
    </div>
  );
}

export default App;
