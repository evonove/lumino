import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, change, submit } from 'redux-form';
import { View, Button, Alert } from 'react-native';
import { Picker } from 'native-base';

import styles from './style';
import { onLightControllerSubmit } from './validation';
import GradientHeader from '../components/GradientHeader/GradientHeader';
import HeaderButton from '../components/HeaderButton/HeaderButton';
import ControllerTypeSelector from '../components/ControllerTypeSelector/ControllerTypeSelector';
import LightSettingsForm from '../components/ControllerForm/LightSettingsForm';


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
        change('lightController', 'gateway', this.props.gateways[0].id),
      );

      // Controller type is a custom component and needs to be initialized too
      this.props.navigation.dispatch(
        change('lightController', 'type', 'switch')
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
    const deleteViewable = !this.props.initialValues ? { display: 'none' } : styles.deleteController;

    return (
      <View style={styles.container}>
        <ControllerTypeSelector
          onPress={this.props.onControllerTypePress}
          type={this.props.controllerType}
        />
        <LightSettingsForm gateways={gatewaysItems} />
        <View style={deleteViewable}>
          <Button
            onPress={() => this.props.onDelete(this.props.initialValues)}
            color="#DD3924"
            title="Delete controller"
            accessibilityLabel="Delete light controller"
          />
        </View>
      </View>
    );
  }
}

ControllerFormComponent.propTypes = {
  gateways: PropTypes.arrayOf(PropTypes.object).isRequired,
  navigation: PropTypes.object.isRequired,
  initialValues: PropTypes.object,
  onControllerTypePress: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};


const mapStateToProps = (state, { navigation, initialValues }) => {

  let controllerType = "switch";
  if (initialValues && initialValues.type) {
    controllerType = initialValues.type;
  } else if (
    state.form.lightController &&
    state.form.lightController.values &&
    state.form.lightController.values.type
  ) {
    controllerType = state.form.lightController.values.type;
  }

  const confirmDelete = (controller) => {
    const deleteAction = {
      type: 'DELETE_LIGHT_CONTROLLER',
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
        { text: 'Delete', onPress: () => confirmDelete(controller), style: 'destructive' },
      ],
    )
  }

  return {
    gateways: state.gateways,
    controllerType,
    onControllerTypePress: (controllerType) => {
      navigation.dispatch(change('lightController', 'type', controllerType));
    },
    onDelete,
    ...navigation.state.params,
  }
};


// Wrap into reduxForm for form handling
let ControllerForm = reduxForm({
  form: 'lightController',
  enableReinitialize: true,
  onSubmit: onLightControllerSubmit,
})(ControllerFormComponent);

ControllerForm = connect(mapStateToProps)(ControllerForm);

/**
 * StackNavigation options for ControllerForm component
 */
ControllerForm.navigationOptions = ({ navigation }) => {
  const { state, dispatch } = navigation;
  const { params } = state;

  // Custom submit function
  const onPress = () => dispatch(submit('lightController'));

  // If there are initialValues, we set the title to 'EDIT' and send the edit action
  // otherwise we create a new controller
  let title = 'New controller';
  if (params && params.initialValues && params.initialValues.id) {
    title = 'Edit controller';
  }

  return {
    title,
    header: props => <GradientHeader {...props} />,
    headerTintColor: 'white',
    headerRight: <HeaderButton onPress={onPress} text="Save" />,
  };
};


export default ControllerForm;
