### CV Builder Read Me

This file will document my plans and thought processes as I build this app.

## Planning

Build a low fidelity wireframe model.

Style for page is based on this website: https://www.livecareer.co.uk/build-cv/section/cntc

Outline project:
-Create basic form structure in HTML, making sure to separate sections with <div> and giving appropriate class and id names.
-Take a small section to test for for future sections.
-More entries: Add plus button to certain sections to allow user to add additional information to the form.
-Add print button.
-Save CV: Add a button that uses localStorage to save previous CV.
-Style the CV using CSS.
-Custom section?

## Form Structure

-Build the basic structure of the input form and display sections in HTML.
-Use only a small section of the CV at first. We can use this to test the rest of our functionality as we build it, then add more to this forma once initial bugs and usability have been ironed out.
-E.G.:
First Name
Last Name
Email Address
Phone Number
-Add JavaScript to enable the results of our form to display.


## Plus Button

Explore options in Javascript.
First attempted .clone(true).
Decided instead to create new elements.
Many searches suggested using jquery. However I have decided not to use any libraries in order to show my understanding of all the concepts in this project.

Current bugs:
-addNewEmailInput button does not work if it is placed within the form.
-additional email inputs do not display if there is text in the original field. (Fixed).
-

## Print Button

Created a 'printable area' <div> which encompassed the CV output and used javascript to select this area to print when the user clicks a button, thus removing the input form from the final print.

## Save CV Button

Am currently investigating localStorage usage. Trying to find a way to save lots of information without having to write several Javascript lines and functions for every user input. Will persevere with this method if necessary.

Currently all objects retrieve from local storage on change and on load. Will need to update this so that it works with a button.

Updates to this file Needed!

Current bugs:
-More than one additional email or phone number is not saved correctly to local storage and displays as undefined on page load.

For restoring user info, could remove page load functionality and instead use a button. 

## Styles

