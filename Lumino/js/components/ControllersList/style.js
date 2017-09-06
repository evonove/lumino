import { StyleSheet } from 'react-native';

/**
 * ControllerView styles
 */
const palette = {
  background: '#FFF',
  settings: '#8E8E93',
  lines: '#CECED2',
}

const sizes = {
  primaryFontSize: 17,
  fieldHeight: 44,
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.background,
    borderBottomWidth: 0.5,
    borderColor: palette.lines,
    borderTopWidth: 0.5,
    flex: 1,
    marginTop: 10,
  },
  controllerName: {
    borderBottomWidth: 0.5,
    borderColor: 'silver',
    height: sizes.fieldHeight,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  controllerNameText: {
    fontWeight: '600',
  },
  controllerSwitch: {
    alignItems: 'center',
    height: sizes.fieldHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  switchLabel: {
    fontSize: sizes.primaryFontSize,
  },
  fieldDivider: {
    backgroundColor: palette.lines,
    height: 0.5,
    marginLeft: 20,
  },
  controllerDimmer: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    height: sizes.fieldHeight,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  slider: {
    flex: 2,
    marginHorizontal: 10,
  },
});

export default styles;
