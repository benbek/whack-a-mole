import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './mole.scss';

class Mole extends Component {
  constructor(props) {
    super(props);

    // Setting configuration
    const config = {
      // This property indicates the likelihood a mole that's currently down will pop up
      // (percentage). Modify this value to change the game difficulty.
      popupPercentage: 3,
      // This property indicates how long a mole will stay visible once it has popped up
      // (in ms)
      popupLength: 1000,
      // The frame length for the checking algorithm; default: runs 20 times a second
      // (=50ms)
      frameLength: 50
    };
    // If the mole is up or not
    const up = false;
    this.state = { config, up };
  }

  componentDidMount() {
    const { config } = this.state;
    const intervalId = setInterval(() => {
      const { up } = this.state;
      if (!up) {
        // Mole is not up, find random value and check if greater then the percentage
        const randVal = Math.random() * 100;
        if (randVal < config.popupPercentage) {
          // Set mole up
          this.setState({ up: true });
          // Save time when the mole went up
          this.upTime = new Date().getTime();
        }
      } else {
        // Mole is up, check length since it went up
        if ((new Date().getTime() - this.upTime) > config.popupLength) {
          this.setState({ up: false });
        }
      }
    }, config.frameLength);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    // Clean up
    const { intervalId } = this.state;
    if (!!intervalId) {
      clearInterval(intervalId);
    }
  }

  onMoleClick(event) {
    event.preventDefault();
  }

  render() {
    return (
      <a href="#" className={s.mole + ' text-center'} onClick={this.onMoleClick.bind(this)}>
        <div className={s.person}>
          <img className={this.state.up ? s.up : ''} src={this.props.image}/>
        </div>
        <div className={s.hole}>
        </div>
      </a>
    );
  }
}
export default withStyles(Mole, s);
