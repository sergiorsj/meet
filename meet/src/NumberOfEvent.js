import React from 'react'
import { useState } from "react";

export default function NumberOfEvent({ seteventNumber,  eventNumber}) {

  const handleInputChanged = (event) => {
    const value = event.target.value;
    seteventNumber(value);
  }

  return (
    <div id="eventNumber">
      <input
        type="text"
        role="textbox"
        className="eventNumber"
        placeholder="Enter a number"
        value={eventNumber}
        onChange={handleInputChanged}
      />
    
    </div>
  )
}
