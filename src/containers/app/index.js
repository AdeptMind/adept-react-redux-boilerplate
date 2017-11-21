import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Home from '../home';

import './app.css';

const App = ( props ) => {
  return (
    <div className="container-fluid site-wrapper">
      <header>
        <div className="header-inner">
          <Link to="/">Home</Link>
        </div>
      </header>

      <main className='content-wrapper'>
        <div className="sidebar">
          Sidebar
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

class AppContainer extends Component {

  componentDidMount() {
    this.props.start();
  }

  render() {
    return (
      <App
        resetTimer={this.props.reset}
        startTimer={this.props.start}
        stopTimer={this.props.stop}
      />
    );
  }
}

const mapStateToProps = ( state ) => ({
  // state variables to be injected into props goes here
});

const mapDispatchToProps = ( dispatch ) => bindActionCreators({
  // ... module operations go here
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
