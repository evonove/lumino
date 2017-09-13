import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, reset, change } from 'redux-form'
import { Button, Text, View } from 'react-native';

import styles from './style';
import GradientHeader from '../GradientHeader/GradientHeader';
import TextInput from '../WrappedComponents/TextInput';
import Switch from '../WrappedComponents/Switch';


/**
 * Gateway detail form.
 */
class GatewayFormComponent extends React.Component {
  componentDidMount() {
    if (!this.props.initialValues) {
      this.props.navigation.dispatch(
        change('gateway', 'status', true)
      );
    }
  }
  render() {
    // Do not show the delete button if we are creating a new Gateway
    const deleteViewable = !this.props.initialValues ? { display: 'none' } : {};

    return (
      <View style={ styles.container }>

        <View>
          <View style={ styles.blockHeading }>
            <Text style={ styles.textHeading }>INFO</Text>
          </View>
          <View style={ styles.blockFields }>
            <Field
              name="name"
              placeholder="Name"
              component={ TextInput }
              style={ styles.textInput }
            />
          </View>
        </View>

        <View>
          <View style={ styles.blockHeading }>
            <Text style={ styles.textHeading }>SETTINGS</Text>
          </View>
          <View style={ styles.blockFields }>
            <Field
              name="ip_address"
              placeholder="Gateway host"
              component={ TextInput }
              style={ styles.textInput }
            />
            <View style={ styles.fieldDivider }></View>
            <Field
              name="port"
              placeholder="Gateway Port"
              component={ TextInput }
              style={ styles.textInput }
            />
            <View style={ styles.fieldDivider }></View>
            <Field
              name="password"
              placeholder="Password"
              component={ TextInput }
              style={ styles.textInput }
              secureTextEntry={ true }
            />
          </View>
        </View>

        <View style={ styles.blockFields }>
          <Text>Enabled</Text>
          <Field name="status" component={ Switch } defaultValue={true}/>
        </View>

        <View style={ deleteViewable }>
          <Button
            title={ 'DELETE' }
            onPress={ this.props.onDelete }
          />
        </View>

      </View>
    )
  }
}


const mapStateToProps = (state, { navigation }) => ({
  gateways: state.gateways,
  onDelete: () => {
    navigation.dispatch({
      type: 'DELETE_GATEWAY',
      gateway: navigation.state.params.initialValues.id
    });
    navigation.navigate('GatewaysScreen');
  },
  ...navigation.state.params,
});


let GatewayForm = reduxForm({
  form: 'gateway',
  enableReinitialize: true,
})(GatewayFormComponent)


GatewayForm = connect(mapStateToProps)(GatewayForm)


// Add navigationOptions only after wrapping in reduxForm, otherwise they would be overwritten
GatewayForm.navigationOptions = (props) => {
  const { navigation } = props;
  const { state, setParams, dispatch, navigate } = navigation;
  const { params } = state;

  let action = {};
  let title = '';
  if (params && params.initialValues && params.initialValues.id) {
    action = { type: 'EDIT_GATEWAY', gateway: params.initialValues.id };
    title = 'Edit gateway';
  } else {
    action = { type: 'ADD_GATEWAY' };
    title = 'New gateway';
  }
  return {
    title,
    header: (props) => <GradientHeader {...props} />,
    headerTintColor: 'white',
    headerRight: <Button onPress={ () => { dispatch(action); navigate('GatewaysScreen'); } } title="Save" color="white" />,
  };
};

export default GatewayForm;
