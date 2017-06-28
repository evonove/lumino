import React from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';

/**
 * Controller Type Selector
 */
const ControllerTypeSelector = () => {
  return (
    <View style={styles.container}>
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

/**
 * ControllerTypeSelector styles
 */
const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default ControllerTypeSelector;
