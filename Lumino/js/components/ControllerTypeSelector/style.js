import { StyleSheet } from 'react-native';

/**
 * ControllerTypeSelector styles
 */
const palette = {
  primary: '#42275A',
  background: '#FFF',
  settings: '#8E8E93',
  lines: '#CECED2',
};

const sizes = {
  headingFontSize: 13,
  fieldHeight: 44,
};

const styles = StyleSheet.create({
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: palette.lines,
    borderRadius: 5,
    borderWidth: 0.5,
    height: 100,
    marginVertical: 20,
    paddingVertical: 14,
    width: 100,
  },
  buttonText: {
    color: palette.primary,
  },
});

export default styles;
