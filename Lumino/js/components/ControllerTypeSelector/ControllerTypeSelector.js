import React from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import IconIonic from 'react-native-vector-icons/Ionicons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import styles from './style';


const ControllerTypeSelector = (props) => (
  <View>
    <View style={styles.blockHeading}>
      <Text style={styles.textHeading}>TYPE</Text>
    </View>
    <View style={styles.blockFields}>

      <TouchableOpacity style={styles.button}
        onPress={() => props.onPress('switch')} >
        <IconFontAwesome
          name={'toggle-on'}
          color={'#42275A'}
          size={40}
        />
        <Text style={styles.buttonText}>Switch</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}
        onPress={() => props.onPress('dimmer')} >
        <IconIonic
          style={{bottom: 5}}
          name={'ios-git-commit'}
          color={'#42275A'}
          size={50}
        />
        <Text style={styles.buttonText}>Dimmer</Text>
      </TouchableOpacity>
    </View>
  </View>
)

export default ControllerTypeSelector;
