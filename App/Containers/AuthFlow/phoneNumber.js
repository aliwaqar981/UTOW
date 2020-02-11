import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';

import ApplicationStyles from '../../Themes/ApplicationStyles';
import CountryPicker from 'react-native-country-picker-modal';
import {RegisterButton} from '../../Components/RegisterButton';

export const PhoneNumber = props => {
  const [countryCode, setCountryCode] = useState('US');
  const [country, setCountry] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = props.navigation.navigate;

  const onSelect = selectedCountry => {
    setCountryCode(selectedCountry.cca2);
    setCountry(selectedCountry);
    console.log(country, countryCode);
  };
  return (
    <View style={[ApplicationStyles.bgContainer, {paddingHorizontal: 32}]}>
      {/* <View style={ApplicationStyles.innerContainer}> */}
      <Text style={ApplicationStyles.h1}>Enter mobile number</Text>
      <View style={styles.countryPicker}>
        <View style={styles.countryPickerContainer}>
          <CountryPicker
            {...{
              countryCode,
              onSelect,
            }}
            visible={false}
          />
          <Image
            source={require('../../Assets/Images/downArrow.png')}
            height={20}
            width={20}
          />
          <TextInput
            style={styles.phoneInput}
            onChangeText={text => setPhoneNumber(text)}
            keyboardType="phone-pad"
          />
        </View>
        <Image
          source={require('../../Assets/Images/tick.png')}
          height={20}
          width={20}
        />
      </View>
      <Text style={styles.termsConditions}>
        By Continuing, I confirm that I have read {'&'} agreed to the{' '}
        <Text style={ApplicationStyles.boldText}>Terms </Text>
        {'&'} <Text style={ApplicationStyles.boldText}>conditions </Text> and
        <Text style={ApplicationStyles.boldText}> Privacy policy </Text>
      </Text>
      {/* </View> */}
      <RegisterButton
        title="Continue"
        onPress={() => navigate('otp', {phoneNumber})}
        styles={styles.buttonStyles}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  countryPicker: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    marginRight: '10%',
  },
  countryPickerContainer: {flexDirection: 'row', alignItems: 'center'},
  termsConditions: {
    width: '90%',
    textAlign: 'center',
    fontSize: 11,
    marginTop: 12,
  },
  buttonStyles: {
    alignItems: 'center',
    marginTop: 60,
    alignSelf: 'center',
  },
  phoneInput: {
    marginLeft: 5,
    fontSize: 18,
    width: '75%',
  },
});
