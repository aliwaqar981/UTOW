import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import ApplicationStyles from '../Themes/ApplicationStyles';
import React from 'react';
import {totalSize} from 'react-native-dimension';

export const CustomButton = props => {
  const {title, onPress, style, textStyle} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[ApplicationStyles.customButtonContainer, style]}>
      <Text style={[styles.textStyle, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: '#fff',
  },
});
