import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, Text, View, RefreshControl } from 'react-native';

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
    onControllerChange,
    onPress,
    onRefresh,
    refreshing
  }) => {
  // Sort controllers alphabetically by name and then map the elements
  // to ControllerView components
  const controllersList = controllers
    .sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()))
    .map(controller => (
      <ControllerView
        disabled={false}
        key={controller.id}
        name={controller.name}
        type={controller.type}
        code={controller.code}
        gateway={controller.gateway}
        gatewayName={controller.gatewayName}
        value={controller.value}
        actualTemp={controller.actualTemp}
        onControllerChange={value => onControllerChange(value, controller.id)}
        onPress={() => onPress(controller)}
      />
    ));
  const haveDisabled = disabledControllers.length > 0;
  const disabledControllersList = disabledControllers
    .sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()))
    .map(controller => (
      <ControllerView
        disabled={true}
        key={controller.id}
        name={controller.name}
        type={controller.type}
        code={controller.code}
        gateway={controller.gateway}
        gatewayName={controller.gatewayName}
        value={0}
        onPress={() => onPress(controller)}
      />
    ));

  const showTip = controllers.length === 0 && disabledControllers.length === 0;

  return (
    <ScrollView
      style={{ flex: 1 }}
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
      }
    >
      <View style={showTip ? {} : { display: 'none' } } >
        <View style={styles.blockHeading}>
          <Text style={styles.textHeading}>Press 'Add' to add your first controller</Text>
        </View>
      </View>

      {controllersList}
      <View style={haveDisabled ? {} : { display: 'none' } } >
        <View style={styles.blockHeading}>
          <Text style={styles.textHeading}>DISABLED CONTROLLERS</Text>
        </View>
        {disabledControllersList}
      </View>
    </ScrollView>
  );
};


ControllersList.propTypes = {
  controllers: PropTypes.arrayOf(PropTypes.object).isRequired,
  disabledControllers: PropTypes.arrayOf(PropTypes.object).isRequired,
  onControllerChange: PropTypes.func.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default ControllersList;
