import { StyleSheet } from 'react-native';

const palette = {
  primary: '#42275A',
}

const styles = StyleSheet.create({
  gradient: {
    backgroundColor: palette.primary,
    height: 100 + '%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: 100 + '%',
  }
})


export default styles;
