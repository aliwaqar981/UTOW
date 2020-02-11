import {AuthHome, Otp, PhoneNumber, VerifyEmail} from '../Containers/AuthFlow';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

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
  },
});

const StackSwitcher = createSwitchNavigator(
  {
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  },
);

export default createAppContainer(StackSwitcher);
