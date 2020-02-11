import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import ApplicationStyles from '../Themes/ApplicationStyles';
import React from 'react';

export const RegisterButton = props => {
  const {title, onPress, styles} = props;
  return (
    <TouchableOpacity
      style={[ApplicationStyles.customButton, styles]}
      onPress={onPress}>
      <Text style={ApplicationStyles.customButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({});
