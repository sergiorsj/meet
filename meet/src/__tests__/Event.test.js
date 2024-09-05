import { render } from '@testing-library/react';
import Event from '../Event';
import mockData from '../mock-data';


describe('<Event /> component', () => {

    let EventComponent;
    beforeEach(async () => {
      EventComponent = render(<Event event={mockData[0]} />);
    })
   
    test('has an element with "list" role', () => {
      expect(EventComponent.queryByText(mockData[0].summary)).toBeInTheDocument();
    });

    test('has an element with "list" role', () => {
        expect(EventComponent.queryByText(mockData[0].location)).toBeInTheDocument();
    });

    test('has an element with "list" role', () => {
        expect(EventComponent.queryByText(mockData[0].description)).toBeInTheDocument;
    });

});