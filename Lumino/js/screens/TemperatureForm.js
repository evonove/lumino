import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, change, submit } from 'redux-form';
import { View, Button, ScrollView, Alert } from 'react-native';
import { Picker } from 'native-base';

import { onControllerSubmit } from './validation';
import LightSettingsForm from '../components/ControllerForm/LightSettingsForm';
import TempControllerForm from '../components/ControllerForm/TempControllerForm';
import HeaderButton from '../components/HeaderButton/HeaderButton';
import GradientHeader from '../components/GradientHeader/GradientHeader';


/**
 * Controller settings
 */
class TemperatureFormComponent extends React.Component {
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
        change('controller', 'gateway', this.props.gateways[0].id),
      );

      // Controller type is a custom component and needs to be initialized too
      this.props.navigation.dispatch(
        change('controller', 'type', 'temp')
      );
    }

  }

  render() {
    // Map list of gateways to Picker.Item components
    const gatewaysItems = this.props.gateways.map(
      (gateway, index) => (
        <Picker.Item
          key={index}
          label={gateway.name}
          value={gateway.id}
        />
      ),
    );

    // If there is no initialValues it means we are creating a new controller,
    // so no need to show the delete button (we hide it with css)
    const deleteViewable = !this.props.initialValues ? { display: 'none' } : {};

    return (
      <ScrollView style={{ flex: 1 }}>
        <TempControllerForm gateways={gatewaysItems} />
        <View style={deleteViewable}>
          <Button
            title={'DELETE'}
            onPress={() => this.props.onDelete(this.props.initialValues)}
          />
        </View>
      </ScrollView>
    );
  }
}

TemperatureFormComponent.propTypes = {
  gateways: PropTypes.arrayOf(PropTypes.object).isRequired,
  navigation: PropTypes.object.isRequired,
  initialValues: PropTypes.object,
  onDelete: PropTypes.func.isRequired,
};


const mapStateToProps = (state, { navigation, initialValues }) => {

  const confirmDelete = (controller) => {
    const deleteAction = {
      type: 'DELETE_CONTROLLER',
      controller: controller.id,
    };
    navigation.dispatch(deleteAction);
    navigation.goBack();
  }

  const onDelete = (controller) => {
    Alert.alert(
      'Confirm delete',
      'This will permanently delete this controller, confirm?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'DELETE', onPress: () => confirmDelete(controller) },
      ],
    )
  }

  return {
    gateways: state.gateways,
    onDelete,
    ...navigation.state.params,
  }
};


// Wrap into reduxForm for form handling
let TempForm = reduxForm({
  form: 'controller',
  enableReinitialize: true,
  onSubmit: onControllerSubmit,
})(TemperatureFormComponent);

TempForm = connect(mapStateToProps)(TempForm);

/**
 * StackNavigation options for TempForm component
 */
TempForm.navigationOptions = ({ navigation }) => {
  const { state, dispatch } = navigation;
  const { params } = state;

  // Custom submit function
  const onPress = () => dispatch(submit('controller'));

  // If there are initialValues, we set the title to 'EDIT' and send the edit action
  // otherwise we create a new controller
  let title = 'New temperature controller';
  if (params && params.initialValues && params.initialValues.id) {
    title = 'Edit temperature controller';
  }

  return {
    title,
    header: props => <GradientHeader {...props} />,
    headerTintColor: 'white',
    headerRight: <HeaderButton onPress={onPress} text="Save" />,
  };
};


export default TempForm;
