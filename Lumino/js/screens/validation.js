import { SubmissionError } from 'redux-form';
import { NavigationActions } from 'react-navigation';


export const onGatewaySubmit = (values, dispatch) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 15) {
    // Avoid too long names that would mess with the layout
    errors.name = 'Name should be less than 15 characters';
  }

  if (!values.ip_address) {
    errors.ip_address = 'Required';
  }

  if (!values.port) {
    errors.port = 'Required';
  } else {
    const portNumber = parseInt(values.port, 10);
    if (!Number.isInteger(portNumber) || portNumber < 0 || portNumber > 65535) {
      errors.port = 'Port should be a number between 0 and 65535';
    }
  }

  if (Object.keys(errors).length !== 0) {
    throw new SubmissionError({ ...errors, _error: 'Gateway creation/update failed' });
  }

  if (values.id) {
    dispatch({ type: 'EDIT_GATEWAY', values });
    dispatch({ type: 'EDIT_GATEWAY_NAME', values });
  } else {
    dispatch({ type: 'ADD_GATEWAY', values });
  }

  dispatch(NavigationActions.back());
};


export const onLightControllerSubmit = (values, dispatch) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 15) {
    // Avoid too long names that would mess with the layout
    errors.name = 'Name should be less than 15 characters';
  }

  if (!values.type) {
    errors.type = 'Required';
  }

  if (!values.idCode) {
    errors.idCode = 'Required';
  }

  if (!values.gateway) {
    errors.gateway = 'Required';
  }

  if (Object.keys(errors).length !== 0) {
    throw new SubmissionError({ ...errors, _error: 'Controller creation/update failed' });
  }

  if (values.id) {
    dispatch({ type: 'EDIT_LIGHT_CONTROLLER', values });
  } else {
    dispatch({ type: 'ADD_LIGHT_CONTROLLER', values });
  }

  dispatch(NavigationActions.back());
};


export const onTempControllerSubmit = (values, dispatch) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 15) {
    // Avoid too long names that would mess with the layout
    errors.name = 'Name should be less than 15 characters';
  }

  if (!values.idCode) {
    errors.idCode = 'Required';
  }

  if (!values.gateway) {
    errors.gateway = 'Required';
  }

  if (Object.keys(errors).length !== 0) {
    throw new SubmissionError({ ...errors, _error: 'Controller creation/update failed' });
  }

  if (values.id) {
    dispatch({ type: 'EDIT_TEMP_CONTROLLER', values });
  } else {
    dispatch({ type: 'ADD_TEMP_CONTROLLER', values });
  }

  dispatch(NavigationActions.back());
};
