import React from 'react';
import { Button, StyleSheet, ScrollView } from 'react-native';
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
    <ScrollView style={styles.container}>
      <ControllerTypeSelector />
      <ControllerSettingsForm />
    </ScrollView>
  )
}

/**
 * StackNavigation options for ControllerSettings component
 */
ControllerSettings.navigationOptions = ({ navigation }) => ({
  title: 'New Controller',
  headerStyle: {backgroundColor: '#42275A'},
    headerTintColor: 'white',
  headerRight: <Button
                 onPress={() => navigation.goBack()}
                 title="Save"
                 color="white"
               />
});

/**
 * ControllerSettings styles
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ControllerSettings;
