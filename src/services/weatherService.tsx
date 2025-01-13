import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {API_KEY} from '@env';

// const API_KEY=`45dc6281f938afab5f291854b289c8ae`
// console.log(API_KEY)
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getWeatherByCity = async (city: string) => {
  const metric = await AsyncStorage.getItem('unit');

  if (metric == 'Faren') {
    try {
      const response = await axios.get(`${BASE_URL}/weather`, {
        params: {q: city, appid: API_KEY, units: 'imperial'},
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch weather data');
    }
  } else {
    try {
      const response = await axios.get(`${BASE_URL}/weather`, {
        params: {q: city, appid: API_KEY, units: 'metric'},
      });
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch weather data');
    }
  }
};

export const getWeatherByCoords = async (lat: number, lon: number) => {
  const metric = await AsyncStorage.getItem('unit');
  console.log("METER IN COORD SERVICES : ", metric)
  console.log("LAT LONG IN COORD SERVICES : ", lat, lon)
  if (metric == 'Faren') {
    try {
      const response = await axios.get(
        `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
        {
          params: {units: 'imperial'},
        },
      );
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch weather data');
    }
  } else {
    try {
      const x = `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      console.log("ENDPOINT LAT LONG : ",x )
      const response = await axios.get(
        `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`,
        {
          params: {units: 'metric'},
        },
      );
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch weather data');
    }
  }
};
