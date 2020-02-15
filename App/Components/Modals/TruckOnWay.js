import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import ApplicationStyles from '../../Themes/ApplicationStyles';
import {CustomButton} from '../CustomButton';
import {Divider} from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';
import React from 'react';
import {totalSize} from 'react-native-dimension';

export const TruckOnWay = props => {
  const {visible, setVisible} = props;
  return (
    <Modal
      isVisible={visible}
      coverScreen={false}
      hasBackdrop={false}
      deviceWidth={Dimensions.get('window').width}
      style={{margin: 0}}>
      <View style={ApplicationStyles.mediumModalStyles}>
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
          John Turner
        </Text>
        <Divider style={ApplicationStyles.dividerStyles} />
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.manageBookingContainer}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../Assets/Images/message.png')}
            />
            <Text style={{marginTop: 16}}>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.manageBookingContainer, {marginLeft: 16}]}>
            <Icon size={20} name="close" />
            <Text style={{marginTop: 16}}>Cancel Booking</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {},
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
});
