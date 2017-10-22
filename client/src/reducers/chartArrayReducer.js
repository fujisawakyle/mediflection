import { CREATE_CHART_ARRAY, UPDATE_CHART_ARRAY } from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case CREATE_CHART_ARRAY:
      return state.concat(action.payload);
    case UPDATE_CHART_ARRAY:
      let day = new Date().getDay();
      return Object.assign([...state], { [day]: action.payload });
    default:
      return state;
  }
}
