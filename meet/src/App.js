import React from 'react';
import logo from './logo.svg';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import mockData from './mock-data';
import NumberOfEvent from './NumberOfEvents';

function App() {
  return (
    <div className="App">
      <NumberOfEvent />
 <CitySearch />
 <EventList events={mockData} />
    </div>
  );
}

export default App;
