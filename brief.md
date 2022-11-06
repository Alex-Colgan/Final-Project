### Final Project

Project week 
Outline:
Build projects using all the skills covered in the course so far.
Pick one of 4 projects:
London Underground app 
Description: very challenging. This will involve navigating complex data, with a lightweight UI (user interface)
 
CV Builder 
Description: medium challenge, a lot of value for a little project, good practice of events.
 
Secondhand DVD e-commerce site 
Description: A classic project concept with lots of room to add design frills - or not, and focus on manipulating JSON, if you prefer! Medium challenge.a
 
Interval timer app
 
Description: frontend focus, low-to-medium challenge, good practice of building small, mobile friendly apps w/ lots of incremental additions.







Projects Detail:
Pick one of 4 projects.

Pick a number of tasks you would like to commit to. You can always take on more tasks later, vote as a team which tasks to take on for the next week.

Each project can be built in technologies of your choosing:

- would you like to use React or plain HTML/JS?
- would you like to use a CSS library?
- would you like to use a component library?

Planning:

What stages will be involved?
In addition to coding, you'll likely want to do some wireframing, assets gathering, researching packages, and maybe even extra planning…
How will you split up your tasks? By responsibility (e.g. building the HTML/CSS/JS for a button that submits a form), or technology (e.g. one person builds the HTML, other people build the CSS and JS)?
Who will collaborate on which tasks?

























Project 1: London Underground app

**Design work:** low

**Data manipulation:** high

**Event handling:** low

**Overall complexity: high**

This will involve navigating complex data, with a lightweight UI.

Example data:

```js
    const stations = [{
      "name": "Highbury & Islington",
      "lines": ["Victoria"],
      "zones": [2]
    },
    {
        "name": "King's Cross St. Pancras",
        "lines": ["Metropolitan", "Northern", "Piccadilly", "Circle", "Victoria", "Hammersmith & City"],
        "zones": [1]
    },
    {
      "name": "Oxford Circus",
      "lines": ["Central", "Bakerloo", "Victoria"],
      "zones": [1]
    },
    {
      "name": "Debden",
      "lines": ["Central"],
      "zones": [6]
    },
    {
        "name": "Paddington",
        "lines": ["Hammersmith & City", "District", "Circle", "Bakerloo"],
        "zones": [1]
    }]

const lines = {
  "Victoria": ["Oxford Circus","King's Cross St. Pancras","Highbury & Islington"],
  "Metropolitan": ["King's Cross St. Pancras"],
  "Northern": ["King's Cross St. Pancras"],
  "Piccadilly": ["King's Cross St. Pancras"],
  "Circle": ["Paddington","King's Cross St. Pancras"],
  "Central": ["Oxford Circus"],
  "Bakerloo": ["Paddington","Oxford Circus"],
  "Hammersmith & City": ["Paddington","King's Cross St. Pancras"],
  "District": ["Paddington"]
}
```

### Tasks

**Task 1: Direct lines to travel from A to B**

Build a website with two dropdowns and a submit button. Calculate if there is a line route to their destination.

For example, using the sample data above:

- You can get from Oxford Circus to Paddington via the Bakerloo line.
- You cannot travel directly from Highbury & Islington to Paddington.

Tell the user if there is a line, and if so which line, that will take them directly from A to B. 

**Task 2: Add a visual depiction of the user's journey**

Make a key with a colour for each train line.

When the user has selected a journey, display their journey with a line from one station to the next in the colour of that line.

**Task 3: Line changes to travel from A to B on non-direct routes**

For example, using the sample data above:

- You can get from Highbury & Islington to Paddington via the Victoria line, change at King's Cross St. Pancras station
- You can get from Oxford Circus to Paddington via the Bakerloo line.

Output at least one station that the user will need to take to get to their target destination.

This must be shown in the visual depiction of the user's journey.

**Task 4: Travel time**

