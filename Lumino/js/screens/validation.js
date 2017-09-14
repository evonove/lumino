import { SubmissionError } from 'redux-form'
import { NavigationActions } from 'react-navigation';


export const onGatewaySubmit = (values, dispatch) => {
  let errors = {};
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
    const portNumber = parseInt(values.port);
    if (!Number.isInteger(portNumber) || 65535 < portNumber < 0) {
      errors.port = 'Port should be a number between 0 and 65535';
    }
  }

  if (Object.keys(errors).length !== 0) {
    throw new SubmissionError({...errors, _error: 'Gateway creation/update failed'})
  }

  if (values.id) {
    dispatch({ type: 'EDIT_GATEWAY', values });
  } else {
    dispatch({ type: 'ADD_GATEWAY', values });
  }

  dispatch(NavigationActions.back());
}
