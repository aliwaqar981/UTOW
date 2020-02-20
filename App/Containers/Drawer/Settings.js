import {Divider, ListItem} from 'react-native-elements';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {height, totalSize, width} from 'react-native-dimension';

import ApplicationStyles from '../../Themes/ApplicationStyles';
import {CustomHeader} from '../../Components';
import images from '../../Themes/Images';

export const Settings = props => {
  const navigate = props.navigation.navigate;
  return (
    <View style={styles.container}>
      <CustomHeader
        title="Settings"
        onPress={() => props.navigation.goBack()}
      />
      <View style={styles.walletContainer}>
        <ListItem
          title={'Bobby'}
          titleStyle={styles.title}
          subtitle={'Edit your settings'}
          subtitleStyle={styles.subtitle}
          rightTitle={'$100'}
          rightTitleStyle={styles.rightTitle}
          containerStyle={{
            paddingHorizontal: totalSize(3),
            paddingVertical: totalSize(4),
          }}
          leftAvatar={{size: totalSize(8)}}
        />
        <Divider />
        <Text
          style={[
            styles.subtitle,
            {
              color: '#b10a31',
              marginHorizontal: totalSize(3),
              marginTop: height(1.5),
            },
          ]}>
          For security, please verify your email.
        </Text>
      </View>
      <TouchableOpacity style={styles.signOutContainer}>
        <Text
          style={[
            styles.subtitle,
            {
              color: '#b10a31',
              marginHorizontal: totalSize(3),
            },
          ]}>
          Sign out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F5F8',
  },
  walletContainer: {
    backgroundColor: '#FFF',
    width: width(100),
    height: height(25),
    marginTop: height(4),
  },
  signOutContainer: {
    backgroundColor: '#FFF',
    width: width(100),
    height: height(7),
    bottom: height(5),
    justifyContent: 'center',
    position: 'absolute',
  },
  title: {
    fontSize: totalSize(2.4),
    color: '#282f39',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: totalSize(2),
    color: '#282f39',
    fontWeight: 'bold',
  },

  description: {
    fontSize: totalSize(2),
    color: '#a3a4a5',
  },
});
