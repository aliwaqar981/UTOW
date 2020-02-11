import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import ApplicationStyles from '../../Themes/ApplicationStyles';
import {RegisterButton} from '../../Components/RegisterButton';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

export const Otp = props => {
  const [code, setCode] = useState('');
  const navigate = props.navigation.navigate;
  const phoneNumber = props.navigation.state.params.phoneNumber;

  const _checkCode = code => {
    console.log('Check code', code);
  };
  console.log('Params', phoneNumber);
  return (
    <View style={[ApplicationStyles.bgContainer, {paddingHorizontal: 32}]}>
      <Text style={[ApplicationStyles.h1]}>OTP Verification</Text>
      <Text style={styles.textSpacing}>
        Enter the 4-digit code sent to you at
      </Text>
      <View style={[styles.textSpacing, {flexDirection: 'row'}]}>
        <Text>{phoneNumber}</Text>
        <TouchableOpacity onPress={() => navigate('phonenumber')}>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <SmoothPinCodeInput
        cellStyle={{
          borderBottomWidth: 1,
          borderColor: 'white',
        }}
        cellStyleFocused={{
          borderColor: 'gray',
        }}
        containerStyle={{marginTop: 20}}
        autoFocus={true}
        animated={true}
        cellSpacing={32}
        value={code}
        onTextChange={code => setCode(code)}
        onFulfill={_checkCode}
        // onBackspace={() => console.log('no more back')}
      />
      <RegisterButton
        title="Submit"
        onPress={() => navigate('verifyemail')}
        styles={styles.buttonStyles}
      />
      <TouchableOpacity>
        <Text style={styles.resendCode}>I didn't get the code.</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  editText: {color: '#3369ff', marginLeft: 10},
  textSpacing: {marginTop: 20},
  resendCode: {color: '#d10707', marginTop: 20},
  buttonStyles: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 60,
    // width: '90%',
  },
});
