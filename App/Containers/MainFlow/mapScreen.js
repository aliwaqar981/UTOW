import {
  CancelTrip,
  CancelTripConfirmation,
  DriverBooked,
  DriverDetails,
  Feedback,
  Thankyou,
  TruckArrive,
} from '../../Components/';
import {Image, Picker, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {height, totalSize, width} from 'react-native-dimension';

import ApplicationStyles from '../../Themes/ApplicationStyles';
import {DrawerActions} from 'react-navigation-drawer';
import {Icon} from 'react-native-elements';
import MapView from 'react-native-maps';
import Modal from 'react-native-modal';
import ModalDropdown from 'react-native-modal-dropdown';

const services = ['JumpStart', 'Tow a Car', 'Lock Out', 'Low Fuel'];

export const MapScreen = props => {
  // To save reason which service have been selected
  const [selected, setSelected] = useState('JumpStart');
  // To save reason why trip has been cancelled
  const [cancelReason, setCancelReason] = useState('');
  const [dropDownVisible, setDropDownVisible] = useState(true);
  // States of all modals visibility
  const [arriveVisible, setArriveVisible] = useState(false);
  const [driverBookedVisible, setDriverBookedVisible] = useState(false);
  const [driverDetailsVisible, setDriverDetailsVisible] = useState(false);
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [thankyouVisible, setThankyouVisible] = useState(false);
  const [cancelTripVisible, setcancelTripVisible] = useState(false);

  const handleSelected = itemIndex => {
    setSelected(services[itemIndex]);
    setDriverDetailsVisible(!driverDetailsVisible);
    setDropDownVisible(!dropDownVisible);
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
    setDropDownVisible(!dropDownVisible);
  };

  // Callback which will be called if user wants to cancel trip after booking
  const handleCancelTrip = () => {
    setDriverBookedVisible(!driverBookedVisible);
    setcancelTripVisible(!cancelTripVisible);
  };

  // Callback to get reason which user selects during cancellation trip
  const handleDoneCancellation = reason => {
    setCancelReason(reason);
    setcancelTripVisible(!cancelTripVisible);
    setDropDownVisible(!dropDownVisible);
  };

  // Callback triggered if cross is clicked on cancel trip modal
  const handleCrossButton = () => {
    setcancelTripVisible(!cancelTripVisible);
    setDriverBookedVisible(!driverBookedVisible);
  };

  const renderDropdown = () => {
    return (
      <View style={ApplicationStyles.cardStyles}>
        <Text style={ApplicationStyles.h3}>Choose Your Service</Text>
        <ModalDropdown
          style={{
            height: 40,
            width: '90%',
            marginTop: 8,
            justifyContent: 'center',
            backgroundColor: '#43bfc1',
          }}
          defaultValue="JumpStart"
          defaultIndex={0}
          textStyle={[ApplicationStyles.h3]}
          dropdownStyle={{
            width: '69%',
            // height: 100,
          }}
          onSelect={handleSelected}
          animated={true}
          options={services}
        />
      </View>
    );
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
      {dropDownVisible ? renderDropdown() : null}
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
      <CancelTrip
        visible={cancelTripVisible}
        onDone={handleDoneCancellation}
        handleCrossButton={handleCrossButton}
      />
      <View
        style={{
          position: 'absolute',
          top: totalSize(3.5),
          left: totalSize(3),
          zIndex: 20,
        }}>
        <TouchableOpacity
          onPress={() =>
            props.navigation.dispatch(DrawerActions.toggleDrawer())
          }
          style={{zIndex: 100}}>
          <Icon name="menu" size={40} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
