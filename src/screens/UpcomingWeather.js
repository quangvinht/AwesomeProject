/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  ImageBackground,
  FlatList,
} from 'react-native';
import ListItem from '../components/ListItem';

const DATA = [
  {
    dt_txt: '2022-08-30 16:00:00',
    main: {
      temp_min: 296.34,
      temp_max: 298.24,
    },
    weather: [
      {
        main: 'Rain',
      },
    ],
  },
  {
    dt_txt: '2023-09-31 18:00:00',
    main: {
      temp_min: 292.84,
      temp_max: 294.94,
    },
    weather: [
      {
        main: 'Rain',
      },
    ],
  },
  {
    dt_txt: '2022-09-03 15:00:00',
    main: {
      temp_min: 292.84,
      temp_max: 294.94,
    },
    weather: [
      {
        main: 'Sun',
      },
    ],
  },
  {
    dt_txt: '2022-01-30 16:00:00',
    main: {
      temp_min: 294.14,
      temp_max: 294.14,
    },
    weather: [
      {
        main: 'clear',
      },
    ],
  },
];

function UpComingWeather({weatherData}) {
  const renderItem = ({item}) => (
    <ListItem
      condition={item.weather[0].main}
      dt_txt={item.dt_txt}
      min={item.main.temp_min}
      max={item.main.temp_max}
    />
  );

  const {container, image} = styles;
  return (
    <SafeAreaView style={container}>
      <ImageBackground
        style={image}
        source={require('../../assets/upcoming-background.jpg')}>
        <FlatList
          data={weatherData}
          renderItem={renderItem}
          keyExtractor={item => item.dt_txt}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: 'royalblue',
  },
  image: {
    flex: 1,
  },
});

export default UpComingWeather;
