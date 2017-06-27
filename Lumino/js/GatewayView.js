import React from 'react';
import { Alert, Button, FlatList, Text, View } from 'react-native';

/**
 * View of a single gateway
 */
const GatewayView = () => {
  return (
    <View>
      <View>
        <Text>Controllers list</Text>
      </View>
      <Button
        onPress={() => { Alert.alert('Reconfigure the gateway')}}
        title="Configure"
      />
    </View>
  )
}

export default GatewayView;
