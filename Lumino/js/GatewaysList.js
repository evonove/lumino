import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';

/**
 * Mock of the gateways list
 * @param  {[string]} navigation [navigation props received from the Home component.
 */
const GatewayList = ({navigation}) => {
  const { navigate } = navigation;
  return (
    <ScrollView style={styles.container}>
      <View style={styles.gatewaysListContainer}>
        <View style={styles.gatewayContainer}>
          <View style={styles.gatewayHeader}>
            <Text style={styles.headerText}>Gateway #1</Text>
            <Button
              onPress={() => navigate ('NewGatewayForm')}
              title="Configure"
            />
          </View>
          <View style={styles.controllersContainer}>
            <View style={styles.controllerContainer}>
              <Text>Controller #1</Text>
              <Button
                onPress={() => navigate ('ControllerSettings')}
                title="Configure"
              />
            </View>
            <View style={styles.controllerContainer}>
              <Text>Controller #2</Text>
              <Button
                onPress={() => navigate ('ControllerSettings')}
                title="Configure"
              />
            </View>
          </View>
        </View>
        <View style={styles.gatewayContainer}>
          <View style={styles.gatewayHeader}>
            <Text style={styles.headerText}>Gateway #2</Text>
            <Button
              onPress={() => navigate ('NewGatewayForm')}
              title="Configure"
            />
          </View>
          <View style={styles.controllersContainer}>
            <View style={styles.controllerContainer}>
              <Text>Controller #1</Text>
              <Button
                onPress={() => navigate ('ControllerSettings')}
                title="Configure"
              />
            </View>
          </View>
        </View>
        <View style={styles.gatewayContainer}>
          <View style={styles.gatewayHeader}>
            <Text style={styles.headerText}>Gateway #3</Text>
            <Button
              onPress={() => navigate ('NewGatewayForm')}
              title="Configure"
            />
          </View>
          <View style={styles.controllersContainer}>
            <View style={styles.controllerContainer}>
              <Text>Controller #1</Text>
              <Button
                onPress={() => navigate ('ControllerSettings')}
                title="Configure"
              />
            </View>
            <View style={styles.controllerContainer}>
              <Text>Controller #2</Text>
              <Button
                onPress={() => navigate ('ControllerSettings')}
                title="Configure"
              />
            </View>
            <View style={styles.controllerContainer}>
              <Text>Controller #3</Text>
              <Button
                onPress={() => navigate ('ControllerSettings')}
                title="Configure"
              />
            </View>
          </View>
        </View>
      </View>
      <Button
        onPress={() => navigate ('NewGatewayForm')}
        title="New Gateway"
      />
    </ScrollView>
  )
}

/**
 * StackNavigation options for GatewayList component
 */
GatewayList.navigationOptions = {
  title: 'Gateways',
}

/**
 * Home styles
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  gatewaysListContainer: {
    paddingBottom: 30,
  },
  gatewayContainer: {
    paddingBottom: 20,
  },
  gatewayHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 20,
  },
  controllersContainer: {
    paddingLeft: 20,
  },
  controllerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default GatewayList;
