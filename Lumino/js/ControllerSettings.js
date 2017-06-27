import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import ControllerTypeSelector from './ControllerTypeSelector';
import ControllerSettingsForm from './ControllerSettingsForm';

/**
 * Controller settings
 * @param  {[string]} navigation [navigation props received from the Home component.
 * It is passed down to ControllerSettingsForm.]
 */
const ControllerSettings = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ControllerTypeSelector />
      <ControllerSettingsForm navigation = {navigation} />
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
