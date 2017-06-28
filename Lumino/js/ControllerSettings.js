import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import ControllerTypeSelector from './ControllerTypeSelector';
import ControllerSettingsForm from './ControllerSettingsForm';

/**
 * Controller settings
 * @param  {[string]} navigation [navigation props received from the Home component.
 * It is used to link ControllerSettings to ControllersList]
 */
const ControllerSettings = ({navigation}) => {
  const { navigate } = navigation;

  return (
    <View style={styles.container}>
      <View>
        <ControllerTypeSelector />
        <View style={styles.formContainer}>
          <ControllerSettingsForm />
        </View>
      </View>
      <View>
        <Button
          onPress={() => navigate('ControllersList')}
          title="Create"
        />
      </View>
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
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  formContainer: {
    marginTop: 30,
  }
});

export default ControllerSettings;
