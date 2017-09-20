import { StyleSheet } from 'react-native';


const palette = {
  primary: '#42275A',
};

/**
 * SplashScreen styles
 */
const styles = StyleSheet.create({
  container: {
    // backgroundColor: palette.primary,
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  imageContainer: {
    height: 200,
    width: 200,
  },
  buttonContainer: {
    paddingTop: 25,
  },
});

export default styles;
