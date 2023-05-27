# Journey Genie

A travel companion application that effectively handles data by utilising the Google Maps API, geolocation and React/Next.js. Developed skills in setting up and managing APIs using Google Cloud Platform (GCP). Utilised Travel Advisor API to retrieve location-specific information on restaurants, hotels, and activities for a highly customised user experience, including filtering of places based on rating. 

A live version of the website can be accessed here - youtube

## Installation

1. Setup Node.js,[nvm](https://github.com/nvm-sh/nvm) can be used
2. Clone the repository and install all the dependencies.
3. Run ```npm install --legacy-peer-deps```

## API Setup
3 API's are used for this application, but only 2 keys are needed. Please see the below on how to add them to the application.

Below is how to setup an API key for

### *RAPID API - Travel Advisor*
1. Visit [RapidAPI](https://rapidapi.com/hub) and register an account
2. Search for the [Travel Advisor](https://rapidapi.com/apidojo/api/travel-advisor) and click Subscribe to Test. A API key will be generated
3. Copy the X-RapidAPI-Key key to 'Line 22' in api.js (REPLACE ```process.env.REACT_APP_RAPID_TRAVEL_API_KEY```)

### *Google Maps Setup*
1. Visit [Google Cloud Platform](https://cloud.google.com/) and register an account
2. Under 'Console' create a 'New Project' and provide all the necessary details
3. Click 'APIs & Services' and then 'Library' 
4. Search for 'Maps JavaScript API' and click enable it. After enabling it, click on Manage
5. On the left-hand sidebar, click Credentials and then Create Credentials in the top
6. Copy the API key to 'Line 22' in Map.jsx (REPLACE ```process.env.REACT_APP_GOOGLE_MAPS_API_KEY```)

### *Google Search Locations*
1. Visit [Google Cloud Platform](https://cloud.google.com/) and register an account
2. Click 'APIs & Services' and then 'Library' 
3. Search for 'Places API' and click enable it. After enabling it, click on Manage
4. On the left-hand sidebar, click Credentials and then Create Credentials in the top
5. Copy the API key to 'Line 16' in index.html (REPLACE ```process.env.REACT_APP_GOOGLE_MAPS_API_KEY```)

## Functionality and Features
This website has the below features:
* Get Restaurant information of any location in the world
* Get Attractions information of any location in the world
* Get Hotels information of any location in the world
* Filter all of the above from user start ratings
* Access reviews and websites of all of the Restaurents, Attractions and Hotels

## Acknowledgments
Website inspiration and design - https://www.youtube.com/watch?v=UKdQjQX1Pko
