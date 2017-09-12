import React from 'react';
import { Switch } from 'react-native';

export default WrappedSwitch = ({ input: { onChange, value }, ...custom }) => {
  if (value === '') {
    value = Switch.defaultProps.value
  }

  return (
    <Switch
      value={value}
      onValueChange={onChange}
      { ...custom }
    />
  )
}
