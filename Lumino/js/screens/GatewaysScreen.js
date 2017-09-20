import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, StatusBar, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { gatewayStatus } from '../openwebnet';
import GradientHeader from '../components/GradientHeader/GradientHeader';
import GatewaysList from '../components/GatewaysList/GatewaysList';
import HeaderButton from '../components/HeaderButton/HeaderButton';


/**
 * Gateways list screen.
 */
class GatewaysScreen extends React.Component {
  constructor(props) {
    super(props);
    this.checkGateways = this.checkGateways.bind(this);
    this.refreshing = false;
  }

  checkGateways(force=false) {
    this.refreshing = true;
    // Call the function that will poll gateways statuses
    this.props.gateways.forEach((g) => {
      if (g.status) gatewayStatus(this.props.dispatch, g, force);
    });
    this.refreshing = false;
  }

  componentDidMount() {
    this.gatewaysTimer = setInterval(this.checkGateways, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.gatewaysTimer);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <GatewaysList
          gateways={this.props.gateways}
          onPress={this.props.gatewayDetail}
          onRefresh={() => this.checkGateways(true)}
          refreshing={this.refreshing}
        />
      </View>
    );
  }
}


GatewaysScreen.propTypes = {
  gateways: PropTypes.arrayOf(PropTypes.object).isRequired,
  dispatch: PropTypes.func.isRequired,
  gatewayDetail: PropTypes.func.isRequired,
};

GatewaysScreen.navigationOptions = ({ navigation }) => ({
  title: 'Gateways',
  header: props => <GradientHeader {...props} />,
  headerTintColor: 'white',
  headerRight: <HeaderButton text={"Add"} onPress={() => navigation.navigate('GatewayForm')} />,
  tabBarIcon: ({ tintColor }) => (
    <Icon
      name={'ios-expand'}
      size={26}
      color={tintColor}
    />
  ),
});


const mapStateToProps = (state, props) => ({
  controllers: state.controllers || [],
  gateways: state.gateways || [],
  gatewayDetail: gateway => props.navigation.navigate('GatewayForm', { initialValues: gateway }),
});

export default connect(mapStateToProps)(GatewaysScreen);
