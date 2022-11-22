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

Submit buttons use event listeners which take the values of the form fields and asigns them to the inner HTML of the CV elements.


## Plus Button

Buttons create the new HTML elements using Javascript.

## Print Button

Created a 'printable area' <div> which encompassed the CV output and used javascript to select this area to print when the user clicks a button, thus removing the input form from the final print.

## Save CV Button

Used local storage and an event listener to load data from local storage on page load.

## Styles

Added media queries to allow use with smaller width devices.
Added CSS to ensure the text formatting remains consistent.
Styled the CV output to give the effect of a paper page lifted off the webpage.