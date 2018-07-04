import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from '../../stores/store';
import App from './';

it('renders without crashing', () => {
  const target = document.createElement('div');
  const provider = (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>);
  render(provider, target);
});
