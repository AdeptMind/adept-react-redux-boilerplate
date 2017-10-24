import { Button } from 'react-bootstrap';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Timer from '../timer/';

// timer.js
import { timerOperations } from '../../modules/timer';

import './app.css';

const App = (props) => {
  const {
    startTimer,
    stopTimer,
    resetTimer
  } = props;
  return (
    <div className="container-fluid">
      <header>
        <Link to="/">Home</Link>
      </header>

      <main>
        {//<Route exact path="/" component={Home} />
        }
        <div className="container-fluid" id="agent-wrapper">
          <div className="col-md-2">
            sidebar
          </div>
          <div className="col-md-9">
            main view
          </div>
          <div className="col-md-1">
            info bar
            <Button bsStyle="primary" onClick={startTimer}>Start</Button>
            <Button bsStyle="primary" onClick={stopTimer}>Stop</Button>
            <Button bsStyle="danger" onClick={resetTimer}>Reset</Button>
            <Timer />
          </div>
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
        startTimer={this.props.start}
        stopTimer={this.props.stop}
        resetTimer={this.props.reset}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    timer: state.timer,
  };
};

const mapDispatchToProps = (dispatch) => bindActionCreators({
  ...timerOperations,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
