import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, Route, Switch } from 'react-router-dom';

import Home from '../home';

import './app.css';

const App = ( { exampleValue } ) => {
  return (
    <div className="container-fluid site-wrapper">
      <header>
        <div className="header-inner">
          <Link to="/">Home</Link>
        </div>
      </header>

      <main className='content-wrapper'>
        <div className="sidebar">
          <p>Sidebar</p>
          <p>Example from redux: `{exampleValue}`</p>

        </div>
        <div className="main-content">
          <Switch>
            <Route exact path='/' component={Home}></Route>
          </Switch>
        </div>
      </main>
    </div>
  );
};

App.propTypes = {
  exampleValue: PropTypes.string.isRequired,
};

class AppContainer extends Component {

  static propTypes = {
    exampleValue: PropTypes.string.isRequired,
  };

  render() {
    return (
      <App
        exampleValue={this.props.exampleValue}
      />
    );
  }
}

const mapStateToProps = ( state ) => ({
  // state variables to be injected into props goes here
  exampleValue: state.adept.example.value
});

const mapDispatchToProps = ( dispatch ) => bindActionCreators({
  // ... module operations go here
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
