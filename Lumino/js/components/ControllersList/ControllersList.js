import React from 'react';
import { ScrollView } from 'react-native';

import ControllerView from './ControllerView';

/**
 * Shows the list of controllers
 * @param {array} [controllers]. Array of controllers data.
 */
const ControllersList = ({ controllers }) => {
  const controllersList = controllers.map((controller, index) =>
    <ControllerView
      key={index}
      name={controller.name}
      type={controller.type}
      code={controller.code}
      gateway={controller.gateway}
    />
  );

  return (
    <ScrollView style={{flex: 1}}>
      {controllersList}
    </ScrollView>
  )
}

export default ControllersList;