Assume that travelling from one station to another station in the same zone takes 4 minutes.
Assume that travelling up or down one zone will take an additional 3 minutes.

Calculate how long the user's journey will be. For example, using the sample data above:

- You can get from Highbury & Islington to Paddington in 11 minutes:
  - Highbury & Islington (zone 2) to King's Cross St. Pancras (zone 1) takes 7 minutes
  - King's Cross St. Pancras (zone 1) station to Paddington (zone 1) takes another 4 minutes
  - total travel time 11 minutes
- You can get from Oxford Circus (zone 1) to Paddington (zone 1) in 4 minutes

If a station has multiple zones, pick the first one in the array.

**Task 5: Travel cost**

- The cost of travelling from one zone to the same zone is £4.23.
- To travel to a zone in a higher number (i.e. from 1 -> 2) costs an additional 15p.
- To travel to a zone with a lower number (i.e. from 4 -> 3) costs an addition 17p.

The cost of travelling between zones **only** applies to the start and end station, **not** any changes in between.

Calculate how expensive the user's journey will be. For example, using the sample data above:

- To go from Debden (zone 6) to Oxford Circus (Zone 1) will cost £4.23 plus 17p for every zone change. Total cost: £5.08
- To go from Highbury & Islington (zone 2) to Debden (zone 6) via Oxford Circus (zone 1) will cost £4.23 plus 15p for every zone change. Total cost: £4.83

Display the cost of the journey to the user.

---
---










Project 2: CV Builder

**Design work:** medium to high

**Data manipulation:** medium

**Event handling:** medium

**Overall complexity: medium**

### Tasks

**Task 1: CV Website Builder**

Make a website that allows you to enter:

- Name
- Job title/subtitle
- email address (optional)
- phone number (optional)
- website (optional)
- linkedIn (optional)
- personal summary
- A projects section with:
  - project title
  - project description
  - optional - github link
- A job section with:
  - date range worked (end range optional for ongoing study)
  - job title
  - job description
  - company name
- A study section with:
  - date range studied (end range optional for ongoing study)
  - school/college/university/bootcamp name
  - description
  - course title
- Submit button that says "Build my CV"
- when the button is clicked, paste the text below in headers and p tags

**Task 2: More entries**

Add a plus button to the job, project and study sections, to allow the user to add an entry to the CV.

When the form is submitted, these fields should also show in the output.

**Task 3: Styled CV**

Add styling to the HTML CV output.

**Task 4: Print the CV**

Add a button that will print the HTML output.
The form above it shouldn't appear in the printed page.

**Task 5: Save your last CV build**

Use localStorage to save previous CV, so that when the user refreshes the page or closes and reopens the browser, their data is saved.

---

**Task 6: Custom sections**

Add a button to add a custom section to the CV. Each section should have: 
- a section title field
- an "add entry" button
- each entry will have
  - Title
  - Date - optional
  - Description - optional

---
---
















Project 3 Interval timer app

**Design work:** medium

**Data manipulation:** low

**Event handling:** low to medium

**Overall complexity: low to medium**

This task is to create an interval timer you can use on your phone for interval exercises such as running, HIIT routines, and other activities.

### Tasks


**Task 1: create an interval timer**

Make a form with two fields and a button:
- time, number, in seconds
- label, text

When the button is clicked, the interval should be added to a list below the form, and I should be able to add another interval.

Add the interval times in descending order, i.e.:

- 1min Interval 1
- 3min Interval 2
- 1min Interval 3
- And so on...

When I have at least one interval on the list, a button should appear that will allow me to start my routine.

When I press start, display a timer screen.
The timer should have the remaining interval time minutes and seconds and label, and it should immediately count the time down.
When it reaches the end of the time, display the next interval on the list.

When all the intervals are complete, go back to the interval creation screen.

**Task 2: cancel**

Add a cancel button to the timer view. When I click it, take me back to the interval creation screen.

**Task 3: remove interval**

