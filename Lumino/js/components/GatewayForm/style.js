import { StyleSheet } from 'react-native';

/**
 * GatewayForm styles
 */
const palette = {
  background: '#FFF',
  settings: '#8E8E93',
  lines: '#CECED2',
}

const sizes = {
  headingFontSize: 13,
  fieldHeight: 44,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blockHeading: {
    top: 20,
    paddingHorizontal: 20,
    height: sizes.fieldHeight,
  },
  textHeading: {
    color: palette.settings,
    fontSize: sizes.headingFontSize,
  },
  blockFields: {
    backgroundColor: palette.background,
    borderBottomWidth: 0.5,
    borderColor: palette.lines,
    borderTopWidth: 0.5,
  },
  textInput: {
    height: sizes.fieldHeight,
    paddingHorizontal: 20,
  },
  fieldDivider: {
    backgroundColor: palette.lines,
    height: 0.5,
    marginLeft: 20,
  },
});

export default styles;
