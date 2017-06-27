import React from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';
import ControllerView from './ControllerView';

const ControllersList = () => {
  return (
    <View style={styles.container}>
      <ControllerView />
      <Button
        onPress={() => { Alert.alert('Go to the gateways list!')}}
        title="Gateways List"
      />
    </View>
  )
}

ControllersList.navigationOptions = {
  title: 'Controllers',
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  }
});

export default ControllersList;
