Feature: Filter events by city
 Scenario: When user hasn’t searched for a city, show upcoming events from all cities.
  Given user hasn’t searched for any city
  When the user opens the app
  Then the user should see the list of all upcoming events.

