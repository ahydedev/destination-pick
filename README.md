# Destination Pick
## Video URL: https://youtu.be/-nWDs2acEaw

### UPDATE
The original design was a Django application, as described below, however the site has been redeveloped as a JavaScript-driven static SPA using a global 'DESTINATIONS' array, thus eliminating the need for a DB file or server interaction. The repository content reflects the updated design.

### Concept
Destination Pick is a web application that helps users to identify their ideal holiday destination. The application gathers user preference data via a short ‘Preference Checker’ HTML form with 10 simple questions. When a completed survey is submitted, the app consults an SQL database of the 50 most popular tourist destinations, each with a set of properties corresponding to 10 key decision-making factors for choosing a holiday destination (for example, location, average temperature, geographical features, and cost), and checks for a match to user requirements. As each destination is scored and/or eliminated based on these checks, the application identifies and presents a recommended destination to the user, along with two close-matching alternative suggestions.

### Front-end design
The goal is to provide an accessible tool for the everyday holiday-seeker. Key design considerations therefore included user interface, simplicity and ease of access, and user time requirements. The resulting product is a clean, simple website-style application with desktop and mobile views and responsive elements such as a Bootstrap video carousel (as seen at homepage **index.html**). In the mobile view (<=500px viewport), the otherwise horizontal video carousel is displayed vertically for visual appeal and checkboxes become large, tappable buttons for ease of use. CSS and JavaScript are also used to provide basic interactivity and assist with navigation (for example, different colours are used to highlight the choices a user has made, while respecting the overall colour scheme).

The user survey is intended to take approximately two minutes to complete and provides an instant result. The application uses HTML’s built-in client-side form validation to avoid incomplete/incorrect data being sent to the back end for processing.

### Data and research
Following online research, a set of 10 key decision-making factors for holiday-makers were noted:

1.	Features the individual may want from a destination (for example: beach, city, mountains, forest, desert, heritage sites)
2.	Climate and temperature
3.	Budget
4.	Safety
5.	Ease of access (for example, local transport infrastructure)
6.	Language
7.	Cuisine
8.	Location
9.	Travel restrictions (for example, those related to COVID-19)
10.	Individual-specific requirements (e.g. are there places they don’t want to go?)

These 10 factors form the basis of the HTML questionnaire completed by users in **checker.html**. Some questions, such as ‘features’ (1) are checkbox-based, allowing the user to select multiple options, whereas others, such as ‘budget’, are single-choice radio boxes, or open text boxes, as in the case of ‘language’ where the user can specify a preferred language of their choice.

Destination data came from a range of online sources such as official indices. These include:

- Top 50 tourist destinations by visitors: https://worldpopulationreview.com/country-rankings/most-visited-countries
- Average annual temperature: https://tcktcktck.org/countries
- Restaurant price index, here used as a reference point for ‘budget’ criterion: https://www.numbeo.com/cost-of-living/rankings_by_country.jsp
- Safety index: https://www.numbeo.com/crime/indices_explained.jsp
- Transport infrastructure rankings: http://data.un.org/Data.aspx?d=WDI&f=Indicator_Code%3ALP.LPI.INFR.XQ
- Languages spoken by country: https://www.dss.gov.au/sites/default/files/files/foi_disclosure_log/12-12-13/language-list.pdf
- World Heritage Sites: https://en.wikipedia.org/wiki/World_Heritage_Sites_by_country
- COVID-19 restrictions: https://www.skyscanner.net/travel-restrictions

This data was exported to CSV and uploaded to a relational database, **destinations.db**, via SQLite. destinations.db provides the country data for Destination Pick’s application layer.

A set of judgement calls were made when defining data classifications. For example, a safety rating of 60 in Numbeo’s safety index or more was repositioned as “High”, and ratings of 40+, “Moderate” for the purpose of this application.

### Controller layer
The controller file for the application is **app.py**, a Python file here set up as a Flask application. Python was selected as the main application programming language on account of its familiarity, developer-friendly nature, speed and position as a leading language for data science.

app.py performs the application’s business logic and ties the pieces of the app together. Here user input from the front-end survey in checker.html is passed into variables and matched to data held in DESTINATIONS (a list of destinations pulled from destinations.db for scoring and elimination within the current session).

For certain questions, points are added to destinations where they meet the user’s stated preference or requirement. For example, in Question1 the user is invited to select one or more features from a range of features that their preferred destination might have. The values are passed into the user_features variable in app.py. If the user has clicked on “Beach” and “Desert”, app.py will loop through the list of destinations in DESTINATIONS adding a point to each destination whose own features include the words “Beach” or “Desert” (two points being allocated if both words are present). In other situations, destinations are simply eliminated if they do not meet the user’s needs. This is the case in Question 3, where if the user has confirmed their budget as being low / medium / high, the logic in app.py will eliminate destinations with a higher budget classification, setting their status to “INACTIVE”.

When scoring is complete, the highest scoring active destinations are passed into a list of TOP_DESTINATIONS. This list will include the highest scoring destinations at the front, followed by those with a score of top_score – 1, and finally top_score – 2. The goal of this approach is to ensure that a sufficient number of destinations are passed into the TOP_DESTINATIONS variable to provide a recommended destination (TOP_DESTINATIONS[0]) and two alternative recommendations (items [1] and [2] in the same list) to the user. After app.py has checked that the length of the list is at least 3 items, the result is rendered in **checked.html**, with TOP_DESTINATIONS being passed into this template. If the list of destinations is too short (normally because the user criteria are quite narrow), the application routes to **apology.html**, advising that it was not obtain a valid result and inviting the user to widen their search criteria.

### Learning, changes and reflections
During planning and preparation it was helpful to research good website and survey design in order to enhance user engagement with the app. This led to the creation of a short, single page survey which avoids using long questions so as to maximise response rates. The overall look and feel of the site is intended to be clean, spacious and consistent, prioritising findability and navigation. Consideration was also given to responsiveness and the application simulated on multiple devices.

The developer allocated 3 working days for this application (one for planning and data gathering, another for front-end development (including the survey) and database preparation, and one to write the Python code, connect, test and finalise the application. In practice an additional two days were required, with a full day being needed for troubleshooting app.py, and additional time for final front-end adjustments and project write-up.

Small design changes were made during development. For example, the ‘location’ survey question originally proposed invited the user to specify their departure location and a maximum distance they would be prepared to travel. The application would then source the distance between the user’s departure location and each active destination, eliminating those outside of the specified range. However it was later decided not to use an API for this purpose due to difficulty locating a free API and in favour of maintaining a fast and performant app (using the free API identified would have resulted in a high volume of HTTP requests), so the question was amended to a list of continents. The developer was however able to include an API interface on the results page where the recommended destination’s respective flag is sourced from https://www.countryflagsapi.com/ and displayed on the page.

In terms of reflections, a significant level of focus was given to raw functionality and front-end design during the development of this app. Given the opportunity to do this piece of work again, more focus would be given to improving, shortening and simplifying code (in particular, the Python code in app.py and CSS in styles.css) where possible.


