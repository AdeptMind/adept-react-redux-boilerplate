const SET_ME = 'app/settings/SET_ME';
const SET_USERS = 'app/settings/SET_USERS';
const UPDATE_SETTINGS = 'app/settings/UPDATE_SETTINGS';

const setMyUser = (payload) => ({
  type: SET_ME,
  payload,
});

const setUsers = (payload) => ({
  type: SET_USERS,
  payload,
});

const updateSettings = (payload) => ({
  type: UPDATE_SETTINGS,
  payload
});

export const types = {
  SET_ME,
  SET_USERS,
  UPDATE_SETTINGS,
};

export const actions = {
  setMyUser,
  setUsers,
  updateSettings,
};

export default {
  types,
  actions,
};
