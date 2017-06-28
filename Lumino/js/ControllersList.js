import React from 'react';
import { Button, StyleSheet, ScrollView } from 'react-native';
import ControllerView from './ControllerView';

/**
 * Mock of the controllers list
 */
export default class ControllersList extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Controllers',
    headerRight: <Button
                   onPress={() => navigation.navigate('ControllerSettings')}
                   title="+"
                 />,
  });

  render() {
    return (
      <ScrollView style={styles.container}>
        <ControllerView />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  }
});
