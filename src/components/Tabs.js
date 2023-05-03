/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import City from '../screens/City';
import CurrentWeather from '../screens/CurrentWeather';
import UpComingWeather from '../screens/UpcomingWeather';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faDroplet, faClock, faHouse} from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

function Tabs({weather}) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: 'lightblue',
        },
        headerStyle: {
          backgroundColor: 'lightblue',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 25,
          color: 'tomato',
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon
              icon={faDroplet}
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          ),
        }}
        name="City">
        {() => <City weatherData={weather.city} />}
      </Tab.Screen>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon
              icon={faClock}
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          ),
        }}
        name="CurrentWeather">
        {() => <CurrentWeather weatherData={weather.list[0]} />}
      </Tab.Screen>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <FontAwesomeIcon
              icon={faHouse}
              size={25}
              color={focused ? 'tomato' : 'black'}
            />
          ),
        }}
        name="UpcomingWeather">
        {() => <UpComingWeather weatherData={weather.list} />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default Tabs;
