/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

const IconText = props => {
  const {iconName, iconColor, bodyText, bodyTextStyles} = props;
  const {container, textTheme} = styles;
  return (
    <View style={container}>
      <FontAwesomeIcon icon={iconName} size={30} color="red" />

      <Text style={[textTheme, bodyTextStyles]}>{bodyText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTheme: {
    fontWeight: 'bold',
  },
  container: {
    alignItems: 'center',
  },
});
export default IconText;
