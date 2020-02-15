import {AuthHome, Otp, PhoneNumber, VerifyEmail} from '../Containers/AuthFlow';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import {MapScreen} from '../Containers/MainFlow';
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
});

const StackSwitcher = createSwitchNavigator(
  {
    Auth: AuthStack,
    Main: MainStack,
  },
  {
    initialRouteName: 'Main',
  },
);

export default createAppContainer(StackSwitcher);
