import { AppNavigator } from '../navigators/AppNavigator';

// Create initial nav state
const initialState = AppNavigator.router.getStateForAction('home');

// nav reducer
const nav = (state = initialState, action) => AppNavigator.router.getStateForAction(action, state);

export default nav;
