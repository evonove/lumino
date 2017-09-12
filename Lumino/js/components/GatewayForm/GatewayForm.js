import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { Button, StyleSheet, Text, TextInput, View, Switch } from 'react-native';

import styles from './style';
import GradientHeader from '../GradientHeader/GradientHeader';
import WrappedTextInput from '../WrappedTextInput/WrappedTextInput';
import WrappedSwitch from '../WrappedSwitch/WrappedSwith';


/**
 * Input form component for configuring a gateway.
 */
let GatewayForm = (props) => {
  const deleteViewable = props.initialValues === undefined ? {display: 'none'} : {};

  return (
    <View style={styles.container}>

      <View style={styles.blockFields}>
        <Text>ACTIVE</Text>
        <Field name="status" component={WrappedSwitch} />
      </View>

      <View>
        <View style={styles.blockHeading}>
          <Text style={styles.textHeading}>INFO</Text>
        </View>
        <View style={styles.blockFields}>
          <Field
            name="name"
            placeholder="Name"
            component={WrappedTextInput}
            style={styles.textInput}
          />
        </View>
      </View>

      <View>
        <View style={styles.blockHeading}>
          <Text style={styles.textHeading}>SETTINGS</Text>
        </View>
        <View style={styles.blockFields}>
          <Field
            name="ip_address"
            placeholder="IP Address"
            component={WrappedTextInput}
            style={styles.textInput}
          />
          <View style={styles.fieldDivider}></View>
          <Field
            name="port"
            placeholder="Port"
            component={WrappedTextInput}
            style={styles.textInput}
          />
          <View style={styles.fieldDivider}></View>
          <Field
            name="password"
            placeholder="Password"
            component={WrappedTextInput}
            style={styles.textInput}
            secureTextEntry={true}
          />
        </View>

      </View>

      <View style={deleteViewable}>
        <Button
          title={'DELETE'}
          onPress={() => {
            props.navigation.dispatch({
              type: 'DELETE_GATEWAY',
              gateway: props.initialValues.id
            });
            props.navigation.goBack();
          }}
        />
      </View>

    </View>
  )
}


const mapStateToProps = (state, props) => ({
  gateways: state.gateways,
  ...props.navigation.state.params,
});

// Wrap into reduxForm for form handling
GatewayForm = reduxForm({
  form: 'gateway',
  enableReinitialize: true
})(GatewayForm)

GatewayForm = connect(mapStateToProps)(GatewayForm)

// Add navigationOptions only after wrapping in reduxForm, otherwise they would be overwritten
GatewayForm.navigationOptions = props => {
  const { navigation } = props;
  const { state, setParams } = navigation;
  const { params } = state;

  let action = {};
  let title = '';

  if (params && params.initialValues && params.initialValues.id) {
    action = {type: 'EDIT_GATEWAY', gateway: params.initialValues.id};
    title = 'Edit gateway';
  } else {
    action = {type: 'ADD_GATEWAY'}
    title = 'New gateway';
  }
  return {
    title,
    header: (props) => <GradientHeader {...props} />,
    headerTintColor: 'white',
    headerRight: <Button
      onPress={() => {
        navigation.dispatch(action);
        navigation.goBack()}
      }
      title="Save"
      color="white"
    />,
  };
};

export default GatewayForm;
