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
    width: '100%',
    height: 60,
    justifyContent: 'center',
  },
  customButtonText: {
    color: '#fff',
    fontSize: 22,
  },
  dividerStyles: {
    backgroundColor: '#c1c1c1',
    width: '80%',
  },
  dividerStyles1: {
    backgroundColor: '#c1c1c1',
    width: '100%',
  },
  h1: {
    fontSize: totalSize(3),
    fontWeight: 'bold',
  },
  h2: {
    fontSize: totalSize(3.5),
  },
  h3: {
    fontSize: totalSize(2),
  },
  h4: {
    fontSize: totalSize(2),
    fontWeight: 'bold',
  },
  innerContainer: {
    backgroundColor: 'red',
    marginLeft: 32,
  },
  p1: {
    fontSize: 24,
  },
  p2: {
    fontSize: 15,
  },
  p3: {
    fontSize: 14,
    fontWeight: '700',
  },
  rateFont: {
    fontSize: 18,
    color: '#282f39',
  },
  profileNameText: {
    fontSize: 17,
    color: '#43bfc1',
    fontWeight: 'bold',
  },
  profileImageStyle: {
    width: totalSize(10),
    height: totalSize(10),
    borderRadius: 80,
    marginTop: 16,
  },
  registerButtonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  cardStyles: {
    marginVertical: height(2),
    marginHorizontal: width(5),
    backgroundColor: '#fff',
    elevation: 10,
    position: 'absolute',
    top: 60,
    width: '90%',
    height: '16%',
    padding: totalSize(3),
  },
  fullModalStyles: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    padding: '5%',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  mediumModalStyles: {
    height: '32%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customButtonContainer: {
    width: 200,
    height: 40,
    backgroundColor: '#43bfc1',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: totalSize(5),
    marginTop: 16,
  },
  NoButtonStyles: {
    fontSize: 14,
    color: '#7f7f7f',
    fontWeight: '600',
  },
  cancelBookingText: {
    color: '#282f39',
    fontSize: 18,
    fontWeight: '800',
  },
  primaryButtonStyle: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '600',
  },
  activeText: {
    fontSize: 16,
    color: '#43bfc1',
    fontWeight: '400',
  },
  passiveText: {
    fontSize: 16,
    color: '#7f7f7f',
    fontWeight: '400',
  },
});
