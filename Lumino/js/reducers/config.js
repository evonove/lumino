const config = (state = { viewDisabled: false }, action) => {
  switch (action.type) {
    case 'TOGGLE_DISABLED_CONTROLLERS':
      return { viewDisabled: !state.viewDisabled };
    default:
      return state;
  }
};

export default config;
