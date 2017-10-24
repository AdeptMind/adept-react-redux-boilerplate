import { types } from './actions';

/* State Shape
{
  timeout: number
  countdown: boolean
  color: string
  colors: {
    error: string
    warning: string
    default: string
  }
  options: {
    size: number
    strokeWidth: number
  }
}
*/

const initialState = {
  timeout: 15 * 1000,
  countdown: false,
  colors: {
    error: '#e65555',
    warning: 'yellow',
    default: 'blue',
  },
  options: {
    size: 100,
    strokeWidth: 7,
  }
};

const timerReducer = (state = initialState, action) => {
  switch( action.type ) {
    case types.START:
      return {
        ...state,
        startTime: (new Date()).getTime(),
        active: true,
      };
    case types.STOP:
      return {
        ...state,
        active: false,
      };
    case types.RESET:
      return {
        ...state,
        startTime: (new Date()).getTime(),
      };
    case types.TICK:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default timerReducer;
