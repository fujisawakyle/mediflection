import { combineReducers } from 'redux';
import authReducer from './authReducer';
import mediflectionsReducer from './mediflectionsReducer';
import selectMediflectionReducer from './selectMediflectionReducer';
import daysArrayReducer from './daysArrayReducer';
import weekChartArrayReducer from './weekChartArrayReducer';

export default combineReducers({
  user: authReducer,
  mediflections: mediflectionsReducer,
  selectedMediflection: selectMediflectionReducer,
  daysArray: daysArrayReducer,
  weekChartArray: weekChartArrayReducer
});
