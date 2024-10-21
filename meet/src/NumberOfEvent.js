const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const handleInputChanged = (event) => {
      const value = event.target.value;
      if ( !value || isNaN(value)){
        setErrorAlert("Invalid input for NumberofEvents")
      }
      else {
        setErrorAlert("")
      }
  };

  return (
      <div id="number-of-events">
          <label>
              Number of Events:
          <input 
          type="text"
          defaultValue="32"
          onChange={handleInputChanged}
          data-testid="numberOfEventsInput"
          />
          </label>
      </div>
  )
};

export default NumberOfEvents;