import {Dimensions, StyleSheet, Text, View} from 'react-native';

import ApplicationStyles from '../../Themes/ApplicationStyles';
import {CustomButton} from '../CustomButton';
import Modal from 'react-native-modal';
import React from 'react';
import {height} from 'react-native-dimension';

export const CancelTripConfirmation = props => {
  const {visible, handleCancelTripConfirm} = props;
  return (
    <Modal
      isVisible={visible}
      coverScreen={false}
      hasBackdrop={true}
      deviceWidth={Dimensions.get('window').width}
      style={{margin: 0}}>
      <View style={[ApplicationStyles.mediumModalStyles, {height: '26%'}]}>
        <Text style={ApplicationStyles.cancelBookingText}>
          Cancel John Booking?
        </Text>
        <CustomButton
          title="Yes, Cancel"
          onPress={handleCancelTripConfirm}
          style={{width: '75%', height: height(5.5)}}
          textStyle={ApplicationStyles.p3}
        />
        <CustomButton
          title="No"
          onPress={handleCancelTripConfirm}
          style={styles.customButtonContainer}
          textStyle={ApplicationStyles.NoButtonStyles}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  customButtonContainer: {
    width: '75%',
    height: height(5.5),
    backgroundColor: 'white',
    borderColor: '#7f7f7f',
    borderWidth: 0.5,
  },
});
