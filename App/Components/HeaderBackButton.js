import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {height, totalSize, width} from 'react-native-dimension';

import ApplicationStyles from '../Themes/ApplicationStyles';
import {Icon} from 'react-native-elements';
import colors from '../Themes/Colors';

class HeaderBackButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: width(4),
          paddingVertical: 5,
        }}>
        <Icon
          name="ios-arrow-back"
          type="ionicon"
          color={colors.appTextColor1}
          size={totalSize(3.5)}
          iconStyle={{}}
        />
      </View>
    );
  }
}

export default HeaderBackButton;
