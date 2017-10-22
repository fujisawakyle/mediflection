import { combineReducers } from 'redux';
import authReducer from './authReducer';
import mediflectionsReducer from './mediflectionsReducer';
import selectMediflectionReducer from './selectMediflectionReducer';
import daysArrayReducer from './daysArrayReducer';
import chartArrayReducer from './chartArrayReducer';

export default combineReducers({
  user: authReducer,
  mediflections: mediflectionsReducer,
  selectedMediflection: selectMediflectionReducer,
  daysArray: daysArrayReducer,
  chartArray: chartArrayReducer
});
