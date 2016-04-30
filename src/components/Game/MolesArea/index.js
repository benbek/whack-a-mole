import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import Mole from '../Mole';

import s from './MolesArea.scss';

class MolesArea extends Component {

  render() {
    return (
      <div className={s.moles}>
        <Mole image="images/baby.svg" />
        <Mole image="images/wife.svg" />
        <Mole image="images/boy.svg" />
        <Mole image="images/girl.svg" />
        <Mole image="images/boy2.svg" />
      </div>
    );
  }
}

export default withStyles(MolesArea, s);
