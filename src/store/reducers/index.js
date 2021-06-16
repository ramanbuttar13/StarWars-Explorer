import { combineReducers } from 'redux';
import { ui } from './uiReducer';
import { starWars } from './starWarsReducer'
const rootReducer = combineReducers({
  ui,
  starWars
});

export default rootReducer;
