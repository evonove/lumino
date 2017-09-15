import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text } from 'react-native';

import styles from './style';


const HeaderButton = props => (
  <View>
    <TouchableOpacity onPress={props.onPress} >
      <Text style={styles.buttonText} >
        {props.text}
      </Text>
    </TouchableOpacity>
  </View>
);

HeaderButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};


export default HeaderButton;
