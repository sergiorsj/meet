import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import mockData, { getEvents } from '../mock-data';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');



defineFeature(feature, (test) => {
    test('An event element is collapsed by default', ({ given, when, then }) => {
        let AppComponent;
      given('user did not select an event', () => {
        AppComponent = render(<App />);
      });
  
      when('user views the events', async () => {
        const AppDOM = AppComponent.container.firstChild;
        const EventListDOM = AppDOM.querySelector('#event-list')
        await waitFor(() => {
            const EventListItems = within(EventListDOM).queryAllByRole('listitem');
            expect(EventListItems.length).toBe(30);
          });
        });
  
      then('events are collapsed', async () => {
        const AppDOM = AppComponent.container.firstChild;
        const details = AppDOM.querySelector('#details');
        expect(details).toBeNull();
      });
  
});

test('User can expand an event to see details', ({ given, when, then }) => {
    let AppComponent;
  given('user sees events', async () => {
    AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;
    const EventListDOM = AppDOM.querySelector('#event-list')
    await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole('listitem');
        expect(EventListItems.length).toBe(30);
      });
  });

  when('user clicks an event', async () => {

    const button = AppComponent.queryAllByText('Show details')[0];
    const user = userEvent.setup();
    await user.click(button);
    
    });

  then('event is expanded with details', async () => {
    const AppDOM = AppComponent.container.firstChild;
    const details = AppDOM.querySelector('#details');
    expect(details).toBeDefined();
  });

});
   
});
