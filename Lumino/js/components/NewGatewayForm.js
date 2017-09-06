import React from 'react';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import GradientHeader from './GradientHeader';

/**
 * NewGatewayForm styles
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

const submit = values => {
  console.log('submitting form', values)
}

/**
 * Input form component for configuring a gateway.
 */
let NewGatewayForm = (props) => (
  <View style={styles.container}>
    <View>
      <View style={styles.blockHeading}>
        <Text style={styles.textHeading}>INFO</Text>
      </View>
      <View style={styles.blockFields}>
        <Field
          placeholder="Name"
          name="name"
          component={TextInput}
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
          component={TextInput}
          style={styles.textInput}
          placeholder="IP Address"
          name="ip_address"
        />
        <View style={styles.fieldDivider}></View>
        <Field
          component={TextInput}
          style={styles.textInput}
          placeholder="Port"
          name="port"
        />
        <View style={styles.fieldDivider}></View>
        <Field
          component={TextInput}
          style={styles.textInput}
          placeholder="Password"
          name="password"
          secureTextEntry={true}
        />
        <Button onPress={() => props.onPress(props)} title="Save" />
      </View>

    </View>
  </View>
);

const mapStateToProps = state => ({
  form: state.form
});

const mapDispatchToProps = dispatch => ({
  onPress: (props) => {
    console.log(props);
    props.dispatch({type: 'ADD_GATEWAY', data: props });
    props.navigation.goBack()
  }
});


// Connect to redux store
NewGatewayForm = connect(mapStateToProps, mapDispatchToProps)(NewGatewayForm);

// Wrap into reduxForm for form handling
NewGatewayForm = reduxForm({form: 'gateway'})(NewGatewayForm)

// Add navigationOptions only after wrapping in reduxForm, otherwise they would be overwritten
NewGatewayForm.navigationOptions = props => {
  const { navigation } = props;
  const { state, setParams } = navigation;
  const { params } = state;
  return {
    title: 'New Gateway',
    header: (props) => <GradientHeader {...props} />,
    headerTintColor: 'white',
    headerRight: <Button onPress={() => console.log(props)} title="Save" color="white" />,
  };
};

export default NewGatewayForm;
