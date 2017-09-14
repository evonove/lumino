import React from 'react';
import PropTypes from 'prop-types';
import { Switch as NativeSwitch } from 'react-native';

const Switch = ({ input: { onChange, value }, ...custom }) => (
  <NativeSwitch
    value={value === '' ? true : value}
    onValueChange={onChange}
    {...custom}
  />
);


Switch.propTypes = {
  input: PropTypes.object.isRequired,
};

export default Switch;
