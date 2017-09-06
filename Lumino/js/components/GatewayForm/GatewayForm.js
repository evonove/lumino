import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { NavigationActions } from 'react-navigation';
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
          placeholder="Name"
          name="name"
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
          component={WrappedTextInput}
          style={styles.textInput}
          placeholder="IP Address"
          name="ip_address"
        />
        <View style={styles.fieldDivider}></View>
        <Field
          component={WrappedTextInput}
          style={styles.textInput}
          placeholder="Port"
          name="port"
        />
        <View style={styles.fieldDivider}></View>
        <Field
          component={WrappedTextInput}
          style={styles.textInput}
          placeholder="Password"
          name="password"
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
      navigation.goBack()
    }
    } title="Save" color="white" />,
  };
};

export default GatewayForm;
