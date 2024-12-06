# Weather App

## Description

The Weather App is a simple React Native application that provides weather information for cities around the world. The app allows users to search for weather data by city name or by using their current location. It displays the weather data such as temperature, humidity, wind speed, and sunrise/sunset times. The app also provides a settings screen to toggle between Celsius and Fahrenheit units.

## Features

- *Weather Search*: Users can search for weather data by entering a city name.
- *Current Location Weather*: The app can fetch weather data based on the user's current geographical location.
- *Unit Toggle*: Users can toggle between Celsius and Fahrenheit units for temperature measurement.
- *Weather Details*: Displays detailed weather information including humidity, wind speed, and sunrise/sunset times.
- *Suggestions*: The app suggests cities as users type the city name for easier search.
- *Settings*: The user can switch between Celsius and Fahrenheit units of temperature measurement.

## Screens

1. *Home Screen*: 
   - Search bar to enter the city name.
   - Suggests cities based on the input.
   - A button to fetch weather based on the entered city or the current location.
   - Displays temperature.

   
2. *Details Screen*: 
   - Displays detailed weather information for the selected city such as temperature, humidity, wind speed, and sunrise/sunset times.
   - A back button to navigate back to the Home Screen.

3. *Settings Screen*: 
   - Allows users to toggle between Celsius and Fahrenheit for temperature units.
   - The current unit selection is persisted using AsyncStorage, so it remains between app restarts.

## APIs Used

- *Free OpenWeatherMap API*:
  - The app uses the OpenWeatherMap API to fetch weather data. The API provides current weather data based on the city name or geographic coordinates (latitude and longitude).
  - *End Points*:
    - https://api.openweathermap.org/data/2.5/weather: Fetch current weather data by city name or coordinates.
    - https://api.openweathermap.org/geo/1.0/direct: Fetch city suggestions based on a query string.
  - *API Key*: You will need to obtain your own OpenWeatherMap API key to use this API. Replace YOUR_API_KEY in the code with your own API key.

- *Geolocation API* (via react-native-geolocation-service):
  - The app uses the Geolocation API to fetch the user's current location (latitude and longitude) to provide weather data based on their location.

- *AsyncStorage*:
  - AsyncStorage is used to persist the selected unit (Celsius or Fahrenheit) locally on the device, so it remains consistent even after the app is closed or reopened.

## Setup Instructions

1. *Clone the Repository*:
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
