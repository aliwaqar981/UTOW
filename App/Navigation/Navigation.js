import {AuthHome, Otp, PhoneNumber, VerifyEmail} from '../Containers/AuthFlow';
import {Bookings, Settings, Wallet} from '../Containers/index';
import {Text, TouchableOpacity} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import HeaderBackButton from '../Components/HeaderBackButton';
import {MapScreen} from '../Containers/MainFlow';
import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

const AuthStack = createStackNavigator({
  authHome: {
    screen: AuthHome,
    navigationOptions: {
      header: null,
    },
  },
  phonenumber: {
    screen: PhoneNumber,
    navigationOptions: {
      header: null,
    },
  },
  otp: {
    screen: Otp,
    navigationOptions: {
      header: null,
    },
  },
  verifyemail: {
    screen: VerifyEmail,
    navigationOptions: {
      header: null,
    },
  },
});

const MainStack = createStackNavigator({
  mapScreen: {
    screen: MapScreen,
    navigationOptions: {
      header: null,
    },
  },
  settings: {
    screen: Settings,
    navigationOptions: ({navigation}) => {
      return {
        headerStyle: {backgroundColor: '#FFF', elevation: 0},
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <HeaderBackButton />
          </TouchableOpacity>
        ),
        title: 'Settings',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
    },
  },
  wallet: {
    screen: Wallet,
    navigationOptions: ({navigation}) => {
      return {
        headerStyle: {backgroundColor: '#FFF', elevation: 0},
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <HeaderBackButton />
          </TouchableOpacity>
        ),
        title: 'Wallet',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
    },
  },
  bookings: {
    screen: Bookings,
    navigationOptions: ({navigation}) => {
      return {
        headerStyle: {backgroundColor: '#FFF', elevation: 0},
        headerLeft: (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <HeaderBackButton />
          </TouchableOpacity>
        ),
        title: 'Bookings',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
    },
  },
});

const StackSwitcher = createSwitchNavigator(
  {
    Auth: AuthStack,
    Main: MainStack,
  },
  {
    initialRouteName: 'Auth',
  },
);

export default createAppContainer(StackSwitcher);
