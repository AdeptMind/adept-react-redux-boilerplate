import reducer from './reducers';

// export { default as duckSelectors } from './selectors';
import timerOperations from './operations';
import { types as timerTypes } from './actions';

export {
  timerOperations,
  timerTypes,
};

export default reducer;
