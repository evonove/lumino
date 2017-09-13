import React from 'react';
import { Switch as NativeSwitch } from 'react-native';

export default Switch = ({ input: { onChange, value }, ...custom }) => {
  // Default value from react would be '', we use true instead
  // Use true as default value
  if (value === '') {
    value = true
  }

  return (
    <NativeSwitch
      value={value}
      onValueChange={onChange}
      { ...custom }
    />
  )
}
