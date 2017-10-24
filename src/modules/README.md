Using the Ducks pattern for react+redux scalable development flow.

Reserved for:
  - Actions
  - Reducers
  - Action Creators

Please read:
  - https://github.com/erikras/ducks-modular-redux
  - https://medium.freecodecamp.org/scaling-your-redux-app-with-ducks-6115955638be
  - https://github.com/alexnm/re-ducks
  - https://github.com/FortechRomania/react-redux-complete-example
  - https://www.robinwieruch.de/the-soundcloud-client-in-react-redux-ducks/

Follows the code structure:

```
// widgets.js

// Actions
const LOAD   = 'my-app/widgets/LOAD';
const CREATE = 'my-app/widgets/CREATE';
const UPDATE = 'my-app/widgets/UPDATE';
const REMOVE = 'my-app/widgets/REMOVE';

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    // do reducer stuff
    default: return state;
  }
}

// Action Creators
export function loadWidgets() {
  return { type: LOAD };
}

export function createWidget(widget) {
  return { type: CREATE, widget };
}

export function updateWidget(widget) {
  return { type: UPDATE, widget };
}

export function removeWidget(widget) {
  return { type: REMOVE, widget };
}

// side effects, only as applicable
// e.g. thunks, epics, etc
export function getWidget () {
  return dispatch => get('/widget').then(widget => dispatch(setWidget(widget)))
}
```