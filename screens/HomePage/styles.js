import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen')

export default StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    width: width,
  },
  pageTitle: {
    fontSize: 24,
    padding: 20,
    color: 'red',
  },
  logoContainer: {
    marginVertical: 15,
  },
  logo: {
    width: width * 0.8,
    height: height * 0.3,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  descrLabel: {
    fontSize: 16,
    padding: 20,
  },
  newsFeedTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});