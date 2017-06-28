import React from 'react';
import { Alert, Button, StyleSheet, Switch, Text, View } from 'react-native';

const ControllerView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Controller #1</Text>
        <Button
          onPress={() => { Alert.alert('You press Settings button!')}}
          title="Settings"
        />
      </View>
      <View style={styles.controllersContainer}>
        <View style={styles.dimmerContainer}>
          <Text>Off</Text>
          <Switch />
          <Text>On</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 20,
  },
  controllersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  dimmerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  }
});

export default ControllerView;
