import React from 'react';
import css from './brandcard.module.css';

export default function BrandCard(props) {
  return (<div className={css.brandcard}>
            <img src={props.img} className={css.brandimage} alt='' />
            <h3 className={css.brandname}>{props["brand-name"]}</h3>
  </div>);
}
