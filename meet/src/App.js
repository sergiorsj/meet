import { useEffect, useState } from "react";
import CitySearch from "./CitySearch";
import EventList from "./EventList";
import NumberOfEvent from "./NumberOfEvent";
import { getEvents, extractLocations } from "./api";
import "./App.css";
import mockData from "./mock-data";
import { InfoAlert } from './Alert';


const App = () => {
  const [allLocations, setAllLocations] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [events, setEvents] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("")

  const fetchData = async () => {
    const allEvents = mockData;
    const filteredEvents =
      currentCity === "See all cities"
        ? allEvents
        : allEvents.filter((event) => event.location === currentCity);
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  };

  useEffect(() => {
    fetchData();
  }, [currentCity]);

  return (
    <div className="App">
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
      </div>
      <CitySearch setInfoAlert={setInfoAlert} allLocations={allLocations} setCurrentCity={setCurrentCity} />
      <NumberOfEvent setCurrentNOE={setCurrentNOE} />
      <EventList events={events} />
    </div>
  );
};

export default App;