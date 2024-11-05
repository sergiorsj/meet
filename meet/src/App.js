import { useEffect, useState } from "react";
import CitySearch from "./CitySearch";
import EventList from "./EventList";
import NumberOfEvent from "./NumberOfEvent";
import { getEvents, extractLocations } from "./api";
import "./App.css";
import mockData from "./mock-data";
import { InfoAlert, WarningAlert } from './Alert';
import { ErrorAlert } from './Alert';
import ScatteredPlotsChart from "./ScatterPlotCharts";
import ScatterPlotCharts from "./ScatterPlotCharts";
import PieChartComponent from "./PieChartComponent";


const App = () => {
  const [allLocations, setAllLocations] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [events, setEvents] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("")
  const [errorAlert, setErrorAlert] = useState("")
  const [warningAlert, setWarningAlert] = useState("")

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
      if (navigator.onLine) {
        setWarningAlert("")
      } else {
        setWarningAlert("You're offline! So data isn't updated currently.")
      }
      fetchData();
    }, [currentCity, currentNOE]);


  return (
    <div className="App">
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
        {errorAlert.length ? <InfoAlert text={errorAlert} /> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
      </div>
      <div>
      <ScatterPlotCharts allLocations={allLocations} events={events} />
      <PieChartComponent events={events} />
      </div>
      <CitySearch setInfoAlert={setInfoAlert} allLocations={allLocations} setCurrentCity={setCurrentCity} />
      <NumberOfEvent setCurrentNOE={setCurrentNOE} setErrorAlert={setErrorAlert} />
      <EventList events={events} />
    </div>
  );
};

export default App;