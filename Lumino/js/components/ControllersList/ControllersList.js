import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View } from 'react-native';

import ControllerView from './ControllerView';
import styles from './style';

/**
 * Shows the list of controllers
 * @param {array} [controllers]. Array of controllers data.
 */
const ControllersList = (
  {
    controllers,
    disabledControllers,
    viewDisabled,
    onControllerChange,
    onPress,
  }) => {
  // Sort controllers alphabetically by name and then map the elements
  // to ControllerView components
  const controllersList = controllers
    .sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()))
    .map(controller => (
      <ControllerView
        key={controller.id}
        name={controller.name}
        type={controller.type}
        code={controller.code}
        gateway={controller.gateway}
        gateway_name={controller.gateway_name}
        value={controller.value}
        onControllerChange={value => onControllerChange(value, controller.id)}
        onPress={() => onPress(controller)}
      />
    ));

  const disabledControllersList = disabledControllers
    .sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()))
    .map(controller => (
      <ControllerView
        key={controller.id}
        name={controller.name}
        type={controller.type}
        code={controller.code}
        gateway={controller.gateway}
        gateway_name={controller.gateway_name}
        value={0}
        onPress={() => onPress(controller)}
      />
    ));

  return (
    <ScrollView style={{ flex: 1 }}>
      {controllersList}
      <View style={viewDisabled ? {} : { display: 'none' }}>
        <View style={styles.blockHeading}>
          <Text style={styles.textHeading}>DISABLED CONTROLLERS</Text>
        </View>
        { viewDisabled ? disabledControllersList : null }
      </View>
    </ScrollView>
  );
};


ControllersList.propTypes = {
  controllers: PropTypes.arrayOf(PropTypes.object).isRequired,
  disabledControllers: PropTypes.arrayOf(PropTypes.object).isRequired,
  viewDisabled: PropTypes.bool.isRequired,
  onControllerChange: PropTypes.func.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default ControllersList;
