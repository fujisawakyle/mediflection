import { combineReducers } from 'redux';
import authReducer from './authReducer';
import mediflectionsReducer from './mediflectionsReducer';
import selectMediflectionReducer from './selectMediflectionReducer';
import calendarDaysArrayReducer from './calendarDaysArrayReducer';
import weekChartArrayReducer from './weekChartArrayReducer';

export default combineReducers({
  user: authReducer,
  mediflections: mediflectionsReducer,
  selectedMediflection: selectMediflectionReducer,
  calendarDaysArray: calendarDaysArrayReducer,
  weekChartArray: weekChartArrayReducer
});
