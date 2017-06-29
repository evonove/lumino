import React from 'react';
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

/**
 * Mock of the gateways list. This is the home screen.
 */
export default class GatewayList extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Gateways',
    headerRight: <TouchableOpacity
                   onPress={() => navigation.navigate('NewGatewayForm')}
                 >
                   <Icon
                     name={'ios-add'}
                     size={34}
                     color={'#5856D6'}
                     style={styles.headerIconButton}
                   />
                 </TouchableOpacity>,
    tabBarIcon: ({ tintColor }) => (
      <Icon
        name={'ios-expand'}
        size={26}
        color={tintColor}
      />
    ),
  });

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.gatewayContainer}>
          <Text style={styles.gatewayHeading}>Gateway #1</Text>
          <Icon
            name={'ios-checkmark'}
            size={34}
            color={'#4CD964'}
          />
        </View>
        <View style={styles.gatewayContainer}>
          <Text style={styles.gatewayHeading}>Gateway #2</Text>
          <Icon
            name={'ios-close'}
            size={34}
            color={'#FF3B30'}
          />
        </View>
        <View style={styles.gatewayContainer}>
          <Text style={styles.gatewayHeading}>Gateway #3</Text>
          <Icon
            name={'ios-close'}
            size={34}
            color={'#FF3B30'}
          />
        </View>
      </ScrollView>
    )
  }
}

/**
 * GatewayList styles
 */
const styles = StyleSheet.create({
  headerIconButton: {
    marginRight: 20,
  },
  container: {
    flex: 1,
  },
  gatewayContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    borderColor: 'lightgray',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 0.5,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  gatewayHeading: {
    fontSize: 17,
  },
});
