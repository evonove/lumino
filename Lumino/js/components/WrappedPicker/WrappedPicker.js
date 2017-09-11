import React from 'react';
import { Picker } from 'react-native';


export default WrappedPicker = ({ input, label, children, ...custom }) => (
  <Picker
    selectedValue={ input.value }
    onValueChange={ (value, index) => input.onChange(value) }
    { ...custom }
  >
    { children }
  </Picker>
);
