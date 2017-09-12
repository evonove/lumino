import React from 'react';
import { Picker } from 'react-native';


export default WrappedPicker = ({ input: { onChange, value}, label, children, ...custom }) => (
  <Picker
    selectedValue={ value }
    onValueChange={ (value, index) => onChange(value) }
    { ...custom }
  >
    { children }
  </Picker>
)
