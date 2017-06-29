import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import ControllerView from './ControllerView';
import Icon from 'react-native-vector-icons/Ionicons';

/**
 * Mock of the controllers list
 */
export default class ControllersList extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Controllers',
    headerRight: <TouchableOpacity
                   onPress={() => navigation.navigate('ControllerSettings')}
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
        name={'ios-options-outline'}
        size={26}
        color={tintColor}
      />
    ),
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
  headerIconButton: {
    marginRight: 20,
  },
  container: {
    flex: 1,
  }
});
