# everyLIFE
Test File for everyLIFE

The below scenario is covered by the journey in this test. I would expect unit tests written for checks on field length, Special Characters and null values. I would probably also write a script test the required or mandatory fields on the form (Checking that if they are missing an error is triggered) 




Scenario: Add a New Care Receiver

Given I have logged into the PASS Genius website as a care manager

And I have clicked on the "Residents" tab

And I have clicked the Add new resident button

And I have selected "" for the resident Title on the add resident page

And I have entered "" for the resident First Name on the add resident page

And I have entered "" for the resident Surname on the add resident page

And I have entered "" for the Known As field on the add resident page

And I have selected "" from Sex on the add resident page

And I have selected "" for the Dob on the add resident page

And I have entered "" for the resident Social Services Number on the add resident page

And I have entered "" for the resident Weight on the add resident page

And I have entered "" for the resident Height on the add resident page

And I have entered "" for the resident Start Date on the add resident page

And I have entered "" for the resident Address 1 on the add resident page

And I have entered "" for the resident Address 2 on the add resident page

And I have entered "" for the resident City on the add resident page

And I have entered "" for the resident County on the add resident page

And I have entered "" for the resident Postcode on the add resident page

And I have entered "" for the resident Country on the add resident page

And I have entered "" for the resident Tel on the add resident page

And I have entered "" for the resident Email on the add resident page

And I have entered "" for the resident Mobile on the add resident page

And I have entered "" for the resident Access Details on the add resident page

And I have entered "" for the resident Allergies on the add resident page

And I have entered "" for the resident Next Of Kin on the add resident page

And I have entered "" for the resident Next Of Kin Tel on the add resident page

And I have entered "" for the resident Doctor on the add resident page

And I have entered "" for the resident Surgery on the add resident page

And I have entered "" for the resident Surgery Tel on the add resident page

And I have clicked the Save button on the add resident page

And I have clicked on the residents "Details" tab

And I have set the Status to Active on the resident details page with Reason ""

And I have clicked on the "Residents" tab

And I have searched for the resident ""

And I have clicked on the resident ""

When I have clicked on the residents "Details" tab

Then the resident details page displays the correct data for the new resident
