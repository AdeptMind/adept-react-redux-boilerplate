const EDIT_VALUE = 'app/base/EDIT_VALUE';

const editValue = (payload) => ({
  type: EDIT_VALUE,
  payload
});

export const types = {
  EDIT_VALUE,
};

export const actions = {
  editValue,
};

export default {
  types,
  actions,
};
