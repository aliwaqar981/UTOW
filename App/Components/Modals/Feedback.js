import {Dimensions, Image, Text, View} from 'react-native';

import {AirbnbRating} from 'react-native-elements';
import ApplicationStyles from '../../Themes/ApplicationStyles';
import {CustomButton} from '../CustomButton';
import {Divider} from 'react-native-elements';
import Modal from 'react-native-modal';
import React from 'react';
import {totalSize} from 'react-native-dimension';

export const Feedback = props => {
  const {visible, setVisible} = props;
  const ratingCompleted = rating => {
    console.log('Rating is: ' + rating);
  };
  return (
    <Modal
      isVisible={visible}
      coverScreen={false}
      hasBackdrop={false}
      deviceWidth={Dimensions.get('window').width}
      style={{margin: 0}}>
      <View style={ApplicationStyles.mediumModalStyles}>
        <Text style={[{paddingTop: 16}]}>How was your rider?</Text>
        <Text
          style={[
            ApplicationStyles.profileNameText,
            {paddingVertical: 16, fontSize: totalSize(3)},
          ]}>
          John Turner
        </Text>
        <AirbnbRating
          type="custom"
          ratingCount={5}
          showRating={false}
          selectedColor="#43bfc1"
          onFinishRating={ratingCompleted}
          starContainerStyle={{
            width: '75%',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        />
        <CustomButton
          title="Rate the driver"
          onPress={() => setVisible(!visible)}
          style={{width: '75%', height: 48}}
          textStyle={{fontSize: 18}}
        />
      </View>
    </Modal>
  );
};
