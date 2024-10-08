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

    // test('User should see a list of suggestions when they search for a city.', ({ given, when, then }) => {
    //     let AppComponent, CitySearchDOM;
    //     given('the main page is open', () => {
    //         AppComponent = render(<App />);
    //     });
    
    //     when('user starts typing in the city textbox', async () => {
    //         const user = userEvent.setup();
    //         const AppDOM = AppComponent.container.firstChild;
    //         CitySearchDOM = AppDOM.querySelector('#city-search');
    //         const citySearchInput = within(CitySearchDOM).queryByRole('textbox');  
    //         await user.type(citySearchInput, "Berlin");
    //     });
    
    //     then('the user should recieve a list of cities (suggestions) that match what they’ve typed', () => {
    //         const suggestionListItems = within(CitySearchDOM).queryAllByRole('listitem'); 
    //         expect(suggestionListItems).toHaveLength(2);
    //     });
    //   });



    //   test('User can select a city from the suggested list.', ({ given, and, when, then }) => {
    //     let AppComponent;
    // let AppDOM; 
    // let CitySearchDOM;
    // let citySearchInput;
    // let suggestionListItems;
    //     given('user was typing “Berlin” in the city textbox', async () => {
    //         AppComponent = render(<App />);
    //         const user = userEvent.setup();
    //         AppDOM = AppComponent.container.firstChild;
    //         CitySearchDOM = AppDOM.querySelector('#city-search');
    //         citySearchInput = within(CitySearchDOM).queryByRole('textbox');  
    //         await user.type(citySearchInput, "Berlin");
    //     });
    
    //     and('the list of suggested cities is showing', () => {
    //         suggestionListItems = within(CitySearchDOM).queryAllByRole('listitem'); 
    //         expect(suggestionListItems).toHaveLength(2);
    //     });
    
    //     when('the user selects a city (e.g., “Berlin, Germany”) from the list', async () => {
    //         const user = userEvent.setup();
    //         await user.click(suggestionListItems[0]);
    //     });
    
    //     then('their city should be changed to that city (i.e., “Berlin, Germany”)', async () => {
    //         expect(citySearchInput.value).toBe('Berlin');
    //     });
    
    //     and('the user should receive a list of upcoming events in that city', async () => {
    //         const EventListDOM = AppDOM.querySelector('#event-list');
    //         const EventListItems = within(EventListDOM).queryAllByRole('listitem');      
    //         expect(EventListItems).toHaveLength(30);
    //     });
    //   });

});
