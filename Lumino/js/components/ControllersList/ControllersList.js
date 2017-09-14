import React from 'react';
import { ScrollView } from 'react-native';

import ControllerView from './ControllerView';

/**
 * Shows the list of controllers
 * @param {array} [controllers]. Array of controllers data.
 */
const ControllersList = ({ controllers, onControllerChange, onPress }) => {
  // Sort controllers alphabetically by name and then map the elements
  // to ControllerView components
  const controllersList = controllers
    .sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()))
    .map((controller, index) =>
      <ControllerView
        key={index}
        name={controller.name}
        type={controller.type}
        code={controller.code}
        gateway={controller.gateway}
        gateway_name={controller.gateway_name}
        value={controller.value}
        onControllerChange={(value) => onControllerChange(value, controller.id)}
        onPress={() => onPress(controller)}
      />
    );

  return (
    <ScrollView style={{flex: 1}}>
      {controllersList}
    </ScrollView>
  )
}

export default ControllersList;
