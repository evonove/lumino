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
  componentDidMount() {
    // Add a timer that will poll gateways status
    setTimeout(
      () => this.props.gateways.forEach(
        (g) => {
          if (g.status) {
            gatewayStatus(this.props.dispatch, g, this.props.controllers.filter(c => c.gateway === g.id));
          }
        },
      ),
      5000
    );
  }

  componetWillUnmount() {
    clearInterval(this.checkGateways);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <GatewaysList
          gateways={this.props.gateways}
          onPress={this.props.gatewayDetail}
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
