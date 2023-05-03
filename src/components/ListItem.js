/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {weatherType} from '../utilities/WeatherType';
import moment from 'moment';

const ListItem = props => {
  const {dt_txt, min, max, condition} = props;
  const {item, date, temp, dateTextWrapper} = styles;
  return (
    <View style={item}>
      <Text> {weatherType[condition].icon}</Text>
      <View style={dateTextWrapper}>
        <Text style={date}>{moment(dt_txt).format('dddd')}</Text>
        <Text style={date}>{moment(dt_txt).format('h:mm:ss a')}</Text>
      </View>
      <Text style={temp}>{`${Math.round(min)}° / ${Math.round(max)}°`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 5,
    backgroundColor: 'indianred',
  },
  temp: {
    color: 'white',
    fontSize: 20,
  },
  date: {
    color: 'white',
    fontSize: 15,
  },
  dateTextWrapper: {
    flexDirection: 'column',
  },
});
export default ListItem;
