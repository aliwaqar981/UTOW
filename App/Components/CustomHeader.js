import {Text, TouchableOpacity, View} from 'react-native';

import HeaderBackButton from './HeaderBackButton';
import React from 'react';

export const CustomHeader = props => {
  return (
    <View
      style={{
        backgroundColor: '#FFF',
        height: 50,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 2,
      }}>
      <TouchableOpacity onPress={props.onPress}>
        <HeaderBackButton />
      </TouchableOpacity>
      <Text style={{fontSize: 16, fontWeight: '700'}}> {props.title} </Text>
      <View />
    </View>
  );
};
