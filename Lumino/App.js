import React from 'react';
import { StyleSheet, View } from 'react-native';
import SplashScreen from './js/SplashScreen';
import NewGatewayForm from './js/NewGatewayForm';
import { StackNavigator } from 'react-navigation';

/**
 * Home screen
 */
class Home extends React.Component {
  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <SplashScreen navigation = {navigation} />
      </View>
    );
  }
}

/**
 * Stack navigation options for Home component
 */
Home.navigationOptions = {
  title: 'Welcome',
};

/**
 * The main App component.
 * It adds all navigable screens to the StackNavigator.
 */
const App = StackNavigator({
  Home: {screen: Home},
  NewGatewayForm: {screen: NewGatewayForm},
});

/**
 * Home styles
 */
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6639B6',
    flex: 1,
  },
});

export default App;
