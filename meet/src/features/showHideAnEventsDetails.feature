Feature: Show/Hide Event Details

Scenario: An event element is collapsed by default
Given user did not select an event
When user views the events
Then events are collapsed
