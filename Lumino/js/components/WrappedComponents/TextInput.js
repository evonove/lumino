import React from 'react';
import { TextInput as NativeTextInput, Text, View } from 'react-native';

/**
 * Wrapper around textinput to work with redux
 */
export default TextInput = (props) => {
  const { input, meta: { touched, error }, ...inputProps } = props;
  return (
    <View>
      <NativeTextInput
        {...inputProps}
        onChangeText={input.onChange}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        value={input.value}
      />
      {touched && error && <Text> {error} </Text>}
    </View>
  );
}
