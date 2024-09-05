
const Event = ({event}) => {
    return (
      <>
      <li>{event.summary}</li>
      <li>{event.location}</li>
      <li>{event.created}</li>
      <li>{event.description}</li>
      </>
    );
  }
  
  export default Event;