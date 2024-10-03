import { loadFeature, defineFeature } from 'jest-cucumber';
import { render, within, waitFor } from '@testing-library/react';
import App from '../App';
import { getEvents } from '../mock-data';

const feature = loadFeature('./src/features/filterEventsByCity.feature');

defineFeature(feature, (test) => {
    test('when user hasn’t searched for a city, show upcoming events from all cities.', ({ given, when, then }) => {
        let AppComponent;
      given('user hasn’t searched for any city', () => {
        AppComponent = render(<App />);
      });
  
      when('the user opens the app', async () => {
        const AppDOM = AppComponent.container.firstChild;
        const EventListDOM = AppDOM.querySelector('#event-list');
  
        await waitFor(() => {
          const EventListItems = within(EventListDOM).queryAllByRole('listitem');
          expect(EventListItems.length).toBe(30);
        });
      });
  
      then('the user should see the list of all upcoming events.', async () => {
        const AppDOM = AppComponent.container.firstChild;
        const EventListDOM = AppDOM.querySelector('#event-list');
  
        await waitFor(() => {
          const EventListItems = within(EventListDOM).queryAllByRole('listitem');
          expect(EventListItems.length).toBe(30);
        });
      });
    });
  

});
