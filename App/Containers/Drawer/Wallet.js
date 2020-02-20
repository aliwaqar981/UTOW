import {Divider, ListItem} from 'react-native-elements';
import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {height, totalSize, width} from 'react-native-dimension';

import ApplicationStyles from '../../Themes/ApplicationStyles';
import {CustomHeader} from '../../Components';
import images from '../../Themes/Images';

const data = [{}, {}, {}];
export const Wallet = props => {
  const navigate = props.navigation.navigate;
  return (
    <View style={styles.container}>
      <CustomHeader title="Wallet" onPress={() => props.navigation.goBack()} />
      <View style={styles.walletContainer}>
        <View style={{flexDirection: 'row', alignSelf: 'flex-start'}}>
          <Image
            source={images.logoSmall}
            style={{width: totalSize(5), height: totalSize(5)}}
            resizeMode="contain"
          />
          <Text style={styles.title}>UTOW Wallet</Text>
        </View>
        <Text style={styles.amount}>$10</Text>
        <Text style={styles.description}>in your wallet.</Text>
      </View>
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
    height: height(40),
    alignItems: 'center',
    paddingTop: totalSize(6),
    paddingHorizontal: totalSize(3),
    marginTop: height(4),
  },
  title: {
    fontSize: totalSize(3),
    color: '#43bfc1',
    fontWeight: 'bold',
    marginLeft: totalSize(2),
  },
  amount: {
    fontSize: totalSize(5),
    color: '#43bfc1',
    fontWeight: 'bold',
    marginTop: totalSize(4),
  },
  description: {
    fontSize: totalSize(2),
    color: '#a3a4a5',
  },
});
