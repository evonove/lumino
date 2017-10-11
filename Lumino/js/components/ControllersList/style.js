import { StyleSheet } from 'react-native';

/**
 * ControllerView styles
 */
const palette = {
  primary: '#42275A',
  background: '#FFF',
  settings: '#8E8E93',
  lines: '#CECED2',
  fail: '#DD3924',
};

const sizes = {
  primaryFontSize: 17,
  fieldHeight: 44,
  secondaryFontSize: 15,
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
  container: {
    backgroundColor: palette.background,
    borderBottomWidth: 0.5,
    borderColor: palette.lines,
    borderTopWidth: 0.5,
    flex: 1,
    marginTop: 10,
  },
  controllerName: {
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: 'silver',
    flexDirection: 'row',
    height: sizes.fieldHeight,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  controllerNameText: {
    fontSize: sizes.primaryFontSize,
    fontWeight: '600',
  },
  gatewayNameContainer: {
    flexDirection: 'row',
  },
  gatewayNameText: {
    color: '#8E8E93',
    fontSize: sizes.primaryFontSize,
  },
  controllerNameTextDisabled: {
    fontWeight: '600',
    color: palette.fail,
  },
  gatewayNameTextDisabled: {
    color: palette.fail,
    fontSize: sizes.primaryFontSize,
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
  dimmerSwitchContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: sizes.fieldHeight,
    paddingHorizontal: 20,
  },
  dimmerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: sizes.fieldHeight,
    paddingHorizontal: 20,
  },
  controllerTemp: {
    flex: 1,
  },
  temperatureDimmerContainer: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
  temperatureDimmer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: sizes.fieldHeight,
  },
  pointTemp: {
    color: palette.settings,
    textAlign: 'center',
  },
  temperatureSignal: {
    alignItems: 'center',
    flexDirection: 'row',
    height: sizes.fieldHeight,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    width: '100%',
  },
  temperatureSignalText: {
    fontSize: sizes.primaryFontSize,
  },
  temperatureOptionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  temperatureOption: {
    alignItems: 'center',
    backgroundColor: palette.background,
    justifyContent: 'center',
    borderColor: palette.lines,
    borderRadius: 5,
    borderWidth: 0.5,
    height: 65,
    width: 65,
  },
  temperatureOptionSelected: {
    alignItems: 'center',
    backgroundColor: palette.primary,
    justifyContent: 'center',
    borderColor: palette.lines,
    borderRadius: 5,
    borderWidth: 0.5,
    height: 65,
    width: 65,
  },
  temperatureOptionText: {
    color: palette.primary,
  },
  temperatureOptionTextSelected: {
    color: palette.background,
  },
  slider: {
    flex: 2,
    marginHorizontal: 10,
    width: '100%',
  },
});

export default styles;
