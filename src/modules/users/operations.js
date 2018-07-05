import { actions } from './actions';
import { getMe } from '../../services/users';
import { setStorage, STORAGE_KEYS } from '../../services/storage';

export const getMyUser = () => (dispatch, getState) => {
  return getMe()
    .then((user) => dispatch(actions.setMyUser(user)));
};

export const updateUserSettings = (payload) => (dispatch) => {
  setStorage(STORAGE_KEYS.USER_SETTINGS, JSON.stringify(payload));
  dispatch(actions.updateSettings(payload));
};

export default {
  getMyUser,
  updateUserSettings,
};
