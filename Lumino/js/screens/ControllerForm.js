import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, change } from 'redux-form'
import { Button, StyleSheet, ScrollView, Picker } from 'react-native';

import GradientHeader from '../components/GradientHeader/GradientHeader';
import ControllerTypeSelector from '../components/ControllerTypeSelector/ControllerTypeSelector';
import ControllerSettingsForm from '../components/ControllerForm/ControllerForm';

/**
 * ControllerForm styles
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

/**
 * Controller settings
 * @param  {[string]} navigation [navigation props received from the Home component.
 * It is used to link ControllerForm to ControllersList]
 */
let ControllerForm = (props) => {
  const gatewaysItems = props.gateways.map((gateway, index) => <Picker.Item key={index} label={gateway.name} value={gateway.id} />)
  return (
    <ScrollView style={styles.container}>
      <ControllerTypeSelector
        onPress={(controllerType) => props.navigation.dispatch(change('controller', 'type', controllerType))}/>
      <ControllerSettingsForm gateways={gatewaysItems} />
    </ScrollView>
  )
};


const mapStateToProps = state => ({
  gateways: state.gateways
});

ControllerForm = connect(mapStateToProps)(ControllerForm)

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

export default ControllerForm;