Add a button to each interval on the interval creation screen, that will allow me to remove a single interval.

**Task 4: alert when interval timers end**

When I'm on the timer screen and my timer reaches zero, my device should vibrate (if possible) and make a noise, to let me know
that I should switch activities.

**Task 5: store my routine**

Add a button to save my routine. When I press this button, give me a way of naming this routine.

Add a new page where I can see all of my routines, and can choose to start or edit them.

**Task 6: reordering intervals**

Give me the ability to easily reorder my interval timers, in case I put them in the wrong order or want to add a new one in the middle.

**Task 7: setting seconds or minutes**

Add the ability for me to enter an interval time in either minutes or seconds. 

**Task 8: pause**

Add a pause button to the timer view. When I press it, my timer should pause and change colour to make it clear that it has been paused. Add a button to allow me to resume when I'm ready.

**Task 9: edit interval**

Add a way for me to edit an individual interval I have already added to my routine, instead of having to remove it and add a new one.


---
---

Project 4  Secondhand Movies

**Design work:** medium to high

**Data manipulation:** low to medium

**Event handling:** medium

**Overall complexity: medium**

This secondhand DVD site has a collection of films to buy.

This is project involves some straightforward data, and the opportunity to work on some of the most common frontend development tasks. 

Sample data:

```js
[
  {
    "id": 161,
    "movie": "Eat",
    "genre": [
      "Drama"
    ],
    "year": 2000,
    "price": "£12.09",
    "bluray": true,
    "stock": 11
  },
  {
    "id": 162,
    "movie": "Paranormal Activity 2",
    "genre": [
      "Horror",
      "IMAX"
    ],
    "year": 1986,
    "price": "£9.65",
    "bluray": false,
    "stock": 11
  },
  {
    "id": 163,
    "movie": "Thieves (Voleurs, Les)",
    "genre": [
      "Crime",
      "Drama",
      "Romance"
    ],
    "year": 1995,
    "price": "£2.22",
    "bluray": false,
    "stock": 13
  }
]
```

## Tasks

**Task 1: Display the film collection**

Make a website with a title, and a collection of films for sale.

Display a list to browse with each film title, the year it was made, the price, whether it's in stock, and each of its genres.

This should display as a grid on large screens, and be responsive so I can use the site on mobile. 

**Task 2: Shopping Cart**

Add a basket to the site, with a buy button.
On small screens, I should see the amount of money and the number of items in my basket.
On large screens, I should also be able to see all the items in my basket.

Add a button to each DVD listing.

When the button is clicked, that DVD title should be added to my basket, and the cost of the basket should be updated.

When the user click the Buy button, it should show a confirmation message, and clear the items in the basket.

**Task 3: Display stock**

If it's out of stock, display "Out of Stock" in red, bold text instead of the Buy button.

If the stock is less than 10, display "Only x left in stock", where x is the quantity.

**Task 4: Remove basket items**

Add a button to each item in the cart, so that I can remove an item in the cart if I no longer want it.

**Task 5: Filter by genre**

Add buttons to filter by genre. These genres should be based on the genres in the data, when I click on one I should
only see films that match that genre.

**Task 6: Pagination**

Display 20 films per page. Provide buttons that allow me to navigate between each page of films, and make it clear what page I'm on, out of how many total pages.

**Task 7: Search**

Add a search bar. When I type at least three characters into the search bar, it should update the list of films to only show ones that have fully or partially matching titles. It should not be case sensitive.

**Task 8: Sort by release year**

Give me the ability to sort the films. Add the option "Year (oldest to newest)" and "Year (newest to oldest)". When I select a sort, it should show me the films in the correct order.

**Task 9: Sort by price**

Give me the ability to sort the films. Add the options: "Price (lowest to highest)" and "Price (highest to lowest)". When I select a sort, it should show me the films in the correct order.

**Task 10: Store cart**

Use localStorage to save the items in my cart, so that I can leave the website and come back, without losing my cart.





