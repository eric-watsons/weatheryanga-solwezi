
# Project Overview

Hi there, am glad to have you here. Take some time to find out what this project is all about.
This is a dynamic weather update website dedicated to Northwestern province, Solwezi district to be precise. It fetches Real weather data using a third-party API. 
This app allows a user to search for the weather by city. It displays weather details such as temperature, humidity, wind speed, and weather conditions. It also displays the weather level (e.g. Good, Fair, Moderate or Poor), and a message of how the level of the weather can affect them.
It is a user-friendly interface with visual enhancements like icons.  

## Tech Stack

**Client:** HTML, CSS, JavaScript, API


## Features

1. Basic Features
  - Search Functionality: (Allow users to input a desired city name and retrieve desired realtime weather data 
    for that location.)

  - Weather Data Display: Displays essential weather information e.g.(Current temperature, Weather condition[sunny, 
    cloudy, rainy], Humidity level, Wind Speed and Weather Icons that corresponds to the current condition[using the API's icon Data].)
  - API Intergration: This app is using OpenWeatherMap as its weather API to fetch the weather data.

2.  Advanced Features
    - Geolocation Feature: This app is able to automatically display the weather for the user's current location 
      on load.
    - 5 Days Weather Forecast: The app displays the 5Day Weather forecast.
    - Time Display: Shows the local time of the searched city alongside weather data.

3. UI/UX Design
  - The app is visually clean and it has an intuitive layout.
  - This app is using Weather Icons to represent different weather condions.
  - It is accessible and looks good on both desktop and mobile devices.
  - It has a consistent color scheme and typography throuout.

4. Technical Specifications
  - Frontend: HTML, CSS, JavaScript (Vanilla).
  - API: Its Using Fetch API to make asynchronous API requests.
  - Error Handling: It notifies users when;
    >> The city is not found.
    >> There is a network issue.
    >> The API request fails.
  - Version Control: Its using Git version control which allows me to push my code to a repository on GitHub,
    alongwith meaningful commit messages.

## Run Locally

Clone the project

```bash
  git clone https://www.github.com/eric-watsons/weatheryanga-solwezi
```

Go to the project directory

```bash
  cd my-project
```

Open with VSCode

```bash
  code .
```

Open with live server

```bash
  npm run start
```


## Authors

- [@watsonkayumba](https://www.github.com/eric-watsons)

## License

[MIT](https://choosealicense.com/licenses/mit/)