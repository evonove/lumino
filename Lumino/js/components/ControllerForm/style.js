import { StyleSheet } from 'react-native';

/**
 * LightSettingsForm styles
 */
const palette = {
  background: '#FFF',
  settings: '#8E8E93',
  lines: '#CECED2',
};

const sizes = {
  primaryFontSize: 17,
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
  },
  textInput: {
    height: sizes.fieldHeight,
    paddingHorizontal: 20,
  },
  picker: {
    height: sizes.fieldHeight,
  },
  fieldDivider: {
    backgroundColor: palette.lines,
    height: 0.5,
    marginLeft: 20,
  },
  blockSelect: {
    alignItems: 'center',
    backgroundColor: palette.background,
    borderBottomWidth: 0.5,
    borderColor: palette.lines,
    borderTopWidth: 0.5,
    flexDirection: 'row',
    height: sizes.fieldHeight,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  textSelect: {
    fontSize: sizes.primaryFontSize,
  },
  buttonSelectItem: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  iconSelectItem: {
    marginLeft: 8,
    top: 2,
  },
  textItemSelected: {
    color: palette.settings,
    fontSize: sizes.primaryFontSize,
  },
});

export default styles;
