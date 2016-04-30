import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import WhackAMoleActions from '../../../actions/WhackAMoleActions';

import s from './Start.scss';

class Start extends Component {

  handleGameStart() {
    // Reset game: Game has 10s duration and initial score is 0
    WhackAMoleActions.startGame();
  }

  render() {
    const { score } = this.props;

    const message =
      (score > 0) ?
        <div>
          <h1>Game over !</h1>
          <h1>Congratulations, your score is {score} !!!</h1>
        </div>
      :
        <h1>Welcome to my Whack-A-Mole</h1>;

    return (
      <div className={s.root + " text-center"}>
        {message}
        <button onClick={this.handleGameStart} type="button" className="btn btn-primary btn-lg"><i className="fa fa-play"></i> Play Game</button>
      </div>
    );
  }
}

export default withStyles(Start, s);
