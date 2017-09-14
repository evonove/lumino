import React from 'react';
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux';
import { Field, SubmissionError, reduxForm, reset, change, submit } from 'redux-form'
import { Button, Text, View } from 'react-native';

import styles from './style';
import GradientHeader from '../GradientHeader/GradientHeader';
import TextInput from '../WrappedComponents/TextInput';
import Switch from '../WrappedComponents/Switch';


/**
 * Gateway detail form.
 */
class GatewayFormComponent extends React.Component {
  componentDidMount() {
    if (!this.props.initialValues) {
      this.props.navigation.dispatch(
        change('gateway', 'status', true)
      );
    }
  }
  render() {
    // Do not show the delete button if we are creating a new Gateway
    const deleteViewable = !this.props.initialValues ? { display: 'none' } : {};

    return (
      <View style={ styles.container }>

        <View>
          <View style={ styles.blockHeading }>
            <Text style={ styles.textHeading }>INFO</Text>
          </View>
          <View style={ styles.blockFields }>
            <Field
              name="name"
              placeholder="Name"
              component={ TextInput }
              style={ styles.textInput }
            />
          </View>
        </View>

        <View>
          <View style={ styles.blockHeading }>
            <Text style={ styles.textHeading }>SETTINGS</Text>
          </View>
          <View style={ styles.blockFields }>
            <Field
              name="ip_address"
              placeholder="Gateway host"
              component={ TextInput }
              style={ styles.textInput }
            />
            <View style={ styles.fieldDivider }></View>
            <Field
              name="port"
              placeholder="Gateway Port"
              component={ TextInput }
              style={ styles.textInput }
            />
            <View style={ styles.fieldDivider }></View>
            <Field
              name="password"
              placeholder="Password"
              component={ TextInput }
              style={ styles.textInput }
              secureTextEntry={ true }
            />
          </View>
        </View>

        <View style={ styles.blockFields }>
          <Text>Enabled</Text>
          <Field name="status" component={ Switch } defaultValue={true}/>
        </View>

        <View style={ deleteViewable }>
          <Button
            title={ 'DELETE' }
            onPress={ this.props.onDelete }
          />
        </View>

      </View>
    )
  }
}


const mapStateToProps = (state, { navigation }) => ({
  gateways: state.gateways,
  onDelete: () => {
    navigation.dispatch({
      type: 'DELETE_GATEWAY',
      gateway: navigation.state.params.initialValues.id
    });
    navigation.navigate('GatewaysScreen');
  },
  ...navigation.state.params,
});



const onSubmit = (values, dispatch) => {
  let errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 15) {
    // Avoid too long names that would mess with the layout
    errors.name = 'Name should be less than 15 characters';
  }

  if (!values.ip_address) {
    errors.ip_address = 'Required';
  }

  if (!values.port) {
    errors.port = 'Required';
  } else {
    const portNumber = parseInt(values.port);
    if (!Number.isInteger(portNumber) || 65535 < portNumber < 0) {
      errors.port = 'Port should be a number between 0 and 65535';
    }
  }

  if (Object.keys(errors).length !== 0) {
    throw new SubmissionError({...errors, _error: 'Gateway creation/update failed'})
  }

  if (values.id) {
    dispatch({ type: 'EDIT_GATEWAY', values });
  } else {
    dispatch({ type: 'ADD_GATEWAY', values });
  }

  dispatch(NavigationActions.back());
}



let GatewayForm = reduxForm({
  form: 'gateway',
  enableReinitialize: true,
  onSubmit,
})(GatewayFormComponent)


GatewayForm = connect(mapStateToProps)(GatewayForm)


// Add navigationOptions only after wrapping in reduxForm, otherwise they would be overwritten
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
