import {Dimensions, Image, Text, View} from 'react-native';
import {height, totalSize} from 'react-native-dimension';

import {AirbnbRating} from 'react-native-elements';
import ApplicationStyles from '../../Themes/ApplicationStyles';
import {CustomButton} from '../CustomButton';
import {Divider} from 'react-native-elements';
import Modal from 'react-native-modal';
import React from 'react';

export const CancelBooking = props => {
  const {visible, setVisible} = props;
  return (
    <Modal
      isVisible={visible}
      coverScreen={false}
      hasBackdrop={false}
      deviceWidth={Dimensions.get('window').width}
      style={{margin: 0}}>
      <View style={ApplicationStyles.mediumModalStyles}>
        <Text>Cancel John Booking</Text>
        <CustomButton
          title="Yes, Cancel"
          onPress={() => setVisible(!visible)}
          style={{width: '75%', height: height(6.5)}}
          textStyle={{fontSize: totalSize(2.4)}}
        />
        <CustomButton
          title="No"
          onPress={() => setVisible(!visible)}
          style={{width: '75%', height: height(6.5)}}
          textStyle={{fontSize: totalSize(2.4)}}
        />
      </View>
    </Modal>
  );
};
