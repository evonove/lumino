import React from 'react';
import PropTypes from 'prop-types';
import { Picker as NativePicker } from 'react-native';


const Picker = ({ input: { onChange, value }, children, ...custom }) => (
  <NativePicker
    selectedValue={value}
    onValueChange={val => onChange(val)}
    {...custom}
  >
    {children}
  </NativePicker>
);


Picker.propTypes = {
  input: PropTypes.object.isRequired,
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Picker;
