import { render } from '@testing-library/react';
import NumberOfEvent from '../NumberOfEvent';


describe('<NumberOfEvent /> component', () => {
  let NumberOfEventDOM;
  beforeEach(() => {
    NumberOfEventDOM = render(<NumberOfEvent eventNumber="10" seteventNumber={()=>{}} />);
  })

  test('renders list of events', () => {
    expect(NumberOfEventDOM.queryByRole('textbox')).toHaveValue("10");
  });

});