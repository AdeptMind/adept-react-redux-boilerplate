import { actions } from './actions';
import { setStorage, STORAGE_KEYS } from '../../services/storage';

export const setSidebarCollapsed = (collapsed = false) => (dispatch, getState) => {
  let settings = {
    ...getState().adept.settings
  };
  settings.sidebar.collapsed = collapsed;

  const curr = updateUserSettings(settings);
  curr(dispatch, getState);
};

export const setSidebarNavCollapsed = (label, open = true) => (dispatch, getState) => {
  let settings = getState().adept.settings;
  const openedItems = open ?
    [...settings.sidebar.opened, label] :
    settings.sidebar.opened.filter((val) => val !== label);

  settings = {
    ...settings,
    sidebar: {
      ...settings.sidebar,
      opened: openedItems
    }
  };
  const curr = updateUserSettings(settings);
  curr(dispatch, getState);
};

export const updateUserSettings = (payload) => (dispatch) => {
  setStorage(STORAGE_KEYS.USER_SETTINGS, JSON.stringify(payload));
  dispatch(actions.updateSettings(payload));
};

export default {
  setSidebarCollapsed,
  setSidebarNavCollapsed,
  updateUserSettings,
};
