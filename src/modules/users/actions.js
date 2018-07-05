const SET_ME = 'app/users/SET_ME';
const SET_USERS = 'app/users/SET_USERS';
const UPDATE_SETTINGS = 'app/users/UPDATE_SETTINGS';

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
