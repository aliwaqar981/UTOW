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
  innerContainer: {
    backgroundColor: 'red',
    marginLeft: 32,
  },
  p1: {
    fontSize: 15,
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
});
