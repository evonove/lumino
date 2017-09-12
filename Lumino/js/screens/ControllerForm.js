import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, change } from 'redux-form'
import { View, Button, StyleSheet, ScrollView, Picker } from 'react-native';

import GradientHeader from '../components/GradientHeader/GradientHeader';
import ControllerTypeSelector from '../components/ControllerTypeSelector/ControllerTypeSelector';
import ControllerSettingsForm from '../components/ControllerForm/ControllerForm';

/**
 * ControllerForm styles
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

/**
 * Controller settings
 * @param  {[string]} navigation [navigation props received from the Home component.
 * It is used to link ControllerForm to ControllersList]
 */
class ControllerForm extends React.Component {
  componentDidMount() {
    if (!this.props.initialValues) {
      this.props.navigation.dispatch(change('controller', 'gateway', this.props.gateways[0].id));
    }
  }

  render() {
    const gatewaysItems = this.props.gateways.map(
      (gateway, index) => (
        <Picker.Item
          key={ index }
          label={ gateway.name }
          value={ gateway.id }
        />
      )
    );

    const deleteViewable = this.props.initialValues === undefined ? {display: 'none'} : {};

    return (
      <ScrollView style={ styles.container }>
        <ControllerTypeSelector
          onPress={ (controllerType) => this.props.navigation.dispatch(
            change('controller', 'type', controllerType))
          }/>

        <ControllerSettingsForm
          gateways={ gatewaysItems }
          defaultGateway={ this.props.gateways[0].id }
        />

      <View style={deleteViewable}>
        <Button
          title={'DELETE'}
          onPress={(controller) => {
            this.props.navigation.dispatch( { type: 'DELETE_CONTROLLER', controller: this.props.initialValues.id });
            this.props.navigation.goBack();
          }}
        />
      </View>

    </ScrollView>
    )
  }
}


const mapStateToProps = (state, props) => ({
  gateways: state.gateways,
  ...props.navigation.state.params
});


// Wrap into reduxForm for form handling
ControllerForm = reduxForm({
  form: 'controller',
  enableReinitialize: true,
})(ControllerForm)

ControllerForm = connect(mapStateToProps)(ControllerForm)

/**
 * StackNavigation options for ControllerForm component
 */
ControllerForm.navigationOptions = ({ navigation }) => {
  const { state, setParams } = navigation;
  const { params } = state;
  let action = {}
  let title = '';
  if (params && params.initialValues && params.initialValues.id) {
    action = {type: 'EDIT_CONTROLLER', controller: params.initialValues.id};
    title = 'Edit controller';
  } else {
    action = { type: 'ADD_CONTROLLER' };
    title = 'New controller';
  }

  return {
    title,
    header: (props) => <GradientHeader {...props} />,
    headerTintColor: 'white',
    headerRight: <Button
      onPress={() => {
        navigation.dispatch(action);
        navigation.goBack()}
      }
      title="Save"
      color="white"
    />
  }
};

export default ControllerForm;
