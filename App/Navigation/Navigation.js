import {AuthHome, Otp, PhoneNumber, VerifyEmail} from '../Containers/AuthFlow';
import {Bookings, Settings, Wallet} from '../Containers/index';
import {DrawerItems, createDrawerNavigator} from 'react-navigation-drawer';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {height, totalSize} from 'react-native-dimension';

import HeaderBackButton from '../Components/HeaderBackButton';
import {MapScreen} from '../Containers/MainFlow';
import React from 'react';
import colors from '../Themes/Colors';
import {createStackNavigator} from 'react-navigation-stack';

const customDrawer = createDrawerNavigator(
  {
    MapScreen: {
      screen: MapScreen,
      navigationOptions: {
        drawerLabel: 'Maps',
      },
    },
    //Drawer Optons and indexing
    Bookings: {
      //Title
      screen: Bookings,
      navigationOptions: {
        drawerLabel: 'Bookings',
      },
    },
    Wallet: {
      //Title
      screen: Wallet,
      navigationOptions: {
        drawerLabel: 'Wallet',
      },
    },
    Settings: {
      //Title
      screen: Settings,
      navigationOptions: {
        drawerLabel: 'Settings',
      },
    },
  },
  {
    initialRouteName: 'MapScreen',
    contentComponent: props => (
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            marginBottom: 15,
            flexDirection: 'row',
            backgroundColor: colors.drawer,
            paddingHorizontal: 16,
            paddingVertical: height(5),
          }}>
          <Image
            source={require('../Assets/Images/profile-placeholder.jpeg')}
            style={{
              width: totalSize(8),
              height: totalSize(8),
              alignSelf: 'center',
              borderRadius: totalSize(20),
              marginTop: 10,
            }}
            resizeMode="cover"
          />
          <Text
            style={{
              alignSelf: 'center',
              marginTop: 10,
              fontSize: 28,
              fontWeight: '300',
              marginLeft: 12,
              color: '#ffffff',
            }}>
            Bobby
          </Text>
        </View>
        <ScrollView>
          <DrawerItems {...props} />
        </ScrollView>
      </SafeAreaView>
    ),
    contentOptions: {
      inactiveTintColor: '#555',
      activeTintColor: colors.drawer,
      activeBackgroundColor: '#ffffff',
      labelStyle: {
        fontSize: 20,
        fontWeight: '300',
      },
      itemStyle: {
        height: 60,
      },
    },
  },
);

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
    navigationOptions: {
      header: null,
    },
    // navigationOptions: ({navigation}) => {
    //   return {
    //     headerStyle: {backgroundColor: '#FFF', elevation: 0},
    //     headerLeft: (
    //       <TouchableOpacity onPress={() => navigation.goBack()}>
    //         <HeaderBackButton />
    //       </TouchableOpacity>
    //     ),
    //     title: 'Settings',
    //     headerTitleStyle: {
    //       fontWeight: 'bold',
    //     },
    //   };
    // },
  },
  wallet: {
    screen: Wallet,
    navigationOptions: {
      header: null,
    },
  },
  bookings: {
    screen: Bookings,
    navigationOptions: {
      header: null,
    },
  },
});

const StackSwitcher = createSwitchNavigator(
  {
    Auth: AuthStack,
    Main: MainStack,
    Drawer: customDrawer,
  },
  {
    initialRouteName: 'Auth',
  },
);

export default createAppContainer(StackSwitcher);
