import { StyleSheet } from 'react-native';

/**
 * GatewayView styles
 */
const palette = {
  background: '#FFF',
  lines: '#CECED2',
  success: '#4CD964',
  wait: '#DDD964',
  fail: '#DD3924',
};

const sizes = {
  primaryFontSize: 17,
  secondaryFontSize: 15,
  fieldHeight: 44,
  headingFontSize: 13,
};

const styles = StyleSheet.create({
  blockHeading: {
    top: 20,
    paddingHorizontal: 20,
    height: sizes.fieldHeight,
  },
  textHeading: {
    fontSize: sizes.headingFontSize,
  },
  gatewayContainer: {
    alignItems: 'center',
    backgroundColor: palette.background,
    borderBottomWidth: 0.5,
    borderColor: palette.lines,
    flex: 1,
    flexDirection: 'row',
    height: sizes.fieldHeight,
    justifyContent: 'space-between',
    marginTop: 0.5,
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  gatewayName: {
    fontSize: sizes.primaryFontSize,
  },
  gatewayConnection: {
    color: palette.success,
    fontSize: sizes.secondaryFontSize,
  },
  gatewayConnectionError: {
    color: palette.fail,
    fontSize: sizes.secondaryFontSize,
  },
  gatewayConnecting: {
    color: palette.wait,
    fontSize: sizes.secondaryFontSize,
  },
});


export default styles;
