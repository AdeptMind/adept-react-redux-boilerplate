import { types } from './actions';
import { getStorage, STORAGE_KEYS } from '../../services/storage';


const initialState = getStorage(STORAGE_KEYS.USER_SETTINGS) || {
  sidebar: {
    collapsed: false,
    opened: ['Query Labeler', 'Build Model']
  },
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_SETTINGS:
      return {
        ...action.payload
      };

    default:
      return state;
  }
};

export default usersReducer;
