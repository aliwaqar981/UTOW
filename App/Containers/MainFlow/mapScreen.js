import {
  CancelTrip,
  CancelTripConfirmation,
  DriverBooked,
  DriverDetails,
  Feedback,
  Thankyou,
  TruckArrive,
} from '../../Components/';
import {Image, Picker, Text, View} from 'react-native';
import React, {useState} from 'react';
import {height, totalSize, width} from 'react-native-dimension';

import ApplicationStyles from '../../Themes/ApplicationStyles';
import MapView from 'react-native-maps';
import ModalDropdown from 'react-native-modal-dropdown';

export const MapScreen = props => {
  // To save reason which service have been selected
  const [selected, setSelected] = useState('Jump Start');
  // To save reason why trip has been cancelled
  const [cancelReason, setCancelReason] = useState('');
  // States of all modals visibility
  const [arriveVisible, setArriveVisible] = useState(false);
  const [driverBookedVisible, setDriverBookedVisible] = useState(false);
  const [driverDetailsVisible, setDriverDetailsVisible] = useState(true);
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [thankyouVisible, setThankyouVisible] = useState(false);
  const [cancelTripVisible, setcancelTripVisible] = useState(false);
  const [cancelTripConfirmVisible, setCancelTripConfirmVisible] = useState(
    false,
  );
  const handleSelected = (itemValue, itemIndex) => {
    setSelected(itemValue);
  };

  const handleDriverDetails = () => {
    setDriverDetailsVisible(!driverDetailsVisible);
    setDriverBookedVisible(!driverBookedVisible);
  };

  const handleBookedVisibility = () => {
    setDriverBookedVisible(!driverBookedVisible);
    setArriveVisible(!arriveVisible);
  };
  const handleArrivedVisibility = () => {
    setArriveVisible(!arriveVisible);
    setFeedbackVisible(!feedbackVisible);
  };

  const handleFeedback = () => {
    setFeedbackVisible(!feedbackVisible);
    setThankyouVisible(!thankyouVisible);
  };

  const handleThankyou = () => {
    setThankyouVisible(!thankyouVisible);
  };

  // Callback which will be called if user wants to cancel trip after booking
  const handleCancelTrip = () => {
    setDriverBookedVisible(!driverBookedVisible);
    setcancelTripVisible(!cancelTripVisible);
  };

  // Callback to get reason which user selects during cancellation trip
  const handleDoneCancellation = reason => {
    setCancelReason(reason);
    // setCancelTripConfirmVisible(!cancelTripConfirmVisible);
  };

  // Callback triggered if trip cancellation confirmed
  const handleConfirmedCancellation = () => {
    setCancelTripConfirmVisible(!cancelTripConfirmVisible);
  };

  // Callback triggered if trip cancellation not confirmed
  const handleNotConfirmedCancellation = () => {
    setCancelTripConfirmVisible(!cancelTripConfirmVisible);
    setCancelReason('');
  };
  return (
    <View style={ApplicationStyles.bgContainer}>
      <MapView
        style={{flex: 1}}
        initialRegion={{
          latitude: 31.5204,
          longitude: 74.3587,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        <MapView.Marker
          title="Rider available"
          coordinate={{latitude: 31.5204, longitude: 74.3587}}>
          <Image
            source={require('../../Assets/Images/truck.png')}
            resizeMode={'contain'}
            style={{width: totalSize(5), height: totalSize(5)}}
          />
        </MapView.Marker>
      </MapView>
      {/* <View style={ApplicationStyles.cardStyles}>
        <Text style={ApplicationStyles.h3}>Choose Your Service</Text>
        <ModalDropdown
          style={{
            height: 40,
            width: '90%',
            marginTop: 8,
            justifyContent: 'center',
            backgroundColor: '#43bfc1',
          }}
          textStyle={[ApplicationStyles.h3]}
          dropdownStyle={{
            width: '69%',
            // height: 100,
          }}
          animated={true}
          options={[
            'JumpStart',
            'Tow a Car',
            'Lock Out',
            'Low Fuel',
            'Tire Change',

            'Lock Out',
            'Low Fuel',
            'Tire Change',
          ]}
        />
      </View> */}
      <TruckArrive
        visible={arriveVisible}
        handleArrivedVisibility={handleArrivedVisibility}
      />
      <DriverBooked
        visible={driverBookedVisible}
        handleBookedVisibility={handleBookedVisibility}
        handleCancelTrip={handleCancelTrip}
      />
      <DriverDetails
        visible={driverDetailsVisible}
        handleDriverDetails={handleDriverDetails}
        driverName={'John Turner'}
        selectedService={{name: 'Jump Start', rate: '200'}}
      />
      <Feedback visible={feedbackVisible} setVisible={handleFeedback} />
      <Thankyou visible={thankyouVisible} setVisible={handleThankyou} />
      <CancelTrip visible={cancelTripVisible} onDone={handleDoneCancellation} />
      <CancelTripConfirmation
        visible={cancelTripConfirmVisible}
        onCancellationConfirmed={handleConfirmedCancellation}
        onCancellationNotConfirmed={handleNotConfirmedCancellation}
      />
    </View>
  );
};
