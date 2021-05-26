import React from 'react';
import style from './UnauthorizedPage.module.css';
import { Link } from 'react-router-dom';

function UnauthorizedPage() {
  return (
    <div>
      <div className={style.gandalf}>
        <div className={style.fireball}></div>
        <div className={style.skirt}></div>
        <div className={style.sleeves}></div>
        <div className={style.shoulders}>
          <div className={style.hand_left}></div>
          <div className={style.hand_right}></div>
        </div>
        <div className={style.head}>
          <div className={style.hair}></div>
          <div className={style.beard}></div>
        </div>
      </div>
      <div className={style.message}>
        <h1>403 - You Shall Not Pass</h1>
        <p>
          Uh oh, Gandalf is blocking the way!
          <br />
          Maybe you have a typo in the url? Or you meant to go to a different location?
        </p>
      </div>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
}

export default UnauthorizedPage;
