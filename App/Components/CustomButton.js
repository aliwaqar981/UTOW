import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import React from 'react';
import {totalSize} from 'react-native-dimension';

export const CustomButton = props => {
  const {title, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 40,
    backgroundColor: '#43bfc1',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: totalSize(5),
    marginTop: 16,
  },
  textStyle: {
    color: '#fff',
  },
});
