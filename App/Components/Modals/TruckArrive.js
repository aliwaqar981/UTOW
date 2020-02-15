import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

import ApplicationStyles from '../../Themes/ApplicationStyles';
import {CustomButton} from '../CustomButton';
import {Divider} from 'react-native-elements';
import Modal from 'react-native-modal';
import React from 'react';
import {totalSize} from 'react-native-dimension';

export const TruckArrive = props => {
  const {visible, setVisible} = props;
  return (
    <Modal
      isVisible={visible}
      coverScreen={false}
      hasBackdrop={false}
      deviceWidth={Dimensions.get('window').width}
      style={{margin: 0}}>
      <View style={styles.container}>
        <Image
          style={{
            width: totalSize(10),
            height: totalSize(10),
            borderRadius: totalSize(10),
            // backgroundColor: 'green',
          }}
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
          onPress={() => setVisible(!visible)}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '30%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
