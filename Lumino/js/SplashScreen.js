import React from 'react';
import { Alert, Button, Image, StyleSheet, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./img/lumino.png')}
        />
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => { Alert.alert('You tapped the button!')}}
            color="#FEC006"
            title="Get Started"
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  imageContainer: {
    height: 200,
    width: 200
  },
  buttonContainer: {
    paddingTop: 25,
  },
});
