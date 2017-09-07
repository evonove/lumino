import React from 'react';
import { ScrollView } from 'react-native';

import ControllerView from './ControllerView';

/**
 * Shows the list of controllers
 * @param {array} [controllers]. Array of controllers data.
 */
const ControllersList = ({ controllers, onDimmerChange, onSwitchChange }) => {
  const controllersList = controllers.map((controller, index) =>
    <ControllerView
      key={index}
      name={controller.name}
      type={controller.type}
      code={controller.code}
      gateway={controller.gateway}
      value={controller.value}
      onDimmerChange={(value) => onDimmerChange(value, controller.id)}
      onSwitchChange={(value) => onSwitchChange(value, controller.id)}
    />
  );

  return (
    <ScrollView style={{flex: 1}}>
      {controllersList}
    </ScrollView>
  )
}

export default ControllersList;
