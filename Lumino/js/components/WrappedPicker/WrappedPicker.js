import React from 'react';
import { Picker } from 'react-native';


export default function WrappedPicker(props) {
  const { input, label, children, ...custom } = props;

  return (
    <Picker
      {...input}
      selectedValue={ input.value }
      onValueChange={ (value, index) => input.onChange(value) }
      children={children}
      {...custom}
    />
  );
}
