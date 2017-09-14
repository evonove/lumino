import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, change, submit } from 'redux-form'
import { Button } from 'react-native';

import { onGatewaySubmit } from './validation';
import GatewayFormFields from '../components/GatewayForm/GatewayForm';
import GradientHeader from '../components/GradientHeader/GradientHeader';


/**
 * Gateway detail form.
 */
class GatewayFormComponent extends React.Component {
  componentDidMount() {
    if (!this.props.initialValues) {
      // Set default true value to the switch
      this.props.navigation.dispatch(
        change('gateway', 'status', true)
      );
    }
  }
  render() {
    // Do not show the delete button if we are creating a new Gateway
    const deleteViewable = !this.props.initialValues ? { display: 'none' } : {};

    return (
      <GatewayFormFields
        onDelete={this.props.onDelete}
        deleteViewable={deleteViewable}
      />
    )
  }
}


/*
 * params: state.gateways and navigation.dispatch, state and navigate
 */
const mapStateToProps = (state, { navigation }) => ({
  onDelete: () => {
    const deleteAction = {
      type: 'DELETE_GATEWAY',
      gateway: navigation.state.params.initialValues.id
    }
    navigation.dispatch(deleteAction);
    navigation.goBack();
  },
  gateways: state.gateways,
  ...navigation.state.params,
});


// Form with custom submit function
let GatewayForm = reduxForm({
  form: 'gateway',
  enableReinitialize: true,
  onSubmit: onGatewaySubmit,
})(GatewayFormComponent)


GatewayForm = connect(mapStateToProps)(GatewayForm)


// Add navigationOptions only after wrapping in reduxForm, because
// static class fields will be purged otherwise
GatewayForm.navigationOptions = (props) => {
  const { navigation } = props;
  const { state, dispatch } = navigation;
  const { params } = state;

  // Custom submit function
  const onPress = () => { dispatch(submit('gateway')) };

  let title = 'New gateway';
  if (params && params.initialValues && params.initialValues.id) {
    title = 'Edit gateway';
  }
  return {
    title,
    header: (props) => <GradientHeader {...props} />,
    headerTintColor: 'white',
    headerRight: <Button onPress={onPress} title="Save" color="white" />,
  };
};

export default GatewayForm;
