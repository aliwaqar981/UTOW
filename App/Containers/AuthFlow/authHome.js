import {Image, StyleSheet, Text, View} from 'react-native';
import {totalSize, width} from 'react-native-dimension';

import ApplicationStyles from '../../Themes/ApplicationStyles';
import React from 'react';
import {RegisterButton} from '../../Components/RegisterButton';
import images from '../../Themes/Images';

export const AuthHome = props => {
  const navigate = props.navigation.navigate;
  return (
    <View style={ApplicationStyles.bgContainer}>
      <Image
        source={images.homeImage}
        resizeMode="contain"
        style={{height: totalSize(30), width: totalSize(45)}}
      />
      <Text
        style={[ApplicationStyles.h2, {marginHorizontal: 32, marginTop: 20}]}>
        Your truck, on demand
      </Text>
      <Text
        style={[
          ApplicationStyles.p2,
          {marginHorizontal: 32, width: width(70)},
        ]}>
        Whether you're headed to work, airport or out of the town. UTOW connects
        you with a reliable ride in minutes. One tap and a truck comes.
      </Text>
      <RegisterButton
        styles={styles.registerButton}
        title="Register with Phone"
        onPress={() => navigate('phonenumber')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {flex: 4, justifyContent: 'flex-end'},
  registerButton: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    paddingRight: 40,
    bottom: 20,
    width: '82%',
  },
});
