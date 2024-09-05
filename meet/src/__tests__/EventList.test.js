import { render } from '@testing-library/react';
import EventList from '../EventList';
import mockData from '../mock-data';


describe('<EventList /> component', () => {
 
    let EventListComponent;
    beforeEach(() => {
      EventListComponent =  render(<EventList events={mockData} />);
    })
   
    test('has an element with "list" role', () => {
      expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
    });
   

});