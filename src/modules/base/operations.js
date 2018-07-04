import { actions } from './actions';

export const editValue = (payload) => (dispatch, getState) => {
  return dispatch(actions.editValue(payload));
};

export default {
  editValue,
};
