import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, change } from 'redux-form'
import { View, Button, ScrollView, Picker, Alert } from 'react-native';

import GradientHeader from '../components/GradientHeader/GradientHeader';
import ControllerTypeSelector from '../components/ControllerTypeSelector/ControllerTypeSelector';
import ControllerSettingsForm from '../components/ControllerForm/ControllerForm';


/**
 * Controller settings
 */
class ControllerFormComponent extends React.Component {
  componentDidMount() {
    // If there are no gateways, alert the user and send him back
    if (!this.props.gateways || this.props.gateways.length === 0) {
      Alert.alert('Create at least one gateway first!');
      this.props.navigation.goBack();
    } else if (!this.props.initialValues) {
      // Hack to fix a bug on the Picker component. Sometimes if the user never
      // changes Picker selected Item it won't be set as initialValue.
      // We call redux-form `change` action to trigger the first selection
      // if we are in a new controller form
      this.props.navigation.dispatch(
        change('controller', 'gateway', this.props.gateways[0].id)
      );
    }
  }

  render() {

    // Map list of gateways to Picker.Item components
    const gatewaysItems = this.props.gateways.map(
      (gateway, index) => (
        <Picker.Item
          key={ index }
          label={ gateway.name }
          value={ gateway.id }
        />
      )
    );

    let defaultGateway = undefined;
    if (this.props.gateways.length > 0) {
      defaultGateway = this.props.gateways[0].id;
    }

    // If there is no initialValues it means we are creating a new controller,
    // so no need to show the delete button (we hide it with css)
    const deleteViewable = this.props.initialValues === undefined ? {display: 'none'} : {};

    return (
      <ScrollView style={{ flex: 1 }}>
        <ControllerTypeSelector onPress={ this.props.onControllerTypePress }/>

        <ControllerSettingsForm
          gateways={ gatewaysItems }
          defaultGateway={ defaultGateway }
        />

      <View style={deleteViewable}>
        <Button title={'DELETE'} onPress={ this.props.onDelete } />
      </View>

    </ScrollView>
    )
  }
}


const mapStateToProps = (state, { navigation }) => ({
  gateways: state.gateways,
  onControllerTypePress: (controllerType) => navigation.dispatch(change('controller', 'type', controllerType)),
  onDelete: (controller) => {
    navigation.dispatch({ type: 'DELETE_CONTROLLER', controller: navigation.state.params.initialValues.id });
    navigation.navigate('ControllersScreen');
  },
  ...navigation.state.params
});


// Wrap into reduxForm for form handling
let ControllerForm = reduxForm({
  form: 'controller',
  enableReinitialize: true,
})(ControllerFormComponent)

ControllerForm = connect(mapStateToProps)(ControllerForm)

/**
 * StackNavigation options for ControllerForm component
 */
ControllerForm.navigationOptions = ({ navigation }) => {
  const { state, setParams } = navigation;
  const { params } = state;

  // If there are initialValues, we set the title to 'EDIT' and send the edit action
  // otherwise we create a new controller
  let action = {}
  let title = '';
  if (params && params.initialValues && params.initialValues.id) {
    action = { type: 'EDIT_CONTROLLER', controller: params.initialValues.id };
    title = 'Edit controller';
  } else {
    action = { type: 'ADD_CONTROLLER' };
    title = 'New controller';
  };

  return {
    title,
    header: (props) => <GradientHeader {...props} />,
    headerTintColor: 'white',
    headerRight: <Button
      onPress={() => {
        navigation.dispatch(action);
        navigation.navigate('ControllersScreen')}
      }
      title="Save"
      color="white"
    />
  }
};

export default ControllerForm;
