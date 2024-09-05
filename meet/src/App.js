import React from 'react';
import logo from './logo.svg';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import mockData from './mock-data';

function App() {
  return (
    <div className="App">
 <CitySearch />
 <EventList events={mockData} />
    </div>
  );
}

export default App;
