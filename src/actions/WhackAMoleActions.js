import alt from '../core/alt';

class WhackAMoleActions {

  /**
   * Starts a new Whack-a-Mole game.
   */
  startGame() {
    this.dispatch();
  }

  /**
   * When the game timer ticks.
   */
  timeTick() {
    this.dispatch();
  }
}
export default alt.createActions(WhackAMoleActions);
