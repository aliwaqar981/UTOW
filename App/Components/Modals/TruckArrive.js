import {Dimensions, Image, Text, View} from 'react-native';

import ApplicationStyles from '../../Themes/ApplicationStyles';
import {CustomButton} from '../CustomButton';
import {Divider} from 'react-native-elements';
import Modal from 'react-native-modal';
import React from 'react';

export const TruckArrive = props => {
  const {visible, handleArrivedVisibility} = props;
  return (
    <Modal
      isVisible={visible}
      coverScreen={false}
      hasBackdrop={false}
      deviceWidth={Dimensions.get('window').width}
      style={{margin: 0}}>
      <View style={ApplicationStyles.mediumModalStyles}>
        <Image
          style={ApplicationStyles.profileImageStyle}
          resizeMode="contain"
          source={{uri: 'https://placeimg.com/400/400/people'}}
        />
        <Text
          style={[ApplicationStyles.profileNameText, {paddingVertical: 16}]}>
          John Turner
        </Text>
        <Divider style={ApplicationStyles.dividerStyles} />
        <CustomButton
          title="Your truck is here"
          onPress={handleArrivedVisibility}
        />
      </View>
    </Modal>
  );
};
