import { types } from './actions';

const initialState = {
  value: 'Redux example value'
};

const timerReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EDIT_VALUE:
      return {
        value: action.payload
      };
    default:
      return state;
  }
};

export default timerReducer;
