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
  const { goBack } = navigation;

  return (
    <View style={styles.container}>
      <ControllerTypeSelector />
      <View style={styles.formContainer}>
        <ControllerSettingsForm />
      </View>
    </View>
  )
}

/**
 * StackNavigation options for ControllerSettings component
 */
ControllerSettings.navigationOptions = ({ navigation }) => ({
  title: 'New Controller',
  headerTintColor: '#5856D6',
  headerTitleStyle: { color: 'black' },
  headerRight: <Button
                 onPress={() => navigation.goBack()}
                 title="Save"
                 color="#5856D6"
               />
});

/**
 * ControllerSettings styles
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  formContainer: {
    marginTop: 30,
  }
});

export default ControllerSettings;
