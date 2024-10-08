Feature: Show/Hide Event Details

Scenario: An event element is collapsed by default
Given user did not select an event
When user views the events
Then events are collapsed

Scenario: User can expand an event to see details
Given user sees events
When user clicks an event
Then event is expanded with details