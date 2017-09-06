import React from 'react';
import { connect } from 'react-redux';

import { Button, StatusBar, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import GradientHeader from '../components/GradientHeader/GradientHeader';
import ControllerForm from '../components/ControllerForm/ControllerForm';
import ControllersList from '../components/ControllersList/ControllersList';

/**
 * The screen which contains the controllers list.
 * It passes down the gateways mocked data.
 */
const ControllersScreen = (props) => {
  const controllers = props.controllers || []
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle='light-content' />
      <ControllersList controllers={controllers} />
    </View>
  )
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
  controllers: state.controllers
});


export default connect(mapStateToProps)(ControllersScreen);
