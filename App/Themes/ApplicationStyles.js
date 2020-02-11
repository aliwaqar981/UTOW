import {height, totalSize, width} from 'react-native-dimension';

import {StyleSheet} from 'react-native';
import colors from './Colors';
import family from './Fonts';

export default StyleSheet.create({
  bgContainer: {flex: 1, justifyContent: 'center'},
  boldText: {
    fontWeight: 'bold',
  },
  mainContainer: {flex: 1, alignItems: 'center'},
  customButton: {
    backgroundColor: '#43bfc1',
    width: '88%',
    height: 60,
    justifyContent: 'center',
  },
  customButtonText: {
    color: '#fff',
    fontSize: 24,
  },
  h1: {
    fontSize: totalSize(3),
    fontWeight: 'bold',
  },
  h2: {
    fontSize: totalSize(3.5),
  },
  innerContainer: {
    marginLeft: 32,
  },
  p1: {
    fontSize: 15,
  },
  registerButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
});
