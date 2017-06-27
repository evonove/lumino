import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import ControllerView from './ControllerView';

const ControllersList = ({navigation}) => {
  const { navigate } = navigation;

  return (
    <View style={styles.container}>
      <ControllerView />
      <Button
        onPress={() => navigate('GatewaysList')}
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
