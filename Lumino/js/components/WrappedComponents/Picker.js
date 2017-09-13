import React from 'react';
import { Picker as NativePicker } from 'react-native';


export default Picker = ({ input: { onChange, value}, label, children, ...custom }) => (
  <NativePicker
    selectedValue={ value }
    onValueChange={ (value, index) => onChange(value) }
    { ...custom }
  >
    { children }
  </NativePicker>
)
