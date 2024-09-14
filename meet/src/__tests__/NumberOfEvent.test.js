import { render } from '@testing-library/react';
import NumberOfEvent from '../NumberOfEvent';
import userEvent from '@testing-library/user-event';


describe('<NumberOfEvent /> component', () => {
  let NumberOfEventDOM;
  beforeEach(() => {
    NumberOfEventDOM = render(<NumberOfEvent eventNumber="10" seteventNumber={()=>{}} />);
  })

  test('renders EVENT NUMBER', () => {
    expect(NumberOfEventDOM.queryByRole('textbox')).toHaveValue("10");
  });

  test('conatins field', () => {
    expect(NumberOfEventDOM.queryByRole('textbox')).toBeInTheDocument()
  });

  test('Changes field', async () => {
    const NumberOfEvent = NumberOfEventDOM.queryByRole('textbox');
    const user = userEvent.setup();
    await user.type(NumberOfEvent, "10");
    expect(NumberOfEvent).toHaveValue("10");
  });

});