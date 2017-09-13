
// Validation func
const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 15) {
    // Avoid too long names that would mess with the layout
    errors.name = 'Name should be less than 15 characters!';
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

  return errors;
}

