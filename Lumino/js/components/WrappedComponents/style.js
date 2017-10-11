import { StyleSheet } from 'react-native';

/**
 * Wrapped Components styles
 */

const palette = {
  error: '#FF3B30',
};

const styles = StyleSheet.create({
  error: {
    color: palette.error,
    marginLeft: 17,
    position: 'relative',
    bottom: 3,
  },
})

export default styles;
