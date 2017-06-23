import React from 'react';
import { Alert, Button, View } from 'react-native';

/**
 * Controller Type Selector
 */
const ControllerTypeSelector = () => {
  return (
    <View>
      <Button
        onPress={() => { Alert.alert('You choose Switch Lights!')}}
        title="Switch Lights"
      />
      <Button
        onPress={() => { Alert.alert('You choose Dimmable Lights')}}
        title="Dimmable Lights"
      />
    </View>
  )
}

export default ControllerTypeSelector;
