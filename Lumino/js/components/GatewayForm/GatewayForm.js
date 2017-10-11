import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { Button, Text, View } from 'react-native';

import styles from './style';
import TextInput from '../WrappedComponents/TextInput';
import Switch from '../WrappedComponents/Switch';


const GatewayForm = props => (
  <View style={styles.container}>

    <View>
      <View style={styles.blockHeading}>
        <Text style={styles.textHeading}>INFO</Text>
      </View>
      <View style={styles.blockFields}>
        <Field
          name="name"
          placeholder="Name"
          component={TextInput}
          style={styles.textInput}
        />
      </View>
    </View>

    <View>
      <View style={styles.blockHeading}>
        <Text style={styles.textHeading}>
          SETTINGS
        </Text>
      </View>
      <View style={styles.blockFields}>
        <Field
          name="ip_address"
          placeholder="Gateway host"
          component={TextInput}
          style={styles.textInput}
        />
        <View style={styles.fieldDivider} />
        <Field
          name="port"
          placeholder="Gateway Port"
          component={TextInput}
          style={styles.textInput}
          keyboardType={'numeric'}
        />
        <View style={styles.fieldDivider} />
        <View style={styles.switchContainer}>
          <Text style={styles.textLabel}>Enabled</Text>
          <Field
            name="status"
            component={Switch}
            defaultValue
          />
        </View>
      </View>
    </View>


    <View style={props.deleteViewable ? { display: 'none' } : styles.deleteGateway}>
      <Button
        onPress={props.onDelete}
        color="#DD3924"
        title="Delete Gateway"
        accessibilityLabel="Delete Gateway"
      />
    </View>

  </View>
);


GatewayForm.propTypes = {
  deleteViewable: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default GatewayForm;
