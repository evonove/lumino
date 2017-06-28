import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

/**
 * Mock of the gateways list. This is the home screen.
 */
export default class GatewayList extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Gateways',
    headerRight: <Button
                   onPress={() => navigation.navigate('NewGatewayForm')}
                   title="+"
                 />,
  });

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.gatewayContainer}>
          <Text>Gateway #1</Text>
          <Text>Active</Text>
        </View>
        <View style={styles.gatewayContainer}>
          <Text>Gateway #2</Text>
          <Text>Inactive</Text>
        </View>
        <View style={styles.gatewayContainer}>
          <Text>Gateway #3</Text>
          <Text>Inactive</Text>
        </View>
      </ScrollView>
    )
  }
}

/**
 * Home styles
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  gatewayContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
});
