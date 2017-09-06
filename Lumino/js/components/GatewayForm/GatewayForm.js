import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { NavigationActions } from 'react-navigation';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import GradientHeader from '../GradientHeader/GradientHeader';

/**
 * GatewayForm styles
 */
const palette = {
  background: '#FFF',
  settings: '#8E8E93',
  lines: '#CECED2',
}

const sizes = {
  headingFontSize: 13,
  fieldHeight: 44,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blockHeading: {
    top: 20,
    paddingHorizontal: 20,
    height: sizes.fieldHeight,
  },
  textHeading: {
    color: palette.settings,
    fontSize: sizes.headingFontSize,
  },
  blockFields: {
    backgroundColor: palette.background,
    borderBottomWidth: 0.5,
    borderColor: palette.lines,
    borderTopWidth: 0.5,
  },
  textInput: {
    height: sizes.fieldHeight,
    paddingHorizontal: 20,
  },
  fieldDivider: {
    backgroundColor: palette.lines,
    height: 0.5,
    marginLeft: 20,
  },
});


/**
 * Wrapper around textinput to work with redux
 */
const MyTextInput = (props) => {
  const { input, ...inputProps } = props;
  return (
    <TextInput
      {...inputProps}
      onChangeText={input.onChange}
      onBlur={input.onBlur}
      onFocus={input.onFocus}
      value={input.value}
    />
  );
}

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
          component={MyTextInput}
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
          component={MyTextInput}
          style={styles.textInput}
          placeholder="IP Address"
          name="ip_address"
        />
        <View style={styles.fieldDivider}></View>
        <Field
          component={MyTextInput}
          style={styles.textInput}
          placeholder="Port"
          name="port"
        />
        <View style={styles.fieldDivider}></View>
        <Field
          component={MyTextInput}
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
