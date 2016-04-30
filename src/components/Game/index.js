/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import alt from '../../core/alt';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Game.scss';

import MolesArea from './MolesArea';
import ScoreAndTimer from './ScoreAndTimer';
import Start from './Start';

import WhackAMoleStore from '../../stores/WhackAMoleStore';

class Game extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = this.getStoreState();
    this.onStoreChange = this.onWhackAMoleStoreChange.bind(this);
  }

  getStoreState() {
    const { score, timer } = WhackAMoleStore.getState();
    return { score, timer };
  }

  componentDidMount() {
    WhackAMoleStore.listen(this.onStoreChange);
  }

  componentWillUnmount() {
    WhackAMoleStore.unlisten(this.onStoreChange);
    // Reset the store
    alt.recycle(WhackAMoleStore);
  }

  onWhackAMoleStoreChange(storeState) {
    this.setState(storeState);
  }

  isGameRunning(timerValue) {
    return timerValue > 0;
  }

  render() {
    const { score, timer } = this.state;
    const gamePanel = this.isGameRunning(timer) ? <MolesArea /> : <Start score={score} />;

    this.context.onSetTitle("Whack-a-Mole game is loaded!");
    return (
      <div id="game-root" className={s.root + " container-fluid"}>
        <div className={s.panel}>
          {gamePanel}
        </div>
        <div className={s.side}>
          <ScoreAndTimer timer={timer} score={score} />
        </div>
        <div className={s.clear}></div>
      </div>
    );
  }

}

export default withStyles(Game, s);
