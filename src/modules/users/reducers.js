import { types } from './actions';

const initialState = {
  me: {},
  settings: {
    sidebar: {
      collapsed: false,
      opened: ['Query Labeler', 'Build Model']
    },
    dataset: ''
  }
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_ME:
      return {
        ...state,
        me: action.payload
      };

    case types.UPDATE_SETTINGS:
      return {
        ...state,
        settings: action.payload
      };

    default:
      return {
        ...state,
        settings: {
          ...initialState.settings,
          ...state.settings,
          sidebar: {
            ...initialState.settings.sidebar,
            ...state.settings.sidebar,
          }
        }
      };
  }
};

export default usersReducer;
