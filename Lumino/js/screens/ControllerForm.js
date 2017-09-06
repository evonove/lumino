import React from 'react';
import { Button, StyleSheet, ScrollView } from 'react-native';
import { withNavigation } from 'react-navigation';

import GradientHeader from '../components/GradientHeader/GradientHeader';
import ControllerTypeSelector from '../components/ControllerTypeSelector/ControllerTypeSelector';
import ControllerSettingsForm from '../components/ControllerForm/ControllerForm';

/**
 * Controller settings
 * @param  {[string]} navigation [navigation props received from the Home component.
 * It is used to link ControllerForm to ControllersList]
 */
const ControllerForm = ({navigation}) => {
  const { goBack } = navigation;

  return (
    <ScrollView style={styles.container}>
      <ControllerTypeSelector />
      <ControllerSettingsForm />
    </ScrollView>
  )
}

/**
 * StackNavigation options for ControllerForm component
 */
ControllerForm.navigationOptions = ({ navigation }) => ({
  title: 'New Controller',
  header: (props) => <GradientHeader {...props} />,
  headerTintColor: 'white',
  headerRight: <Button
                 onPress={() => navigation.goBack()}
                 title="Save"
                 color="white"
               />
});

/**
 * ControllerForm styles
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ControllerForm;
