import { ADD_ONE,MINUS_ONE } from '../actions/types';

const initialState = {   
  count:0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_ONE:
      return {
        ...state,
        count: state.count + 1
      };
    case MINUS_ONE:
      return {
        ...state,
        count: state.count - 1
      };
    default:
      return state;
  }
}