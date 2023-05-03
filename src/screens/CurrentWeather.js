/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faCloud,
  faCloudBolt,
  faCloudRain,
  faEraser,
  faSmog,
  faUmbrella,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import RowText from '../components/RowText';
import {weatherType} from '../utilities/WeatherType';
import {faSnowflake, faSun} from '@fortawesome/free-regular-svg-icons';

function CurrentWeather({weatherData}) {
  const {
    wrapper,
    container,
    temperature,
    feels,
    hiLowWrapper,
    hiLow,
    bodyWrapper,
    description,
    message,
  } = styles;

  const {
    main: {temp, feels_like, temp_min, temp_max},
    weather,
  } = weatherData;
  const weatherCondition = weather[0].main;
  return (
    <SafeAreaView
      style={[
        wrapper,
        {backgroundColor: weatherType[weatherCondition].backgroundColor},
      ]}>
      <View style={container}>
        <Text> {weatherType[weatherCondition].icon}</Text>
        <Text style={temperature}>{`${temp}°`}</Text>
        <Text style={feels}>{`Feels like: ${feels_like}°`}</Text>
        <RowText
          messageOne={`High: ${temp_min}° `}
          messageTwo={`Low: ${temp_max}°`}
          containerStyles={hiLowWrapper}
          messageOneStyles={hiLow}
          messageTwoStyles={hiLow}
        />
      </View>
      <RowText
        messageOne={weather[0].description}
        messageTwo={weatherType[weatherCondition].message}
        containerStyles={bodyWrapper}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  temperature: {
    color: 'black',
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: 'black',
  },
  hiLow: {
    color: 'black',
    fontSize: 20,
  },
  hiLowWrapper: {
    flexDirection: 'row',
  },
  bodyWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40,
  },
  description: {
    fontSize: 43,
  },
  message: {
    fontSize: 25,
  },
});

export default CurrentWeather;
