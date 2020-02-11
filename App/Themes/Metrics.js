import { Dimensions, Platform, StatusBar } from 'react-native'

const { width, height } = Dimensions.get('window')

const statusBarHeight = Platform.select({
  ios: 22,
  android: StatusBar.currentHeight
})

// Used via Metrics.baseMargin
const metrics = {
  marginBottom : 20,
  marginTop : 40,
  marginHorizontal: 20,
  marginVertical: 200,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  smallMargin: 5,
  doubleSection: 50,
  horizontalLineHeight: 1,
  searchBarHeight: 30,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: (Platform.OS === 'ios') ? 64 : 54,
  buttonRadius: 4,
  statusBarHeight,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 50
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 200
  }
}

export default metrics
