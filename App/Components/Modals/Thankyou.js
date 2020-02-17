import {Dimensions, Image, Text, View} from 'react-native';
import React, {useState} from 'react';
import {height, totalSize} from 'react-native-dimension';

import {AirbnbRating} from 'react-native-elements';
import ApplicationStyles from '../../Themes/ApplicationStyles';
import {CustomButton} from '../CustomButton';
import {Divider} from 'react-native-elements';
import Modal from 'react-native-modal';

export const Thankyou = props => {
  const {visible, setVisible} = props;
  const {rating, setRating} = useState(1);
  const ratingCompleted = rating => {
    console.log('Rating is: ' + rating);
    setRating(rating);
  };
  return (
    <Modal
      isVisible={visible}
      coverScreen={false}
      hasBackdrop={false}
      deviceWidth={Dimensions.get('window').width}
      style={{margin: 0}}>
      <View style={[ApplicationStyles.mediumModalStyles, {height: '20%'}]}>
        <CustomButton
          title="Thank you for rating"
          onPress={() => setVisible(!visible)}
          style={{width: '75%', height: height(6.5)}}
          textStyle={{fontSize: totalSize(2.4)}}
        />
      </View>
    </Modal>
  );
};
