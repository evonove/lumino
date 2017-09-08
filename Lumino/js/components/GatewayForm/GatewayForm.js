import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import styles from './style';
import GradientHeader from '../GradientHeader/GradientHeader';
import WrappedTextInput from '../WrappedTextInput/WrappedTextInput';


/**
 * Input form component for configuring a gateway.
 */
let GatewayForm = (props) => (
  <View style={styles.container}>
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
  </View>
);

// Wrap into reduxForm for form handling
GatewayForm = reduxForm({form: 'gateway'})(GatewayForm)

// Add navigationOptions only after wrapping in reduxForm, otherwise they would be overwritten
GatewayForm.navigationOptions = props => {
  const { navigation } = props;
  const { state, setParams } = navigation;
  const { params } = state;
  return {
    title: 'New Gateway',
    header: (props) => <GradientHeader {...props} />,
    headerTintColor: 'white',
    headerRight: <Button onPress={() => {
      navigation.dispatch({type: "ADD_GATEWAY"});
      navigation.goBack()}
    } title="Save" color="white" />,
  };
};

export default GatewayForm;
