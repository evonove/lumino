import React from 'react';
import PropTypes from 'prop-types';
import { Picker as NativePicker } from 'native-base';


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
