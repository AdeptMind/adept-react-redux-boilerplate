import { actions } from './actions';

export const tick = actions.tick;

let timer = null;

let timerConfig = {
  updateFreq: 1000,
};

export const start = () => (dispatch) => {
  clearInterval(timer);
  timer = setInterval(() => dispatch(tick()), timerConfig.updateFreq);
  dispatch(actions.start());
  dispatch(actions.tick());
};

export const stop = () => {
  clearInterval(timer);
  return actions.stop();
};

export const reset = () => (dispatch) => {
  return new Promise((resolve) => {
    setTimeout(resolve, 1);
  })
    .then(() => {
      return dispatch(actions.reset());
    })
    .then(() => {
      // return dispatch(start());
    });
};

export default {
  start,
  stop,
  reset,
};
