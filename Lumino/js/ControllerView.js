import React from 'react';
import { Alert, Button, StyleSheet, Switch, Text, View } from 'react-native';

/**
 * Mock of single controller view
 */
const ControllerView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Controller #1</Text>
        <Button
          onPress={() => { Alert.alert('You press Settings button!')}}
          title="Settings"
        />
      </View>
      <View style={styles.controllersContainer}>
        <View style={styles.dimmerContainer}>
          <Switch />
        </View>
        <View style={styles.dimmerContainer}>
          <Button
            onPress={() => { Alert.alert('You increase the dimmer!')}}
            title="-"
          />
          <Text>1</Text>
          <Button
            onPress={() => { Alert.alert('You decrease the dimmer!')}}
            title="+"
          />
        </View>
      </View>
    </View>
  )
}

/**
 * ControllerView styles
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  controllersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  dimmerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  }
});

export default ControllerView;
