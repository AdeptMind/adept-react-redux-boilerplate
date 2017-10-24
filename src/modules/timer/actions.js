const START = 'app/timer/START';
const STOP = 'app/timer/STOP';
const RESET = 'app/timer/RESET';
const TICK = 'app/timer/TICK';

const start = () => ({
  type: START
});

const stop = () => ({
  type: STOP,
});

const reset = () => ({
  type: RESET,
});

const tick = () => ({
  type: TICK,
});

export const types = {
  START,
  STOP,
  RESET,
  TICK,
};

export const actions = {
  start,
  stop,
  reset,
  tick,
};

export default {
  types,
  actions,
};
