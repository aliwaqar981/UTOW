import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Divider, ListItem} from 'react-native-elements';
import React, {useState} from 'react';

import ApplicationStyles from '../../Themes/ApplicationStyles';
import {CancelTripConfirmation} from '../Modals';
import {CustomButton} from '../CustomButton';
import Modal from 'react-native-modal';
import {height} from 'react-native-dimension';

const reasons = [
  "Rider isn't here",
  'Wrong address shown',
  "Don't charge rider",
  "Don't charge rider",
  "Don't charge rider",
  "Don't charge rider",
  "Don't charge rider",
];
export const CancelTrip = props => {
  const {visible, onDone, handleCrossButton} = props;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [cancelTripConfirmVisible, setCancelTripConfirmVisible] = useState(
    false,
  );
  const handleCancelButton = () => {
    setCancelTripConfirmVisible(!cancelTripConfirmVisible);
  };
  const handleConfirmedCancellation = () => {
    onDone(selectedIndex);
    setCancelTripConfirmVisible(!cancelTripConfirmVisible);
  };

  const handleDoneButton = () => {
    setCancelTripConfirmVisible(!cancelTripConfirmVisible);
  };
  return (
    <Modal
      isVisible={visible}
      coverScreen={true}
      hasBackdrop={false}
      deviceWidth={Dimensions.get('window').width}
      style={{margin: 0}}>
      <View style={ApplicationStyles.fullModalStyles}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={handleCrossButton}>
            <Image source={require('../../Assets/Images/close.png')} />
          </TouchableOpacity>
          <Text style={ApplicationStyles.cancelBookingText}>Cancel Trip</Text>
        </View>
        {reasons.map((item, index) => {
          return (
            <>
              <ListItem
                title={item}
                titleStyle={
                  index === selectedIndex
                    ? ApplicationStyles.activeText
                    : ApplicationStyles.passiveText
                }
                onPress={() => {
                  setSelectedIndex(index);
                }}
              />
              <Divider inset />
            </>
          );
        })}
        <CustomButton
          title="Done"
          onPress={handleDoneButton}
          style={[styles.doneButton, {width: '90%', height: height(5.5)}]}
          textStyle={ApplicationStyles.primaryButtonStyle}
        />
      </View>
      <CancelTripConfirmation
        visible={cancelTripConfirmVisible}
        onCancellationConfirmed={handleConfirmedCancellation}
        handleCancelButton={handleCancelButton}
      />
    </Modal>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '60%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  doneButton: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
});
