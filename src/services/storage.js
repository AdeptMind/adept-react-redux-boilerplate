export const STORAGE_KEYS = {
  PROVIDER: 'adept-provider',
  USER_STORAGE_KEY: 'adept-user',
  USER_SETTINGS: 'adept-user-settings',
};

export const getStorage = (key) => {
  try {
    return JSON.parse(window.localStorage.getItem(key));
  } catch (e) {
    return window.localStorage.getItem(key);
  }
};

export const removeStorage = (key) => {
  return window.localStorage.removeItem(key);
};

export const setStorage = (key, val) => {
  if (typeof val === 'object') {
    val = JSON.stringify(val);
  }

  return window.localStorage.setItem(key, val);
};

export const getUserToken = () => {
  return getStorage(STORAGE_KEYS.USER_STORAGE_KEY);
};

export const setUserToken = (token) => {
  return setStorage(STORAGE_KEYS.USER_STORAGE_KEY, token);
};

export const removeUserToken = () => {
  return removeStorage(STORAGE_KEYS.USER_STORAGE_KEY);
};

export default {
  STORAGE_KEYS,
  getStorage,
  getUserToken,
  removeStorage,
  removeUserToken,
  setStorage,
  setUserToken
};
