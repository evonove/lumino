import React from 'react';
import { Alert, Button, Switch, Text, View } from 'react-native';

const ControllerView = () => {
  return (
    <View>
      <Text>Controller #1</Text>
      <Button
        onPress={() => { Alert.alert('You press Settings button!')}}
        title="Settings"
      />
      <Switch />
      <View>
        <Button
          onPress={() => { Alert.alert('You increase the dimmer!')}}
          title="+"
        />
        <Text>1</Text>
        <Button
          onPress={() => { Alert.alert('You decrease the dimmer!')}}
          title="-"
        />
      </View>
    </View>
  )
}

export default ControllerView;
