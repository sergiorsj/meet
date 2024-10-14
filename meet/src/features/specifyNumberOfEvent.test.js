import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import mockData, { getEvents } from '../mock-data';
import userEvent from '@testing-library/user-event';

const feature = loadFeature('./src/features/specifyNumberOfEvent.feature');



defineFeature(feature, (test) => {
    test('User did not specify number of event', ({ given, when, then }) => {
        let AppComponent;
      given('user opens the app', () => {
        AppComponent = render(<App />);
      });
  
      when('user did not specify number of event', async () => {
        const AppDOM = AppComponent.container.firstChild;
        const EventListDOM = AppDOM.querySelector('#number-of-events')
        await waitFor(() => {
            const EventListItems = within(EventListDOM).queryAllByRole('listitem');
            expect(EventListItems).toBeDefined();
          });
        });
  
      then('all events are displayed', async () => {
        const AppDOM = AppComponent.container.firstChild;
        const details = AppDOM.querySelector('#details');
        expect(details).toBeNull();
      });
  
});





   
});
