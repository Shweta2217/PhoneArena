import React from 'react';
import css from './nav.module.css';

export default function Nav() {
  return (<div className={css.navbar}>
      <h3 className={css.logo}>PhoneArena</h3>
  </div>);
}
