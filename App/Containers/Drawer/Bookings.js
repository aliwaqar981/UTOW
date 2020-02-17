import {Divider, ListItem} from 'react-native-elements';
import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {height, totalSize, width} from 'react-native-dimension';

import ApplicationStyles from '../../Themes/ApplicationStyles';

const data = [{}, {}, {}];
export const Bookings = props => {
  const navigate = props.navigation.navigate;
  return (
    <View style={styles.container}>
      {data.map((item, key) => {
        return (
          <>
            <ListItem
              key={key}
              title={'Start Destination'}
              titleStyle={styles.title}
              subtitle={'120N Douglas Ave Ellswor...'}
              subtitleStyle={styles.subtitle}
              rightTitle={'$100'}
              rightTitleStyle={styles.rightTitle}
              containerStyle={{paddingVertical: 5, paddingLeft: 0}}
            />
            <ListItem
              key={data.length + key}
              title={'End Destination'}
              titleStyle={styles.title}
              subtitle={'56K West,KS-4 Hoisington'}
              subtitleStyle={styles.subtitle}
              containerStyle={{paddingVertical: 8, paddingLeft: 0}}
            />
            <Divider />
          </>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: width(6),
    paddingTop: height(4),
  },
  title: {
    fontSize: totalSize(1.8),
    color: '#a3a4a5',
  },
  subtitle: {
    fontSize: totalSize(2),
    color: '#282f39',
    fontWeight: 'bold',
  },
  rightTitle: {
    fontSize: totalSize(2.8),
    color: '#282f39',
    fontWeight: 'bold',
  },
});
