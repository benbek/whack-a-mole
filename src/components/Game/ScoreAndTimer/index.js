import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './ScoreAndTimer.scss';

class ScoreAndTimer extends Component {

  static propTypes = {
    timer: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
  };

  static formatNumber(numberToFormat) {
    // Make sure number has always 00 format
    return ("0" + numberToFormat).slice(-2);
  }

  render() {
    const { score, timer } = this.props;

    return (
      <div className={s.root + ' text-center'}>
        <h1><i className="fa fa-lg fa-clock-o"></i> {ScoreAndTimer.formatNumber(timer)}</h1>
        <h1><i className="fa fa-lg fa-star"></i> {ScoreAndTimer.formatNumber(score)}</h1>
      </div>
    );
  }
}

export default withStyles(ScoreAndTimer, s);
