/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ActivityIndicator, StyleSheet, View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import Tabs from './src/components/Tabs';

import {useGetWeather} from './src/hooks/useWeather';
import ErrorItem from './src/components/ErrorItem';

// Function to get permission for location

function App() {
  const [error, loading, weather] = useGetWeather();

  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }
  return (
    <View style={styles.container}>
      {error ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size={'large'} color={'blue'} />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
