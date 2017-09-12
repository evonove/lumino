import React from 'react';
import { connect } from 'react-redux';

import { Button, StatusBar, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import GradientHeader from '../components/GradientHeader/GradientHeader';
import ControllersList from '../components/ControllersList/ControllersList';

/**
 * The screen which contains the controllers list.
 * It passes down the gateways mocked data.
 */
class ControllersScreen extends React.Component {
  render() {
    // Filter out controllers that are associated to an inactive gateway
    const activeGatewaysIds = this.props.gateways
      .filter((g) => g.status)
      .map((g) => g.id);
    const controllers = this.props.controllers
      .filter((c) => activeGatewaysIds.indexOf(c.gateway) !== -1) || []

    const onControllerChange = (value, id) => this.props.dispatch({type: 'CONTROLLER_CHANGE', value, id});

    return (
      <View style={{flex: 1}}>
        <StatusBar barStyle='light-content' />
        <ControllersList
          controllers={controllers}
          onControllerChange={onControllerChange}
          onPress={
            (controller) => { this.props.navigation.navigate(
              'ControllerForm',
              { initialValues: controller }
            )}
          }
        />
      </View>
    )
  }
}

ControllersScreen.navigationOptions = ({ navigation }) => ({
  title: 'Controllers',
  header: (props) => <GradientHeader {...props} />,
  headerTintColor: 'white',
  headerRight: <Button
    title="Add"
    color="white"
    onPress={() => navigation.navigate('ControllerForm')}
  />,
  tabBarIcon: ({ tintColor }) => (
    <Icon
      name={'ios-options-outline'}
      size={26}
      color={tintColor}
    />
  ),
});


const mapStateToProps = state => ({
  controllers: state.controllers,
  gateways: state.gateways
});


export default connect(mapStateToProps)(ControllersScreen);
