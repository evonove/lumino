import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

/**
 * View of a single gateway.
 * @param  {string} name. The gateway's name.
 * @param  {string} icon_name. The type of icon showed.
 * @param  {string} icon_color. The icon's color.
 */
const GatewayView = ({name, icon_name, icon_color}) => {
  return (
    <View
      style={styles.gatewayContainer}>
      <Text style={styles.gatewayHeading}>{name}</Text>
      <Icon
        name={icon_name}
        size={34}
        color={icon_color}
      />
    </View>
  )
}

/**
 * GatewayView styles
 */
const styles = StyleSheet.create({
  gatewayContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    borderColor: 'lightgray',
    flex: 1,
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

export default GatewayView;
