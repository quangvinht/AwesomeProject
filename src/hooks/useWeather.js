/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {PermissionsAndroid} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {WEATHER_API_KEY} from '@env';

const requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Geolocation Permission',
        message: 'Can we access your location?',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    console.log('granted', granted);
    if (granted === 'granted') {
      console.log('You can use Geolocation');
      return true;
    } else {
      console.log('You cannot use Geolocation');
      return false;
    }
  } catch (err) {
    return false;
  }
};

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState([]);
  const [location, setLocation] = useState(false);

  const [lat, setLat] = useState('');
  const [lon, setLon] = useState('');

  const getInforWeather = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`,
      );
      const data = await res.json();
      setWeather(data);
      setLoading(false);
    } catch (err) {
      setError('Could not get weather data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getLocation = () => {
      const result = requestLocationPermission();
      result.then(res => {
        //console.log('res is:', res);
        if (res) {
          Geolocation.getCurrentPosition(
            async position => {
              //console.log('Positon:', position);
              setLocation(position);
              setLat(position.coords.latitude);
              setLon(position.coords.longitude);
              await getInforWeather();
            },
            err => {
              // See error code charts below.
              console.log(err.code, err.message);
              setError({code: err.code, message: err.message});
              setLocation(false);
            },
            {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
          );
        }
      });
    };

    getLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lat, lon]);
  return [error, loading, weather];
};
