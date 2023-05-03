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
  StatusBar,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import IconText from '../components/IconText';
import {faUser, faSun, faClou} from '@fortawesome/free-regular-svg-icons';
import moment from 'moment';

import {faCloudSun} from '@fortawesome/free-solid-svg-icons';
function City({weatherData}) {
  const {
    container,
    cityName,
    cityText,
    countryName,
    imageLayout,
    populationWrapper,
    populationText,
    riseSetWrapper,
    riseSetText,
    rowLayout,
  } = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground
        source={require('../../assets/city-background.jpg')}
        style={imageLayout}>
        <Text style={[cityName, cityText]}>{weatherData.name}</Text>
        <Text style={[countryName, cityText]}>{weatherData.country}</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={faUser}
            iconColor={'red'}
            bodyText={`Population: ${weatherData.population}`}
            bodyTextStyles={populationText}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={faSun}
            iconColor={'white'}
            bodyText={moment(weatherData.sunrise).format('h:mm:ss a')}
            bodyTextStyles={riseSetText}
          />
          <IconText
            iconName={faCloudSun}
            iconColor={'white'}
            bodyText={moment(weatherData.sunset).format('h:mm:ss a')}
            bodyTextStyles={riseSetText}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'black',
    fontWeight: 'bold',
  },
  populationWrapper: {
    justifyContent: 'center',
    marginTop: 30,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: 'red',
  },
  riseSetWrapper: {
    justifyContent: 'space-around',
    marginTop: 30,
  },
  rowLayout: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  riseSetText: {
    fontSize: 20,
    color: 'white',
  },
});

export default City;
