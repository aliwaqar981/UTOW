import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import ApplicationStyles from '../../Themes/ApplicationStyles';
import {Divider} from 'react-native-elements';
import Modal from 'react-native-modal';
import React from 'react';
import {RegisterButton} from '../RegisterButton';

const otherServices = [
  {name: 'Tire Change', rate: '200'},
  {name: 'Lock Out', rate: '200'},
  {name: 'Low Fuel', rate: '200'},
];

export const DriverDetails = props => {
  const {visible, setVisible, driverName, selectedService} = props;
  return (
    <Modal
      isVisible={visible}
      coverScreen={false}
      hasBackdrop={false}
      deviceWidth={Dimensions.get('window').width}
      style={{margin: 0}}>
      <View style={[ApplicationStyles.mediumModalStyles, styles.container]}>
        <TouchableOpacity onPress={() => setVisible(false)}>
          <Image
            style={{marginTop: 10, width: 50, height: 50}}
            source={require('../../Assets/Images/awesome-down-arrow.png')}
          />
        </TouchableOpacity>
        <View style={styles.imageContainer}>
          <Text style={ApplicationStyles.boldText}>15 min</Text>
          <Image
            style={ApplicationStyles.profileImageStyle}
            resizeMode="contain"
            source={{uri: 'https://placeimg.com/400/400/people'}}
          />
          <Text style={ApplicationStyles.boldText}>1.2 mi</Text>
        </View>
        <Text
          style={[ApplicationStyles.profileNameText, {paddingVertical: 16}]}>
          {driverName}
        </Text>
        <Divider style={ApplicationStyles.dividerStyles1} />
        <View style={styles.selectedServiceContainer}>
          <Text style={ApplicationStyles.h1}>{selectedService.name}</Text>
          <Text style={[ApplicationStyles.p1, {marginRight: '5%'}]}>{`$${
            selectedService.rate
          }`}</Text>
        </View>
        <Divider
          style={[ApplicationStyles.dividerStyles1, {alignSelf: 'center'}]}
        />
        <View style={styles.otherServiceParentContainer}>
          <Text style={[ApplicationStyles.p2]}>Other Services</Text>
          {otherServices.map((serviceItem, serviceIndex) => {
            return (
              <View style={styles.otherServiceContainer}>
                <Text style={ApplicationStyles.h4}>{serviceItem.name}</Text>
                <Text
                  style={[
                    ApplicationStyles.rateFont,
                    {marginRight: '5%'},
                  ]}>{`$${serviceItem.rate}`}</Text>
              </View>
            );
          })}
        </View>
        <Divider
          style={[ApplicationStyles.dividerStyles1, {alignSelf: 'center'}]}
        />
        <View style={styles.walletContainer}>
          <Image
            style={{width: 50, height: 50}}
            source={require('../../Assets/Images/wallet.png')}
            resizeMode="contain"
          />
          <Text style={{marginRight: 40, fontWeight: 'bold'}}>
            Remaining in Wallet
          </Text>
          <Text style={{fontWeight: 'bold'}}>$10</Text>
        </View>
        <View style={{width: '90%', alignItems: 'center'}}>
          <RegisterButton title="Book Me" styles={{alignItems: 'center'}} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '85%',
    justifyContent: 'flex-start',
  },
  imageContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    alignItems: 'center',
  },
  bottomContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  manageBookingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  selectedServiceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
    justifyContent: 'space-between',
    marginLeft: '5%',
    alignSelf: 'flex-start',
    paddingVertical: 16,
  },
  otherServiceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // width: '60%',
    justifyContent: 'space-between',
  },
  otherServiceParentContainer: {
    width: '60%',
    marginLeft: '5%',
    paddingVertical: '5%',
    alignSelf: 'flex-start',
  },
  walletContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: '10%',
    paddingTop: '15%',
    paddingBottom: '5%',
  },
});
