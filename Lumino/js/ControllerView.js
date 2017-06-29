import React from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Switch,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

/**
 * Mock of single controller view
 */
const ControllerView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.controllerHeading}>Controller #1</Text>
        <TouchableWithoutFeedback
           onPress={() => { Alert.alert('You open Settings')}}
          >
            <Icon
              name={'ios-settings-outline'}
              size={26}
              color={'#5856D6'}
              style={styles.headerIconButton}
            />
          </TouchableWithoutFeedback>
      </View>
      <View style={styles.controllersContainer}>
        <View style={styles.dimmerContainer}>
          <Switch />
        </View>
        <View style={styles.dimmerContainer}>
          <TouchableWithoutFeedback
           onPress={() => { Alert.alert('You decrease the dimmer!')}}
          >
            <Icon
              name={'ios-remove-outline'}
              size={26}
              color={'#5856D6'}
              style={styles.headerIconButton}
            />
          </TouchableWithoutFeedback>
          <Text>1</Text>
          <TouchableWithoutFeedback
           onPress={() => { Alert.alert('You increase the dimmer!')}}
          >
            <Icon
              name={'ios-add-outline'}
              size={26}
              color={'#5856D6'}
              style={styles.headerIconButton}
            />
          </TouchableWithoutFeedback>
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
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    borderColor: 'lightgray',
    flex: 1,
    marginTop: 0.5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: 'lightgray',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
    paddingBottom: 10,
  },
  controllerHeading: {
    fontSize: 17,
  },
  controllersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 5,
  },
  dimmerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 75,
  }
});

export default ControllerView;
