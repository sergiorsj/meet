import { useState } from "react";

const Event = ({event}) => {
  const [show, setShow] = useState(false);
  
    return (
      <>
      <li>{event.summary}</li>
      <li>{event.location}</li>
      <li>{event.created}</li>
      <li>{event.description}</li>
      <button> {
        show ?  "Hide" : "Show"
      }</button>
      </>
    );
  }
  
  export default Event;