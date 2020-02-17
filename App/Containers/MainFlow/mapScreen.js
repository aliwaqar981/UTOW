import {
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
  const [selected, setSelected] = useState('Jump Start');
  const [arriveVisible, setArriveVisible] = useState(false);
  const [driverBookedVisible, setDriverBookedVisible] = useState(false);
  const [driverDetailsVisible, setDriverDetailsVisible] = useState(false);
  const [feedbackVisible, setFeedbackVisible] = useState(true);
  const [thankyouVisible, setThankyouVisible] = useState(false);
  const handleSelected = (itemValue, itemIndex) => {
    console.log('Check item', itemValue);
    setSelected(itemValue);
  };

  const handleDriverDetails = visible => {
    console.log('Check visible', visible);
    setDriverDetailsVisible(visible);
    setDriverBookedVisible(!driverBookedVisible);
  };

  const handleFeedback = () => {
    setFeedbackVisible(!feedbackVisible);
    setThankyouVisible(!thankyouVisible);
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
        setVisible={visible => setArriveVisible(visible)}
      />
      <DriverBooked
        visible={driverBookedVisible}
        setVisible={setDriverBookedVisible}
      />
      <DriverDetails
        visible={driverDetailsVisible}
        setVisible={handleDriverDetails}
        driverName={'John Turner'}
        selectedService={{name: 'Jump Start', rate: '200'}}
      />
      <Feedback visible={feedbackVisible} setVisible={handleFeedback} />
      <Thankyou visible={thankyouVisible} setVisible={setThankyouVisible} />
    </View>
  );
};
