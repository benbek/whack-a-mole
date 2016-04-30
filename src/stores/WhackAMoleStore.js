import alt from '../core/alt';

import WhackAMoleActions from '../actions/WhackAMoleActions';

class WhackAMoleStore {

  constructor() {
    this.timer = 0; // game has not started yet
    this.score = 0;

    this.timerIntervalId = 0;

    this.bindListeners({
      handleGameStart: WhackAMoleActions.START_GAME,
    });
  }

  _setTimerTick() {
    this.setState({timer: this.timer - 1});
    // Stop timer if reached 0
    if (this.timer === 0) {
      clearInterval(this.timerIntervalId);
    }
  }

  handleGameStart() {
    // Reset game: Game has 10s duration and initial score is 0
    this.setState({
      timer: 20,
      score: 0,
      timerIntervalId: setInterval(this._setTimerTick.bind(this), 1000),
    });
  }

}

export default alt.createStore(WhackAMoleStore, 'WhackAMoleStore');
