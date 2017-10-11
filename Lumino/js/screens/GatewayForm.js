import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, change, submit } from 'redux-form';
import { Alert } from 'react-native';

import { onGatewaySubmit } from './validation';
import GatewayFormFields from '../components/GatewayForm/GatewayForm';
import GradientHeader from '../components/GradientHeader/GradientHeader';
import HeaderButton from '../components/HeaderButton/HeaderButton';


/**
 * Gateway detail form.
 */
class GatewayFormComponent extends React.Component {
  componentDidMount() {
    if (!this.props.initialValues) {
      // Set default true value to the switch
      this.props.navigation.dispatch(
        change('gateway', 'status', true),
      );
    }
  }

  render() {
    // Do not show the delete button if we are creating a new Gateway
    const deleteViewable = !this.props.initialValues;

    return (
      <GatewayFormFields
        onDelete={this.props.onDelete}
        deleteViewable={deleteViewable}
      />
    );
  }
}


GatewayFormComponent.propTypes = {
  initialValues: PropTypes.object,
  navigation: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};


/*
 * params: state.gateways and navigation.dispatch, state and navigate
 */
const mapStateToProps = (state, { navigation }) => {
  const confirmDelete = () => {
    const gatewayId = navigation.state.params.initialValues.id

    // Delete gateway
    navigation.dispatch({ type: 'DELETE_GATEWAY', gateway: gatewayId });

    // Also delete all the controllers associated to this gateway
    state.lightControllers
      .filter(c => c.gateway === gatewayId)
      .forEach(c => navigation.dispatch({ type: 'DELETE_LIGHT_CONTROLLER', controller: c.id }));

    state.tempControllers
      .filter(c => c.gateway === gatewayId)
      .forEach(c => navigation.dispatch({ type: 'DELETE_TEMP_CONTROLLER', controller: c.id }));

    // Go back to gateways page
    navigation.goBack();
  }

  const onDelete = (gateway) => {
    Alert.alert(
      'Confirm delete',
      'This will permanently delete this gateway ' +
      'and all associated controllers. Continue?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete',  onPress: () => confirmDelete(gateway), style: 'destructive' },
      ],
    )
  }

  return {
    onDelete,
    gateways: state.gateways,
    ...navigation.state.params,
  }
};


// Form with custom submit function
let GatewayForm = reduxForm({
  form: 'gateway',
  enableReinitialize: true,
  onSubmit: onGatewaySubmit,
})(GatewayFormComponent);


GatewayForm = connect(mapStateToProps)(GatewayForm);


// Add navigationOptions only after wrapping in reduxForm, because
// static class fields will be purged otherwise
GatewayForm.navigationOptions = ({ navigation }) => {
  const { state, dispatch } = navigation;
  const { params } = state;

  // Custom submit function
  const onPress = () => dispatch(submit('gateway'));

  let title = 'New gateway';
  if (params && params.initialValues && params.initialValues.id) {
    title = 'Edit gateway';
  }
  return {
    title,
    header: props => <GradientHeader {...props} />,
    headerTintColor: 'white',
    headerRight: <HeaderButton onPress={onPress} text="Save" />,
  };
};

export default GatewayForm;
