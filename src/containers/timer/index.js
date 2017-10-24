import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import { Circle } from 'rc-progress';
import { timerOperations } from '../../modules/timer';

import './timer.css';

class TimerContainer extends Component {
  componentWillUpdate() {
    const { timer } = this.props;
    let timeDiff = (new Date()).getTime() - timer.startTime;
    if(timeDiff > timer.timeout && timer.active && timer.countdown) {
      this.props.stop();
    }
  }
  render() {
    const { timer } = this.props;
    let timeNow = (new Date()).getTime();
    let timeDiff = timeNow - timer.startTime;
    let percent = timeDiff / timer.timeout * 100;
    return (
      <div className="timer-wrapper">
        <span className="timer-text">
          <Moment fromNow format={timer.countdown ? 'ss' : 'mm:ss'}>
            { timer.countdown ? timer.timeout - timeDiff + 1000 : timeDiff}
          </Moment>
        </span>
          <Circle
            percent={percent}
            {...timer.options}
            strokeColor={timerColor(timer, timeDiff)}
          />
      </div>
    );
  }
}

function timerColor(timer, timeLapsed) {
  if (timeLapsed >  timer.timeout * 0.75) {
    return timer.colors.error;
  }
  if (timeLapsed > timer.timeout * 0.5) {
    return timer.colors.warning;
  }
  return timer.colors.default;

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
)(TimerContainer);
