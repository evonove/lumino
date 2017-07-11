import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import GradientHeader from './GradientHeader';

/**
 * Input form component for configuring a gateway.
 */
export default class NewGatewayForm extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'New Gateway',
    header: (props) => <GradientHeader {...props} />,
    headerTintColor: 'white',
    headerRight: <Button
                   onPress={() => navigation.goBack()}
                   title="Save"
                   color="white"
                 />
  });

  constructor(props) {
    super(props);
    this.state = { text: ''}
  }

  render() {
    // Form block headings
    const headings = {
      info: 'info',
      settings: 'settings',
    }

    return (
      <View style={styles.container}>
        <View>
          <View style={styles.blockHeading}>
            <Text style={styles.textHeading}>{headings.info.toUpperCase()}</Text>
          </View>
          <View style={styles.blockFields}>
            <TextInput
              style={styles.textInput}
              placeholder="Name"
              onChangeText={(text) => this.setState({text})}
            />
          </View>
        </View>
        <View>
          <View style={styles.blockHeading}>
            <Text style={styles.textHeading}>{headings.settings.toUpperCase()}</Text>
          </View>
          <View style={styles.blockFields}>
            <TextInput
              style={styles.textInput}
              placeholder="IP Address"
              onChangeText={(text) => this.setState({text})}
            />
            <View style={styles.fieldDivider}></View>
            <TextInput
              style={styles.textInput}
              placeholder="Port"
              onChangeText={(text) => this.setState({text})}
            />
            <View style={styles.fieldDivider}></View>
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(text) => this.setState({text})}
            />
          </View>
        </View>
      </View>
    )
  }
}

/**
 * NewGatewayForm styles
 */
const palette = {
  background: '#FFF',
  settings: '#8E8E93',
  lines: '#CECED2',
}

const sizes = {
  headingFontSize: 13,
  fieldHeight: 44,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blockHeading: {
    top: 20,
    paddingHorizontal: 20,
    height: sizes.fieldHeight,
  },
  textHeading: {
    color: palette.settings,
    fontSize: sizes.headingFontSize,
  },
  blockFields: {
    backgroundColor: palette.background,
    borderBottomWidth: 0.5,
    borderColor: palette.lines,
    borderTopWidth: 0.5,
  },
  textInput: {
    height: sizes.fieldHeight,
    paddingHorizontal: 20,
  },
  fieldDivider: {
    backgroundColor: palette.lines,
    height: 0.5,
    marginLeft: 20,
  },
});
