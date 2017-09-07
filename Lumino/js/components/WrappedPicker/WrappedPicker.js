import React from 'react';
import { Picker } from 'react-native';

export default function WrappedPicker(props) {
  const { input: { onChange, value, ...inputProps }, children, ...pickerProps } = props;

  return (
    <Picker
      selectedValue={ value }
      onValueChange={ value => onChange(value) }
      { ...inputProps }
      { ...pickerProps }
    >
      { children }
    </Picker>
  );
}
