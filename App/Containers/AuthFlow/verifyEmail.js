import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

import ApplicationStyles from '../../Themes/ApplicationStyles';
import {RegisterButton} from '../../Components/RegisterButton';

export const VerifyEmail = props => {
  const [email, setEmail] = useState('');
  const navigate = props.navigation.navigate;

  return (
    <View style={[ApplicationStyles.bgContainer, {paddingHorizontal: 32}]}>
      <Text style={ApplicationStyles.boldText}>Email address</Text>
      <View style={styles.emailContainer}>
        <TextInput
          style={styles.emailInput}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
          placeholder="email"
        />
        <Image
          source={require('../../Assets/Images/tick.png')}
          height={20}
          width={20}
        />
      </View>
      <RegisterButton
        title="Verify Email"
        onPress={() => navigate('bookings')}
        styles={{alignItems: 'center', marginTop: 60, alignSelf: 'center'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  emailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    borderBottomWidth: 0.3,
  },
  emailInput: {
    fontSize: 18,
    borderBottomColor: 'gray',
  },
});
