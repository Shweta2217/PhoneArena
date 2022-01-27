import React from 'react';
import css from './pagenotfound.module.css'

export default function PageNotFound() {
  return <div className={css.pagenotfound}>
      <h1 className={css.pagenotfoundheading}>404! Page Not Found</h1>
  </div>;
}