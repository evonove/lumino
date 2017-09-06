import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, change } from 'redux-form'
import { withNavigation } from 'react-navigation';
import { Button, StyleSheet, ScrollView } from 'react-native';

import GradientHeader from '../components/GradientHeader/GradientHeader';
import ControllerTypeSelector from '../components/ControllerTypeSelector/ControllerTypeSelector';
import ControllerSettingsForm from '../components/ControllerForm/ControllerForm';

/**
 * Controller settings
 * @param  {[string]} navigation [navigation props received from the Home component.
 * It is used to link ControllerForm to ControllersList]
 */
const ControllerForm = (props) => (
  <ScrollView style={styles.container}>
    <ControllerTypeSelector
      onPress={(controllerType) => props.navigation.dispatch(change('controller', 'type', controllerType))}/>
    <ControllerSettingsForm />
  </ScrollView>
)

// Wrap into reduxForm for form handling
ControllerForm = reduxForm({form: 'controller'})(ControllerForm)

/**
 * StackNavigation options for ControllerForm component
 */
ControllerForm.navigationOptions = ({ navigation }) => ({
  title: 'New Controller',
  header: (props) => <GradientHeader {...props} />,
  headerTintColor: 'white',
  headerRight: <Button
    onPress={() => {
      navigation.dispatch({type: "ADD_CONTROLLER"});
      navigation.goBack()}
    }
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
