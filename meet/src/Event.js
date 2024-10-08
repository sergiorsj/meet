import { useState } from "react";

const Event = ({event}) => {
  const [show, setShow] = useState(false);
  
    return (
      <>
      <li>{event.summary}</li>
      <li>{event.location}</li>
      <li>{event.created}</li>
     
      <button onClick={() => setShow(!show)}> {
        show ?  "Hide details" : "Show details"
      }</button>
      {
        show ? <div id="details">{event.description}</div> 
        : ''
      }
      </>
    );
  }
  
  export default Event;