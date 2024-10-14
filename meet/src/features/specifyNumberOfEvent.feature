Feature: Specify Number of event

Scenario: User did not specify number of event
Given user opens the app
When user did not specify number of event
Then all events are displayed

Scenario: User specified number of event
Given user opens the app
When user specifies number of event
Then that specified number of events are displayed