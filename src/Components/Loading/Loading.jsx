import React from 'react';
import css from './loading.module.css';

export default function Loading() {
  return <div className={css.loadingcontainer}>
      <div className={css.loading}></div>
  </div>;
}
