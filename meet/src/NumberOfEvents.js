import React from 'react'
import { useState } from "react";

export default function NumberOfEvent({ allLocations }) {

  const [eventNumber, seteventNumber] = useState("");


  const handleInputChanged = (event) => {
    const value = event.target.value;
    seteventNumber(value);
  }

  return (
    <div id="city-search">
      <input
        type="text"
        className="eventNumber"
        placeholder="Enter a number"
        value={eventNumber}
        onChange={handleInputChanged}
      />
    
    </div>
  )
}
