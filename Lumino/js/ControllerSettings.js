import React from 'react';
import { StyleSheet, View } from 'react-native';
import ControllerTypeSelector from './ControllerTypeSelector';
import ControllerSettingsForm from './ControllerSettingsForm.js';

/**
 * Controller settings
 */
const ControllerSettings = () => {
  return (
    <View style={styles.container}>
      <ControllerTypeSelector />
      <ControllerSettingsForm />
    </View>
  )
}

/**
 * StackNavigation options for ControllerSettings component
 */
ControllerSettings.navigationOptions = {
  title: 'Controller Settings'
}

/**
 * ControllerSettings styles
 */
const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
});

export default ControllerSettings;
